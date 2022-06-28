(function() {var implementors = {};
implementors["demo_client"] = [{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"demo_client/narwhal/validator_server/struct.ValidatorServer.html\" title=\"struct demo_client::narwhal::validator_server::ValidatorServer\">ValidatorServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"demo_client/narwhal/validator_server/trait.Validator.html\" title=\"trait demo_client::narwhal::validator_server::Validator\">Validator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.7.2/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["demo_client::narwhal::validator_server::ValidatorServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"demo_client/narwhal/proposer_server/struct.ProposerServer.html\" title=\"struct demo_client::narwhal::proposer_server::ProposerServer\">ProposerServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"demo_client/narwhal/proposer_server/trait.Proposer.html\" title=\"trait demo_client::narwhal::proposer_server::Proposer\">Proposer</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.7.2/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["demo_client::narwhal::proposer_server::ProposerServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"demo_client/narwhal/configuration_server/struct.ConfigurationServer.html\" title=\"struct demo_client::narwhal::configuration_server::ConfigurationServer\">ConfigurationServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"demo_client/narwhal/configuration_server/trait.Configuration.html\" title=\"trait demo_client::narwhal::configuration_server::Configuration\">Configuration</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.7.2/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["demo_client::narwhal::configuration_server::ConfigurationServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"demo_client/narwhal/primary_to_primary_server/struct.PrimaryToPrimaryServer.html\" title=\"struct demo_client::narwhal::primary_to_primary_server::PrimaryToPrimaryServer\">PrimaryToPrimaryServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"demo_client/narwhal/primary_to_primary_server/trait.PrimaryToPrimary.html\" title=\"trait demo_client::narwhal::primary_to_primary_server::PrimaryToPrimary\">PrimaryToPrimary</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.7.2/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["demo_client::narwhal::primary_to_primary_server::PrimaryToPrimaryServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"demo_client/narwhal/worker_to_worker_server/struct.WorkerToWorkerServer.html\" title=\"struct demo_client::narwhal::worker_to_worker_server::WorkerToWorkerServer\">WorkerToWorkerServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"demo_client/narwhal/worker_to_worker_server/trait.WorkerToWorker.html\" title=\"trait demo_client::narwhal::worker_to_worker_server::WorkerToWorker\">WorkerToWorker</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.7.2/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["demo_client::narwhal::worker_to_worker_server::WorkerToWorkerServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"demo_client/narwhal/worker_to_primary_server/struct.WorkerToPrimaryServer.html\" title=\"struct demo_client::narwhal::worker_to_primary_server::WorkerToPrimaryServer\">WorkerToPrimaryServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"demo_client/narwhal/worker_to_primary_server/trait.WorkerToPrimary.html\" title=\"trait demo_client::narwhal::worker_to_primary_server::WorkerToPrimary\">WorkerToPrimary</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.7.2/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["demo_client::narwhal::worker_to_primary_server::WorkerToPrimaryServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"demo_client/narwhal/primary_to_worker_server/struct.PrimaryToWorkerServer.html\" title=\"struct demo_client::narwhal::primary_to_worker_server::PrimaryToWorkerServer\">PrimaryToWorkerServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"demo_client/narwhal/primary_to_worker_server/trait.PrimaryToWorker.html\" title=\"trait demo_client::narwhal::primary_to_worker_server::PrimaryToWorker\">PrimaryToWorker</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.7.2/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["demo_client::narwhal::primary_to_worker_server::PrimaryToWorkerServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"demo_client/narwhal/transactions_server/struct.TransactionsServer.html\" title=\"struct demo_client::narwhal::transactions_server::TransactionsServer\">TransactionsServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"demo_client/narwhal/transactions_server/trait.Transactions.html\" title=\"trait demo_client::narwhal::transactions_server::Transactions\">Transactions</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.7.2/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["demo_client::narwhal::transactions_server::TransactionsServer"]}];
implementors["types"] = [{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"types/struct.ValidatorServer.html\" title=\"struct types::ValidatorServer\">ValidatorServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"types/trait.Validator.html\" title=\"trait types::Validator\">Validator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["types::proto::narwhal::validator_server::ValidatorServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"types/struct.ProposerServer.html\" title=\"struct types::ProposerServer\">ProposerServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"types/trait.Proposer.html\" title=\"trait types::Proposer\">Proposer</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["types::proto::narwhal::proposer_server::ProposerServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"types/struct.ConfigurationServer.html\" title=\"struct types::ConfigurationServer\">ConfigurationServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"types/trait.Configuration.html\" title=\"trait types::Configuration\">Configuration</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["types::proto::narwhal::configuration_server::ConfigurationServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"types/struct.PrimaryToPrimaryServer.html\" title=\"struct types::PrimaryToPrimaryServer\">PrimaryToPrimaryServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"types/trait.PrimaryToPrimary.html\" title=\"trait types::PrimaryToPrimary\">PrimaryToPrimary</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["types::proto::narwhal::primary_to_primary_server::PrimaryToPrimaryServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"types/struct.WorkerToWorkerServer.html\" title=\"struct types::WorkerToWorkerServer\">WorkerToWorkerServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"types/trait.WorkerToWorker.html\" title=\"trait types::WorkerToWorker\">WorkerToWorker</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["types::proto::narwhal::worker_to_worker_server::WorkerToWorkerServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"types/struct.WorkerToPrimaryServer.html\" title=\"struct types::WorkerToPrimaryServer\">WorkerToPrimaryServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"types/trait.WorkerToPrimary.html\" title=\"trait types::WorkerToPrimary\">WorkerToPrimary</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["types::proto::narwhal::worker_to_primary_server::WorkerToPrimaryServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"types/struct.PrimaryToWorkerServer.html\" title=\"struct types::PrimaryToWorkerServer\">PrimaryToWorkerServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"types/trait.PrimaryToWorker.html\" title=\"trait types::PrimaryToWorker\">PrimaryToWorker</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["types::proto::narwhal::primary_to_worker_server::PrimaryToWorkerServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.8/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"types/struct.TransactionsServer.html\" title=\"struct types::TransactionsServer\">TransactionsServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"types/trait.Transactions.html\" title=\"trait types::Transactions\">Transactions</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["types::proto::narwhal::transactions_server::TransactionsServer"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()