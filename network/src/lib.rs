// Copyright (c) 2021, Facebook, Inc. and its affiliates
// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
#![warn(
    future_incompatible,
    nonstandard_style,
    rust_2018_idioms,
    rust_2021_compatibility
)]

mod primary;
mod retry;
mod worker;

use std::future::Future;
use std::sync::Arc;
use tokio::sync::{Semaphore, OwnedSemaphorePermit};
use tokio::task::JoinHandle;
use tracing::info;

pub use crate::{
    primary::{PrimaryNetwork, PrimaryToWorkerNetwork},
    retry::RetryConfig,
    worker::WorkerNetwork,
};

#[derive(Debug)]
#[must_use]
pub struct CancelHandler<T>(tokio::task::JoinHandle<T>);

impl<T> Drop for CancelHandler<T> {
    fn drop(&mut self) {
        self.0.abort();
    }
}

impl<T> std::future::Future for CancelHandler<T> {
    type Output = T;

    fn poll(
        mut self: std::pin::Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Self::Output> {
        use futures::future::FutureExt;
        // If the task panics just propagate it up
        self.0.poll_unpin(cx).map(Result::unwrap)
    }
}

// This is the maximum number of network tasks that we will create for sending messages. It is a
// limit per network struct - PrimaryNetwork, PrimaryToWorkerNetwork, and WorkerNetwork each have
// their own limit.
//
// The exact number here probably isn't important, the key things is that it should be finite so
// that we don't create unbounded numbers of tasks.
pub const MAX_TASK_CONCURRENCY: usize = 200;

async fn acquire_permit(semaphore: Arc<Semaphore>) -> Option<OwnedSemaphorePermit> {
  if let Ok(permit) = semaphore.clone().try_acquire_owned() {
    return Some(permit);
  }

  info!("concurrent task limit reached, waiting...");

  semaphore.acquire_owned().await.ok()
}

pub async fn spawn_with_limited_concurrency(
    semaphore: Arc<Semaphore>,
    fut: impl Future<Output = ()> + Send + 'static,
) -> JoinHandle<()> {
    match acquire_permit(semaphore).await {
        Some(permit) => tokio::spawn(async move {
            let _permit = permit; // hold permit until future completes
            fut.await;
        }),
        // semaphore has been closed, return an empty task and do nothing
        None => tokio::spawn(async move {}),
    }
}
