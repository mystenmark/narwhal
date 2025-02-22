// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
use prometheus::{default_registry, register_int_gauge_vec_with_registry, IntGaugeVec, Registry};
use std::sync::Once;

#[derive(Clone)]
pub struct Metrics {
    pub worker_metrics: Option<WorkerMetrics>,
}

static mut METRICS: Metrics = Metrics {
    worker_metrics: None,
};
static INIT: Once = Once::new();

/// Initialises the metrics. Should be called only once when the worker
/// node is initialised, otherwise it will lead to erroneously creating
/// multiple registries.
pub fn initialise_metrics(metrics_registry: &Registry) -> Metrics {
    unsafe {
        INIT.call_once(|| {
            // Essential/core metrics across the worker node
            let node_metrics = WorkerMetrics::new(metrics_registry);

            METRICS = Metrics {
                worker_metrics: Some(node_metrics),
            }
        });
        METRICS.clone()
    }
}

#[derive(Clone)]
pub struct WorkerMetrics {
    /// Number of elements in pending list of header_waiter
    pub pending_elements_worker_synchronizer: IntGaugeVec,
}

impl WorkerMetrics {
    pub fn new(registry: &Registry) -> Self {
        Self {
            pending_elements_worker_synchronizer: register_int_gauge_vec_with_registry!(
                "pending_elements_worker_synchronizer",
                "Number of pending elements in worker block synchronizer",
                &["epoch"],
                registry
            )
            .unwrap(),
        }
    }
}

impl Default for WorkerMetrics {
    fn default() -> Self {
        Self::new(default_registry())
    }
}
