---
category: ai_ml
description: Train and deploy custom ML models. AutoML, prediction, and model garden.
endpoints:
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/operations
  resource: operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/operations/{operationsId}
  resource: operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/operations/{operationsId}:cancel
  resource: operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/operations/{operationsId}:wait
  resource: operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/operations/{operationsId}
  resource: operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/deploymentResourcePools/{deploymentResourcePoolsId}/operations
  resource: deploymentResourcePools.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/deploymentResourcePools/{deploymentResourcePoolsId}/operations/{operationsId}
  resource: deploymentResourcePools.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/deploymentResourcePools/{deploymentResourcePoolsId}/operations/{operationsId}:cancel
  resource: deploymentResourcePools.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/deploymentResourcePools/{deploymentResourcePoolsId}/operations/{operationsId}:wait
  resource: deploymentResourcePools.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/deploymentResourcePools/{deploymentResourcePoolsId}/operations/{operationsId}
  resource: deploymentResourcePools.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/featurestores/{featurestoresId}/operations
  resource: featurestores.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/featurestores/{featurestoresId}/operations/{operationsId}
  resource: featurestores.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/featurestores/{featurestoresId}/operations/{operationsId}:cancel
  resource: featurestores.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/featurestores/{featurestoresId}/operations/{operationsId}:wait
  resource: featurestores.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/featurestores/{featurestoresId}/operations/{operationsId}
  resource: featurestores.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations
  resource: featurestores.entityTypes.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations/{operationsId}
  resource: featurestores.entityTypes.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations/{operationsId}:cancel
  resource: featurestores.entityTypes.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations/{operationsId}:wait
  resource: featurestores.entityTypes.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations/{operationsId}
  resource: featurestores.entityTypes.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations
  resource: featurestores.entityTypes.features.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations/{operationsId}
  resource: featurestores.entityTypes.features.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations/{operationsId}:cancel
  resource: featurestores.entityTypes.features.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations/{operationsId}:wait
  resource: featurestores.entityTypes.features.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations/{operationsId}
  resource: featurestores.entityTypes.features.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/customJobs/{customJobsId}/operations
  resource: customJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/customJobs/{customJobsId}/operations/{operationsId}
  resource: customJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/customJobs/{customJobsId}/operations/{operationsId}:cancel
  resource: customJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/customJobs/{customJobsId}/operations/{operationsId}:wait
  resource: customJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/customJobs/{customJobsId}/operations/{operationsId}
  resource: customJobs.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/dataLabelingJobs/{dataLabelingJobsId}/operations
  resource: dataLabelingJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/dataLabelingJobs/{dataLabelingJobsId}/operations/{operationsId}
  resource: dataLabelingJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/dataLabelingJobs/{dataLabelingJobsId}/operations/{operationsId}:cancel
  resource: dataLabelingJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/dataLabelingJobs/{dataLabelingJobsId}/operations/{operationsId}:wait
  resource: dataLabelingJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/dataLabelingJobs/{dataLabelingJobsId}/operations/{operationsId}
  resource: dataLabelingJobs.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations
  resource: hyperparameterTuningJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations/{operationsId}
  resource: hyperparameterTuningJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations/{operationsId}:cancel
  resource: hyperparameterTuningJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations/{operationsId}:wait
  resource: hyperparameterTuningJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations/{operationsId}
  resource: hyperparameterTuningJobs.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/tuningJobs/{tuningJobsId}/operations
  resource: tuningJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/tuningJobs/{tuningJobsId}/operations/{operationsId}
  resource: tuningJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/tuningJobs/{tuningJobsId}/operations/{operationsId}:cancel
  resource: tuningJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/tuningJobs/{tuningJobsId}/operations/{operationsId}
  resource: tuningJobs.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/indexes/{indexesId}/operations
  resource: indexes.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/indexes/{indexesId}/operations/{operationsId}
  resource: indexes.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/indexes/{indexesId}/operations/{operationsId}:cancel
  resource: indexes.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/indexes/{indexesId}/operations/{operationsId}:wait
  resource: indexes.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/indexes/{indexesId}/operations/{operationsId}
  resource: indexes.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/indexEndpoints/{indexEndpointsId}/operations
  resource: indexEndpoints.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/indexEndpoints/{indexEndpointsId}/operations/{operationsId}
  resource: indexEndpoints.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/indexEndpoints/{indexEndpointsId}/operations/{operationsId}:cancel
  resource: indexEndpoints.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/indexEndpoints/{indexEndpointsId}/operations/{operationsId}:wait
  resource: indexEndpoints.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/indexEndpoints/{indexEndpointsId}/operations/{operationsId}
  resource: indexEndpoints.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/metadataStores/{metadataStoresId}/operations
  resource: metadataStores.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/metadataStores/{metadataStoresId}/operations/{operationsId}
  resource: metadataStores.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/metadataStores/{metadataStoresId}/operations/{operationsId}:cancel
  resource: metadataStores.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/metadataStores/{metadataStoresId}/operations/{operationsId}:wait
  resource: metadataStores.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/metadataStores/{metadataStoresId}/operations/{operationsId}
  resource: metadataStores.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations
  resource: metadataStores.artifacts.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations/{operationsId}
  resource: metadataStores.artifacts.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations/{operationsId}:cancel
  resource: metadataStores.artifacts.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations/{operationsId}:wait
  resource: metadataStores.artifacts.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations/{operationsId}
  resource: metadataStores.artifacts.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations
  resource: metadataStores.contexts.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations/{operationsId}
  resource: metadataStores.contexts.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations/{operationsId}:cancel
  resource: metadataStores.contexts.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations/{operationsId}:wait
  resource: metadataStores.contexts.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations/{operationsId}
  resource: metadataStores.contexts.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/metadataStores/{metadataStoresId}/executions/{executionsId}/operations
  resource: metadataStores.executions.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/metadataStores/{metadataStoresId}/executions/{executionsId}/operations/{operationsId}
  resource: metadataStores.executions.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/metadataStores/{metadataStoresId}/executions/{executionsId}/operations/{operationsId}:cancel
  resource: metadataStores.executions.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/metadataStores/{metadataStoresId}/executions/{executionsId}/operations/{operationsId}:wait
  resource: metadataStores.executions.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/metadataStores/{metadataStoresId}/executions/{executionsId}/operations/{operationsId}
  resource: metadataStores.executions.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations
  resource: modelDeploymentMonitoringJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations/{operationsId}
  resource: modelDeploymentMonitoringJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations/{operationsId}:cancel
  resource: modelDeploymentMonitoringJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations/{operationsId}:wait
  resource: modelDeploymentMonitoringJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations/{operationsId}
  resource: modelDeploymentMonitoringJobs.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/migratableResources/{migratableResourcesId}/operations
  resource: migratableResources.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/migratableResources/{migratableResourcesId}/operations/{operationsId}
  resource: migratableResources.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/migratableResources/{migratableResourcesId}/operations/{operationsId}:cancel
  resource: migratableResources.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/migratableResources/{migratableResourcesId}/operations/{operationsId}:wait
  resource: migratableResources.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/migratableResources/{migratableResourcesId}/operations/{operationsId}
  resource: migratableResources.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/models/{modelsId}/operations
  resource: models.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/models/{modelsId}/operations/{operationsId}
  resource: models.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/models/{modelsId}/operations/{operationsId}:cancel
  resource: models.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/models/{modelsId}/operations/{operationsId}:wait
  resource: models.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/models/{modelsId}/operations/{operationsId}
  resource: models.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/models/{modelsId}/evaluations/{evaluationsId}/operations
  resource: models.evaluations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/models/{modelsId}/evaluations/{evaluationsId}/operations/{operationsId}
  resource: models.evaluations.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/models/{modelsId}/evaluations/{evaluationsId}/operations/{operationsId}:cancel
  resource: models.evaluations.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/models/{modelsId}/evaluations/{evaluationsId}/operations/{operationsId}:wait
  resource: models.evaluations.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/models/{modelsId}/evaluations/{evaluationsId}/operations/{operationsId}
  resource: models.evaluations.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/notebookExecutionJobs/{notebookExecutionJobsId}/operations
  resource: notebookExecutionJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/notebookExecutionJobs/{notebookExecutionJobsId}/operations/{operationsId}
  resource: notebookExecutionJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/notebookExecutionJobs/{notebookExecutionJobsId}/operations/{operationsId}:cancel
  resource: notebookExecutionJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/notebookExecutionJobs/{notebookExecutionJobsId}/operations/{operationsId}:wait
  resource: notebookExecutionJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/notebookExecutionJobs/{notebookExecutionJobsId}/operations/{operationsId}
  resource: notebookExecutionJobs.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/notebookRuntimes/{notebookRuntimesId}/operations
  resource: notebookRuntimes.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/notebookRuntimes/{notebookRuntimesId}/operations/{operationsId}
  resource: notebookRuntimes.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/notebookRuntimes/{notebookRuntimesId}/operations/{operationsId}:cancel
  resource: notebookRuntimes.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/notebookRuntimes/{notebookRuntimesId}/operations/{operationsId}:wait
  resource: notebookRuntimes.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/notebookRuntimes/{notebookRuntimesId}/operations/{operationsId}
  resource: notebookRuntimes.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations
  resource: notebookRuntimeTemplates.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations/{operationsId}
  resource: notebookRuntimeTemplates.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations/{operationsId}:cancel
  resource: notebookRuntimeTemplates.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations/{operationsId}:wait
  resource: notebookRuntimeTemplates.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations/{operationsId}
  resource: notebookRuntimeTemplates.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/studies/{studiesId}/operations
  resource: studies.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/studies/{studiesId}/operations/{operationsId}
  resource: studies.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/studies/{studiesId}/operations/{operationsId}:cancel
  resource: studies.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/studies/{studiesId}/operations/{operationsId}:wait
  resource: studies.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/studies/{studiesId}/operations/{operationsId}
  resource: studies.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/studies/{studiesId}/trials/{trialsId}/operations
  resource: studies.trials.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/studies/{studiesId}/trials/{trialsId}/operations/{operationsId}
  resource: studies.trials.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/studies/{studiesId}/trials/{trialsId}/operations/{operationsId}:cancel
  resource: studies.trials.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/studies/{studiesId}/trials/{trialsId}/operations/{operationsId}:wait
  resource: studies.trials.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/studies/{studiesId}/trials/{trialsId}/operations/{operationsId}
  resource: studies.trials.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/trainingPipelines/{trainingPipelinesId}/operations
  resource: trainingPipelines.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/trainingPipelines/{trainingPipelinesId}/operations/{operationsId}
  resource: trainingPipelines.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/trainingPipelines/{trainingPipelinesId}/operations/{operationsId}:cancel
  resource: trainingPipelines.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/trainingPipelines/{trainingPipelinesId}/operations/{operationsId}:wait
  resource: trainingPipelines.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/trainingPipelines/{trainingPipelinesId}/operations/{operationsId}
  resource: trainingPipelines.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/persistentResources/{persistentResourcesId}/operations
  resource: persistentResources.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/persistentResources/{persistentResourcesId}/operations/{operationsId}
  resource: persistentResources.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/persistentResources/{persistentResourcesId}/operations/{operationsId}:cancel
  resource: persistentResources.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/persistentResources/{persistentResourcesId}/operations/{operationsId}:wait
  resource: persistentResources.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/persistentResources/{persistentResourcesId}/operations/{operationsId}
  resource: persistentResources.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/pipelineJobs/{pipelineJobsId}/operations
  resource: pipelineJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/pipelineJobs/{pipelineJobsId}/operations/{operationsId}
  resource: pipelineJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/pipelineJobs/{pipelineJobsId}/operations/{operationsId}:cancel
  resource: pipelineJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/pipelineJobs/{pipelineJobsId}/operations/{operationsId}:wait
  resource: pipelineJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/pipelineJobs/{pipelineJobsId}/operations/{operationsId}
  resource: pipelineJobs.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/ragEngineConfig/operations
  resource: ragEngineConfig.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/ragEngineConfig/operations/{operationsId}
  resource: ragEngineConfig.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/ragEngineConfig/operations/{operationsId}:cancel
  resource: ragEngineConfig.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/ragEngineConfig/operations/{operationsId}:wait
  resource: ragEngineConfig.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/ragEngineConfig/operations/{operationsId}
  resource: ragEngineConfig.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/ragCorpora/{ragCorporaId}/operations
  resource: ragCorpora.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/ragCorpora/{ragCorporaId}/operations/{operationsId}
  resource: ragCorpora.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/ragCorpora/{ragCorporaId}/operations/{operationsId}:cancel
  resource: ragCorpora.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/ragCorpora/{ragCorporaId}/operations/{operationsId}:wait
  resource: ragCorpora.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/ragCorpora/{ragCorporaId}/operations/{operationsId}
  resource: ragCorpora.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations
  resource: ragCorpora.ragFiles.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations/{operationsId}
  resource: ragCorpora.ragFiles.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations/{operationsId}:cancel
  resource: ragCorpora.ragFiles.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations/{operationsId}:wait
  resource: ragCorpora.ragFiles.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations/{operationsId}
  resource: ragCorpora.ragFiles.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/schedules/{schedulesId}/operations
  resource: schedules.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/schedules/{schedulesId}/operations/{operationsId}
  resource: schedules.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/schedules/{schedulesId}/operations/{operationsId}:cancel
  resource: schedules.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/schedules/{schedulesId}/operations/{operationsId}:wait
  resource: schedules.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/schedules/{schedulesId}/operations/{operationsId}
  resource: schedules.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/specialistPools/{specialistPoolsId}/operations
  resource: specialistPools.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/specialistPools/{specialistPoolsId}/operations/{operationsId}
  resource: specialistPools.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/specialistPools/{specialistPoolsId}/operations/{operationsId}:cancel
  resource: specialistPools.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/specialistPools/{specialistPoolsId}/operations/{operationsId}:wait
  resource: specialistPools.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/specialistPools/{specialistPoolsId}/operations/{operationsId}
  resource: specialistPools.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/tensorboards/{tensorboardsId}/operations
  resource: tensorboards.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/tensorboards/{tensorboardsId}/operations/{operationsId}
  resource: tensorboards.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/tensorboards/{tensorboardsId}/operations/{operationsId}:cancel
  resource: tensorboards.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/tensorboards/{tensorboardsId}/operations/{operationsId}:wait
  resource: tensorboards.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/tensorboards/{tensorboardsId}/operations/{operationsId}
  resource: tensorboards.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations
  resource: tensorboards.experiments.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations/{operationsId}
  resource: tensorboards.experiments.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations/{operationsId}:cancel
  resource: tensorboards.experiments.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations/{operationsId}:wait
  resource: tensorboards.experiments.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations/{operationsId}
  resource: tensorboards.experiments.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations
  resource: tensorboards.experiments.runs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations/{operationsId}
  resource: tensorboards.experiments.runs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations/{operationsId}:cancel
  resource: tensorboards.experiments.runs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations/{operationsId}:wait
  resource: tensorboards.experiments.runs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations/{operationsId}
  resource: tensorboards.experiments.runs.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations
  resource: tensorboards.experiments.runs.timeSeries.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations/{operationsId}
  resource: tensorboards.experiments.runs.timeSeries.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations/{operationsId}:cancel
  resource: tensorboards.experiments.runs.timeSeries.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations/{operationsId}:wait
  resource: tensorboards.experiments.runs.timeSeries.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations/{operationsId}
  resource: tensorboards.experiments.runs.timeSeries.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/featureOnlineStores/{featureOnlineStoresId}/operations/{operationsId}:wait
  resource: featureOnlineStores.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/featureOnlineStores/{featureOnlineStoresId}/operations/{operationsId}
  resource: featureOnlineStores.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/featureOnlineStores/{featureOnlineStoresId}/operations/{operationsId}:wait
  resource: featureOnlineStores.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/featureOnlineStores/{featureOnlineStoresId}/operations/{operationsId}
  resource: featureOnlineStores.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/operations/{operationsId}:wait
  resource: featureOnlineStores.featureViews.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/operations/{operationsId}
  resource: featureOnlineStores.featureViews.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/operations/{operationsId}:wait
  resource: featureOnlineStores.featureViews.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/operations/{operationsId}
  resource: featureOnlineStores.featureViews.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/featureGroups/{featureGroupsId}/operations/{operationsId}:wait
  resource: featureGroups.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/featureGroups/{featureGroupsId}/operations/{operationsId}
  resource: featureGroups.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/featureGroups/{featureGroupsId}/operations/{operationsId}:wait
  resource: featureGroups.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/featureGroups/{featureGroupsId}/operations/{operationsId}
  resource: featureGroups.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/featureGroups/{featureGroupsId}/features/{featuresId}/operations/{operationsId}:wait
  resource: featureGroups.features.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/featureGroups/{featureGroupsId}/features/{featuresId}/operations/{operationsId}
  resource: featureGroups.features.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/featureGroups/{featureGroupsId}/features/{featuresId}/operations/{operationsId}:wait
  resource: featureGroups.features.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/featureGroups/{featureGroupsId}/features/{featuresId}/operations/{operationsId}
  resource: featureGroups.features.operations
- description: Lists Datasets in a Location.
  method: GET
  path: v1/datasets
  resource: datasets
- description: Gets a Dataset.
  method: GET
  path: v1/datasets/{datasetsId}
  resource: datasets
- description: Creates a Dataset.
  method: POST
  path: v1/datasets
  resource: datasets
- description: Updates a Dataset.
  method: PATCH
  path: v1/datasets/{datasetsId}
  resource: datasets
- description: Deletes a Dataset.
  method: DELETE
  path: v1/datasets/{datasetsId}
  resource: datasets
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/datasets/{datasetsId}/operations
  resource: datasets.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/datasets/{datasetsId}/operations/{operationsId}
  resource: datasets.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/datasets/{datasetsId}/operations/{operationsId}:cancel
  resource: datasets.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/datasets/{datasetsId}/operations/{operationsId}:wait
  resource: datasets.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/datasets/{datasetsId}/operations/{operationsId}
  resource: datasets.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/operations
  resource: datasets.dataItems.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/operations/{operationsId}
  resource: datasets.dataItems.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/operations/{operationsId}:cancel
  resource: datasets.dataItems.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/operations/{operationsId}:wait
  resource: datasets.dataItems.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/operations/{operationsId}
  resource: datasets.dataItems.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations
  resource: datasets.dataItems.annotations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations/{operationsId}
  resource: datasets.dataItems.annotations.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations/{operationsId}:cancel
  resource: datasets.dataItems.annotations.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations/{operationsId}:wait
  resource: datasets.dataItems.annotations.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations/{operationsId}
  resource: datasets.dataItems.annotations.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations
  resource: datasets.savedQueries.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations/{operationsId}
  resource: datasets.savedQueries.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations/{operationsId}:cancel
  resource: datasets.savedQueries.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations/{operationsId}:wait
  resource: datasets.savedQueries.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations/{operationsId}
  resource: datasets.savedQueries.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations
  resource: datasets.annotationSpecs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations/{operationsId}
  resource: datasets.annotationSpecs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations/{operationsId}:cancel
  resource: datasets.annotationSpecs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations/{operationsId}:wait
  resource: datasets.annotationSpecs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations/{operationsId}
  resource: datasets.annotationSpecs.operations
- description: Gets a Dataset version.
  method: GET
  path: v1/datasets/{datasetsId}/datasetVersions/{datasetVersionsId}
  resource: datasets.datasetVersions
- description: Lists DatasetVersions in a Dataset.
  method: GET
  path: v1/datasets/{datasetsId}/datasetVersions
  resource: datasets.datasetVersions
- description: Restores a dataset version.
  method: GET
  path: v1/datasets/{datasetsId}/datasetVersions/{datasetVersionsId}:restore
  resource: datasets.datasetVersions
- description: Create a version from a Dataset.
  method: POST
  path: v1/datasets/{datasetsId}/datasetVersions
  resource: datasets.datasetVersions
- description: Updates a DatasetVersion.
  method: PATCH
  path: v1/datasets/{datasetsId}/datasetVersions/{datasetVersionsId}
  resource: datasets.datasetVersions
- description: Deletes a Dataset version.
  method: DELETE
  path: v1/datasets/{datasetsId}/datasetVersions/{datasetVersionsId}
  resource: datasets.datasetVersions
- description: Evaluates instances based on a given metric.
  method: POST
  path: v1:evaluateInstances
  resource: v1
- description: Evaluates a dataset based on a set of given metrics.
  method: POST
  path: v1:evaluateDataset
  resource: v1
- description: Generates rubrics for a given prompt. A rubric represents a single testable criterion for evaluation. One input prompt c
  method: POST
  path: v1:generateInstanceRubrics
  resource: v1
- description: Gets a GenAI cache config.
  method: GET
  path: v1/projects/{projectsId}/cacheConfig
  resource: projects
- description: Updates a cache config.
  method: PATCH
  path: v1/projects/{projectsId}/cacheConfig
  resource: projects
- description: Lists information about the supported locations for this service. This method lists locations based on the resource scop
  method: GET
  path: v1/projects/{projectsId}/locations
  resource: projects.locations
- description: Gets information about a location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}
  resource: projects.locations
- description: Gets a RagEngineConfig.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragEngineConfig
  resource: projects.locations
- description: Generates synthetic (artificial) data based on a description
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:generateSyntheticData
  resource: projects.locations
- description: Evaluates instances based on a given metric.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:evaluateInstances
  resource: projects.locations
- description: Evaluates a dataset based on a set of given metrics.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:evaluateDataset
  resource: projects.locations
- description: Generates rubrics for a given prompt. A rubric represents a single testable criterion for evaluation. One input prompt c
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:generateInstanceRubrics
  resource: projects.locations
- description: Deploys a model to a new endpoint.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:deploy
  resource: projects.locations
- description: Retrieves relevant contexts for a query.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:retrieveContexts
  resource: projects.locations
- description: Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded respon
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:augmentPrompt
  resource: projects.locations
- description: Given an input text, it returns a score that evaluates the factuality of the text. It also extracts and returns claims f
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:corroborateContent
  resource: projects.locations
- description: Agentic Retrieval Ask API for RAG.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:askContexts
  resource: projects.locations
- description: Asynchronous API to retrieves relevant contexts for a query.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:asyncRetrieveContexts
  resource: projects.locations
- description: Updates a RagEngineConfig.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/ragEngineConfig
  resource: projects.locations
- description: Gets details of a single Featurestore.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}
  resource: projects.locations.featurestores
- description: Lists Featurestores in a given project and location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores
  resource: projects.locations.featurestores
- description: Searches Features matching a query in a given project.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores:searchFeatures
  resource: projects.locations.featurestores
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}:setIamPolicy
  resource: projects.locations.featurestores
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}:getIamPolicy
  resource: projects.locations.featurestores
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}:testIamPermissions
  resource: projects.locations.featurestores
- description: Creates a new Featurestore in a given project and location.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores
  resource: projects.locations.featurestores
- description: 'Batch reads Feature values from a Featurestore. This API enables batch reading Feature values, where each read instance '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}:batchReadFeatureValues
  resource: projects.locations.featurestores
- description: Updates the parameters of a single Featurestore.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}
  resource: projects.locations.featurestores
- description: 'Deletes a single Featurestore. The Featurestore must not contain any EntityTypes or `force` must be set to true for the '
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}
  resource: projects.locations.featurestores
- description: Gets details of a single EntityType.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}
  resource: projects.locations.featurestores.entityTypes
- description: Lists EntityTypes in a given Featurestore.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes
  resource: projects.locations.featurestores.entityTypes
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:setIamPolicy
  resource: projects.locations.featurestores.entityTypes
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:getIamPolicy
  resource: projects.locations.featurestores.entityTypes
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:testIamPermissions
  resource: projects.locations.featurestores.entityTypes
- description: Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an Entity
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:readFeatureValues
  resource: projects.locations.featurestores.entityTypes
- description: Reads Feature values for multiple entities. Depending on their size, data for different entities may be broken up across
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:streamingReadFeatureValues
  resource: projects.locations.featurestores.entityTypes
- description: 'Writes Feature values of one or more entities of an EntityType. The Feature values are merged into existing entities if '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:writeFeatureValues
  resource: projects.locations.featurestores.entityTypes
- description: Creates a new EntityType in a given Featurestore.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes
  resource: projects.locations.featurestores.entityTypes
- description: Imports Feature values into the Featurestore from a source storage. The progress of the import is tracked by the returne
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:importFeatureValues
  resource: projects.locations.featurestores.entityTypes
- description: Exports Feature values from all the entities of a target EntityType.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:exportFeatureValues
  resource: projects.locations.featurestores.entityTypes
- description: 'Delete Feature values from Featurestore. The progress of the deletion is tracked by the returned operation. The deleted '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}:deleteFeatureValues
  resource: projects.locations.featurestores.entityTypes
- description: Updates the parameters of a single EntityType.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}
  resource: projects.locations.featurestores.entityTypes
- description: Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}
  resource: projects.locations.featurestores.entityTypes
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations
  resource: projects.locations.featurestores.entityTypes.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations/{operationsId}
  resource: projects.locations.featurestores.entityTypes.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations/{operationsId}:cancel
  resource: projects.locations.featurestores.entityTypes.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations/{operationsId}:wait
  resource: projects.locations.featurestores.entityTypes.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/operations/{operationsId}
  resource: projects.locations.featurestores.entityTypes.operations
- description: Gets details of a single Feature.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}
  resource: projects.locations.featurestores.entityTypes.features
- description: Lists Features in a given EntityType.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features
  resource: projects.locations.featurestores.entityTypes.features
- description: Creates a new Feature in a given EntityType.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features
  resource: projects.locations.featurestores.entityTypes.features
- description: Creates a batch of Features in a given EntityType.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features:batchCreate
  resource: projects.locations.featurestores.entityTypes.features
- description: Updates the parameters of a single Feature.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}
  resource: projects.locations.featurestores.entityTypes.features
- description: Deletes a single Feature.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}
  resource: projects.locations.featurestores.entityTypes.features
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations
  resource: projects.locations.featurestores.entityTypes.features.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations/{operationsId}
  resource: projects.locations.featurestores.entityTypes.features.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations/{operationsId}:cancel
  resource: projects.locations.featurestores.entityTypes.features.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations/{operationsId}:wait
  resource: projects.locations.featurestores.entityTypes.features.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/entityTypes/{entityTypesId}/features/{featuresId}/operations/{operationsId}
  resource: projects.locations.featurestores.entityTypes.features.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/operations
  resource: projects.locations.featurestores.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/operations/{operationsId}
  resource: projects.locations.featurestores.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/operations/{operationsId}:cancel
  resource: projects.locations.featurestores.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/operations/{operationsId}:wait
  resource: projects.locations.featurestores.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featurestores/{featurestoresId}/operations/{operationsId}
  resource: projects.locations.featurestores.operations
- description: Gets a Model.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}
  resource: projects.locations.models
- description: Lists Models in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models
  resource: projects.locations.models
- description: Lists versions of the specified model.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:listVersions
  resource: projects.locations.models
- description: Lists checkpoints of the specified model version.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:listCheckpoints
  resource: projects.locations.models
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:setIamPolicy
  resource: projects.locations.models
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:getIamPolicy
  resource: projects.locations.models
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:testIamPermissions
  resource: projects.locations.models
- description: Uploads a Model artifact into Vertex AI.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models:upload
  resource: projects.locations.models
- description: Incrementally update the dataset used for an examples model.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:updateExplanationDataset
  resource: projects.locations.models
- description: Merges a set of aliases for a Model version.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:mergeVersionAliases
  resource: projects.locations.models
- description: Exports a trained, exportable Model to a location specified by the user. A Model is considered to be exportable if it ha
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:export
  resource: projects.locations.models
- description: Copies an already existing Vertex AI Model into the specified Location. The source Model must exist in the same Project.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models:copy
  resource: projects.locations.models
- description: Updates a Model.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}
  resource: projects.locations.models
- description: Deletes a Model. A model cannot be deleted if any Endpoint resource has a DeployedModel based on the model in its deploy
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}
  resource: projects.locations.models
- description: 'Deletes a Model version. Model version can only be deleted if there are no DeployedModels created from it. Deleting the '
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}:deleteVersion
  resource: projects.locations.models
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/operations
  resource: projects.locations.models.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/operations/{operationsId}
  resource: projects.locations.models.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/operations/{operationsId}:cancel
  resource: projects.locations.models.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/operations/{operationsId}:wait
  resource: projects.locations.models.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/operations/{operationsId}
  resource: projects.locations.models.operations
- description: Gets a ModelEvaluation.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}
  resource: projects.locations.models.evaluations
- description: Lists ModelEvaluations in a Model.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations
  resource: projects.locations.models.evaluations
- description: Imports an externally generated ModelEvaluation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations:import
  resource: projects.locations.models.evaluations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}/operations
  resource: projects.locations.models.evaluations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}/operations/{operationsId}
  resource: projects.locations.models.evaluations.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}/operations/{operationsId}:cancel
  resource: projects.locations.models.evaluations.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}/operations/{operationsId}:wait
  resource: projects.locations.models.evaluations.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}/operations/{operationsId}
  resource: projects.locations.models.evaluations.operations
- description: Gets a ModelEvaluationSlice.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}/slices/{slicesId}
  resource: projects.locations.models.evaluations.slices
- description: Lists ModelEvaluationSlices in a ModelEvaluation.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}/slices
  resource: projects.locations.models.evaluations.slices
- description: Imports a list of externally generated EvaluatedAnnotations.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/models/{modelsId}/evaluations/{evaluationsId}/slices/{slicesId}:batchImport
  resource: projects.locations.models.evaluations.slices
- description: Gets a NotebookRuntimeTemplate.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}
  resource: projects.locations.notebookRuntimeTemplates
- description: Lists NotebookRuntimeTemplates in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates
  resource: projects.locations.notebookRuntimeTemplates
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}:setIamPolicy
  resource: projects.locations.notebookRuntimeTemplates
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}:getIamPolicy
  resource: projects.locations.notebookRuntimeTemplates
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}:testIamPermissions
  resource: projects.locations.notebookRuntimeTemplates
- description: Creates a NotebookRuntimeTemplate.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates
  resource: projects.locations.notebookRuntimeTemplates
- description: Updates a NotebookRuntimeTemplate.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}
  resource: projects.locations.notebookRuntimeTemplates
- description: Deletes a NotebookRuntimeTemplate.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}
  resource: projects.locations.notebookRuntimeTemplates
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations
  resource: projects.locations.notebookRuntimeTemplates.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations/{operationsId}
  resource: projects.locations.notebookRuntimeTemplates.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations/{operationsId}:cancel
  resource: projects.locations.notebookRuntimeTemplates.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations/{operationsId}:wait
  resource: projects.locations.notebookRuntimeTemplates.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimeTemplates/{notebookRuntimeTemplatesId}/operations/{operationsId}
  resource: projects.locations.notebookRuntimeTemplates.operations
- description: Gets details of a single FeatureOnlineStore.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}
  resource: projects.locations.featureOnlineStores
- description: Lists FeatureOnlineStores in a given project and location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores
  resource: projects.locations.featureOnlineStores
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}:setIamPolicy
  resource: projects.locations.featureOnlineStores
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}:getIamPolicy
  resource: projects.locations.featureOnlineStores
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}:testIamPermissions
  resource: projects.locations.featureOnlineStores
- description: Creates a new FeatureOnlineStore in a given project and location.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores
  resource: projects.locations.featureOnlineStores
- description: Updates the parameters of a single FeatureOnlineStore.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}
  resource: projects.locations.featureOnlineStores
- description: Deletes a single FeatureOnlineStore. The FeatureOnlineStore must not contain any FeatureViews.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}
  resource: projects.locations.featureOnlineStores
- description: Gets details of a single FeatureView.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}
  resource: projects.locations.featureOnlineStores.featureViews
- description: Lists FeatureViews in a given FeatureOnlineStore.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews
  resource: projects.locations.featureOnlineStores.featureViews
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}:setIamPolicy
  resource: projects.locations.featureOnlineStores.featureViews
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}:getIamPolicy
  resource: projects.locations.featureOnlineStores.featureViews
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}:testIamPermissions
  resource: projects.locations.featureOnlineStores.featureViews
- description: Creates a new FeatureView in a given FeatureOnlineStore.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews
  resource: projects.locations.featureOnlineStores.featureViews
- description: Triggers on-demand sync for the FeatureView.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}:sync
  resource: projects.locations.featureOnlineStores.featureViews
- description: Fetch feature values under a FeatureView.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}:fetchFeatureValues
  resource: projects.locations.featureOnlineStores.featureViews
- description: Search the nearest entities under a FeatureView. Search only works for indexable feature view; if a feature view isn't i
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}:searchNearestEntities
  resource: projects.locations.featureOnlineStores.featureViews
- description: Bidirectional streaming RPC to directly write to feature values in a feature view. Requests may not have a one-to-one ma
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}:directWrite
  resource: projects.locations.featureOnlineStores.featureViews
- description: RPC to generate an access token for the given feature view. FeatureViews under the same FeatureOnlineStore share the sam
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}:generateFetchAccessToken
  resource: projects.locations.featureOnlineStores.featureViews
- description: Updates the parameters of a single FeatureView.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}
  resource: projects.locations.featureOnlineStores.featureViews
- description: Deletes a single FeatureView.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}
  resource: projects.locations.featureOnlineStores.featureViews
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/operations/{operationsId}:wait
  resource: projects.locations.featureOnlineStores.featureViews.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/operations/{operationsId}
  resource: projects.locations.featureOnlineStores.featureViews.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/operations/{operationsId}:wait
  resource: projects.locations.featureOnlineStores.featureViews.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/operations/{operationsId}
  resource: projects.locations.featureOnlineStores.featureViews.operations
- description: Gets details of a single FeatureViewSync.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/featureViewSyncs/{featureViewSyncsId}
  resource: projects.locations.featureOnlineStores.featureViews.featureViewSyncs
- description: Lists FeatureViewSyncs in a given FeatureView.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/featureViews/{featureViewsId}/featureViewSyncs
  resource: projects.locations.featureOnlineStores.featureViews.featureViewSyncs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/operations/{operationsId}:wait
  resource: projects.locations.featureOnlineStores.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/operations/{operationsId}
  resource: projects.locations.featureOnlineStores.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/operations/{operationsId}:wait
  resource: projects.locations.featureOnlineStores.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featureOnlineStores/{featureOnlineStoresId}/operations/{operationsId}
  resource: projects.locations.featureOnlineStores.operations
- description: Gets details of a single FeatureGroup.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}
  resource: projects.locations.featureGroups
- description: Lists FeatureGroups in a given project and location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups
  resource: projects.locations.featureGroups
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}:setIamPolicy
  resource: projects.locations.featureGroups
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}:getIamPolicy
  resource: projects.locations.featureGroups
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}:testIamPermissions
  resource: projects.locations.featureGroups
- description: Creates a new FeatureGroup in a given project and location.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups
  resource: projects.locations.featureGroups
- description: Updates the parameters of a single FeatureGroup.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}
  resource: projects.locations.featureGroups
- description: Deletes a single FeatureGroup.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}
  resource: projects.locations.featureGroups
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/operations/{operationsId}:wait
  resource: projects.locations.featureGroups.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/operations/{operationsId}
  resource: projects.locations.featureGroups.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/operations/{operationsId}:wait
  resource: projects.locations.featureGroups.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/operations/{operationsId}
  resource: projects.locations.featureGroups.operations
- description: Gets details of a single Feature.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features/{featuresId}
  resource: projects.locations.featureGroups.features
- description: Lists Features in a given FeatureGroup.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features
  resource: projects.locations.featureGroups.features
- description: Creates a new Feature in a given FeatureGroup.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features
  resource: projects.locations.featureGroups.features
- description: Creates a batch of Features in a given FeatureGroup.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features:batchCreate
  resource: projects.locations.featureGroups.features
- description: Updates the parameters of a single Feature.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features/{featuresId}
  resource: projects.locations.featureGroups.features
- description: Deletes a single Feature.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features/{featuresId}
  resource: projects.locations.featureGroups.features
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features/{featuresId}/operations/{operationsId}:wait
  resource: projects.locations.featureGroups.features.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features/{featuresId}/operations/{operationsId}
  resource: projects.locations.featureGroups.features.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features/{featuresId}/operations/{operationsId}:wait
  resource: projects.locations.featureGroups.features.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/featureGroups/{featureGroupsId}/features/{featuresId}/operations/{operationsId}
  resource: projects.locations.featureGroups.features.operations
- description: Gets a Dataset.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}
  resource: projects.locations.datasets
- description: Lists Datasets in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets
  resource: projects.locations.datasets
- description: Searches DataItems in a Dataset.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:searchDataItems
  resource: projects.locations.datasets
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:setIamPolicy
  resource: projects.locations.datasets
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:getIamPolicy
  resource: projects.locations.datasets
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:testIamPermissions
  resource: projects.locations.datasets
- description: Creates a Dataset.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets
  resource: projects.locations.datasets
- description: Imports data into a Dataset.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:import
  resource: projects.locations.datasets
- description: Exports data from a Dataset.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:export
  resource: projects.locations.datasets
- description: Updates a Dataset.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}
  resource: projects.locations.datasets
- description: Deletes a Dataset.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}
  resource: projects.locations.datasets
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/operations
  resource: projects.locations.datasets.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/operations/{operationsId}
  resource: projects.locations.datasets.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/operations/{operationsId}:cancel
  resource: projects.locations.datasets.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/operations/{operationsId}:wait
  resource: projects.locations.datasets.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/operations/{operationsId}
  resource: projects.locations.datasets.operations
- description: Gets a Dataset version.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/datasetVersions/{datasetVersionsId}
  resource: projects.locations.datasets.datasetVersions
- description: Lists DatasetVersions in a Dataset.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/datasetVersions
  resource: projects.locations.datasets.datasetVersions
- description: Restores a dataset version.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/datasetVersions/{datasetVersionsId}:restore
  resource: projects.locations.datasets.datasetVersions
- description: Create a version from a Dataset.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/datasetVersions
  resource: projects.locations.datasets.datasetVersions
- description: Updates a DatasetVersion.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/datasetVersions/{datasetVersionsId}
  resource: projects.locations.datasets.datasetVersions
- description: Deletes a Dataset version.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/datasetVersions/{datasetVersionsId}
  resource: projects.locations.datasets.datasetVersions
- description: Lists DataItems in a Dataset.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems
  resource: projects.locations.datasets.dataItems
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/operations
  resource: projects.locations.datasets.dataItems.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/operations/{operationsId}
  resource: projects.locations.datasets.dataItems.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/operations/{operationsId}:cancel
  resource: projects.locations.datasets.dataItems.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/operations/{operationsId}:wait
  resource: projects.locations.datasets.dataItems.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/operations/{operationsId}
  resource: projects.locations.datasets.dataItems.operations
- description: Lists Annotations belongs to a dataitem.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations
  resource: projects.locations.datasets.dataItems.annotations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations
  resource: projects.locations.datasets.dataItems.annotations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations/{operationsId}
  resource: projects.locations.datasets.dataItems.annotations.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations/{operationsId}:cancel
  resource: projects.locations.datasets.dataItems.annotations.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations/{operationsId}:wait
  resource: projects.locations.datasets.dataItems.annotations.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/dataItems/{dataItemsId}/annotations/{annotationsId}/operations/{operationsId}
  resource: projects.locations.datasets.dataItems.annotations.operations
- description: Lists SavedQueries in a Dataset.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/savedQueries
  resource: projects.locations.datasets.savedQueries
- description: Deletes a SavedQuery.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/savedQueries/{savedQueriesId}
  resource: projects.locations.datasets.savedQueries
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations
  resource: projects.locations.datasets.savedQueries.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations/{operationsId}
  resource: projects.locations.datasets.savedQueries.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations/{operationsId}:cancel
  resource: projects.locations.datasets.savedQueries.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations/{operationsId}:wait
  resource: projects.locations.datasets.savedQueries.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/savedQueries/{savedQueriesId}/operations/{operationsId}
  resource: projects.locations.datasets.savedQueries.operations
- description: Gets an AnnotationSpec.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}
  resource: projects.locations.datasets.annotationSpecs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations
  resource: projects.locations.datasets.annotationSpecs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations/{operationsId}
  resource: projects.locations.datasets.annotationSpecs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations/{operationsId}:cancel
  resource: projects.locations.datasets.annotationSpecs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations/{operationsId}:wait
  resource: projects.locations.datasets.annotationSpecs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/annotationSpecs/{annotationSpecsId}/operations/{operationsId}
  resource: projects.locations.datasets.annotationSpecs.operations
- description: Gets a reasoning engine.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}
  resource: projects.locations.reasoningEngines
- description: Lists reasoning engines in a location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines
  resource: projects.locations.reasoningEngines
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}:setIamPolicy
  resource: projects.locations.reasoningEngines
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}:getIamPolicy
  resource: projects.locations.reasoningEngines
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}:testIamPermissions
  resource: projects.locations.reasoningEngines
- description: Queries using a reasoning engine.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}:query
  resource: projects.locations.reasoningEngines
- description: Streams queries using a reasoning engine.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}:streamQuery
  resource: projects.locations.reasoningEngines
- description: Creates a reasoning engine.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines
  resource: projects.locations.reasoningEngines
- description: Executes code statelessly.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}:executeCode
  resource: projects.locations.reasoningEngines
- description: Updates a reasoning engine.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}
  resource: projects.locations.reasoningEngines
- description: Deletes a reasoning engine.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}
  resource: projects.locations.reasoningEngines
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/operations
  resource: projects.locations.reasoningEngines.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/operations/{operationsId}
  resource: projects.locations.reasoningEngines.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/operations/{operationsId}:cancel
  resource: projects.locations.reasoningEngines.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/operations/{operationsId}:wait
  resource: projects.locations.reasoningEngines.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/operations/{operationsId}
  resource: projects.locations.reasoningEngines.operations
- description: Get a Memory.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}
  resource: projects.locations.reasoningEngines.memories
- description: List Memories.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories
  resource: projects.locations.reasoningEngines.memories
- description: Create a Memory.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories
  resource: projects.locations.reasoningEngines.memories
- description: Generate memories.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories:generate
  resource: projects.locations.reasoningEngines.memories
- description: Retrieve memories.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories:retrieve
  resource: projects.locations.reasoningEngines.memories
- description: Rollback Memory to a specific revision.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}:rollback
  resource: projects.locations.reasoningEngines.memories
- description: Purge memories.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories:purge
  resource: projects.locations.reasoningEngines.memories
- description: Update a Memory.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}
  resource: projects.locations.reasoningEngines.memories
- description: Delete a Memory.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}
  resource: projects.locations.reasoningEngines.memories
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations
  resource: projects.locations.reasoningEngines.memories.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations/{operationsId}
  resource: projects.locations.reasoningEngines.memories.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations/{operationsId}:cancel
  resource: projects.locations.reasoningEngines.memories.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations/{operationsId}:wait
  resource: projects.locations.reasoningEngines.memories.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations/{operationsId}
  resource: projects.locations.reasoningEngines.memories.operations
- description: Get a Memory Revision.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/revisions/{revisionsId}
  resource: projects.locations.reasoningEngines.memories.revisions
- description: List Memory Revisions for a Memory.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/revisions
  resource: projects.locations.reasoningEngines.memories.revisions
- description: Gets details of the specific SandboxEnvironment.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}
  resource: projects.locations.reasoningEngines.sandboxEnvironments
- description: Lists SandboxEnvironments in a given reasoning engine.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments
  resource: projects.locations.reasoningEngines.sandboxEnvironments
- description: Executes using a sandbox environment.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}:execute
  resource: projects.locations.reasoningEngines.sandboxEnvironments
- description: Creates a SandboxEnvironment in a given reasoning engine.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments
  resource: projects.locations.reasoningEngines.sandboxEnvironments
- description: Deletes the specific SandboxEnvironment.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}
  resource: projects.locations.reasoningEngines.sandboxEnvironments
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}/operations/{operationsId}
  resource: projects.locations.reasoningEngines.sandboxEnvironments.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}/operations/{operationsId}:cancel
  resource: projects.locations.reasoningEngines.sandboxEnvironments.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}/operations/{operationsId}:wait
  resource: projects.locations.reasoningEngines.sandboxEnvironments.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}/operations/{operationsId}
  resource: projects.locations.reasoningEngines.sandboxEnvironments.operations
- description: Gets details of the specific Session.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}
  resource: projects.locations.reasoningEngines.sessions
- description: Lists Sessions in a given reasoning engine.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions
  resource: projects.locations.reasoningEngines.sessions
- description: Creates a new Session.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions
  resource: projects.locations.reasoningEngines.sessions
- description: Appends an event to a given session.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}:appendEvent
  resource: projects.locations.reasoningEngines.sessions
- description: Updates the specific Session.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}
  resource: projects.locations.reasoningEngines.sessions
- description: Deletes details of the specific Session.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}
  resource: projects.locations.reasoningEngines.sessions
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations
  resource: projects.locations.reasoningEngines.sessions.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations/{operationsId}
  resource: projects.locations.reasoningEngines.sessions.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations/{operationsId}:cancel
  resource: projects.locations.reasoningEngines.sessions.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations/{operationsId}:wait
  resource: projects.locations.reasoningEngines.sessions.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations/{operationsId}
  resource: projects.locations.reasoningEngines.sessions.operations
- description: Lists Events in a given session.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/events
  resource: projects.locations.reasoningEngines.sessions.events
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/operations
  resource: projects.locations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel
  resource: projects.locations.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait
  resource: projects.locations.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragEngineConfig/operations
  resource: projects.locations.ragEngineConfig.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragEngineConfig/operations/{operationsId}
  resource: projects.locations.ragEngineConfig.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragEngineConfig/operations/{operationsId}:cancel
  resource: projects.locations.ragEngineConfig.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragEngineConfig/operations/{operationsId}:wait
  resource: projects.locations.ragEngineConfig.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/ragEngineConfig/operations/{operationsId}
  resource: projects.locations.ragEngineConfig.operations
- description: Get a DeploymentResourcePool.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}
  resource: projects.locations.deploymentResourcePools
- description: List DeploymentResourcePools in a location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools
  resource: projects.locations.deploymentResourcePools
- description: List DeployedModels that have been deployed on this DeploymentResourcePool.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}:queryDeployedModels
  resource: projects.locations.deploymentResourcePools
- description: Create a DeploymentResourcePool.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools
  resource: projects.locations.deploymentResourcePools
- description: Update a DeploymentResourcePool.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}
  resource: projects.locations.deploymentResourcePools
- description: Delete a DeploymentResourcePool.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}
  resource: projects.locations.deploymentResourcePools
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}/operations
  resource: projects.locations.deploymentResourcePools.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}/operations/{operationsId}
  resource: projects.locations.deploymentResourcePools.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}/operations/{operationsId}:cancel
  resource: projects.locations.deploymentResourcePools.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}/operations/{operationsId}:wait
  resource: projects.locations.deploymentResourcePools.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/deploymentResourcePools/{deploymentResourcePoolsId}/operations/{operationsId}
  resource: projects.locations.deploymentResourcePools.operations
- description: Gets an Endpoint.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}
  resource: projects.locations.endpoints
- description: Lists Endpoints in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints
  resource: projects.locations.endpoints
- description: Creates an Endpoint.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints
  resource: projects.locations.endpoints
- description: Updates an Endpoint with a long running operation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:update
  resource: projects.locations.endpoints
- description: Deploys a Model into this Endpoint, creating a DeployedModel within it.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:deployModel
  resource: projects.locations.endpoints
- description: Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:undeployModel
  resource: projects.locations.endpoints
- description: Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `required_replica
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:mutateDeployedModel
  resource: projects.locations.endpoints
- description: Perform an online prediction.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:predict
  resource: projects.locations.endpoints
- description: 'Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers: * `X-Vert'
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:rawPredict
  resource: projects.locations.endpoints
- description: Perform a streaming online prediction with an arbitrary HTTP payload.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:streamRawPredict
  resource: projects.locations.endpoints
- description: Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:directPredict
  resource: projects.locations.endpoints
- description: Perform an unary online prediction request to a gRPC model server for custom containers.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:directRawPredict
  resource: projects.locations.endpoints
- description: Perform a server-side streaming online prediction request for Vertex LLM streaming.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:serverStreamingPredict
  resource: projects.locations.endpoints
- method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:predictLongRunning
  resource: projects.locations.endpoints
- description: Fetch an asynchronous online prediction operation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:fetchPredictOperation
  resource: projects.locations.endpoints
- description: Perform an online explanation. If deployed_model_id is specified, the corresponding DeployModel must have explanation_sp
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:explain
  resource: projects.locations.endpoints
- description: Generate content with multimodal inputs.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:generateContent
  resource: projects.locations.endpoints
- description: Generate content with multimodal inputs with streaming support.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:streamGenerateContent
  resource: projects.locations.endpoints
- description: Perform a token counting.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:countTokens
  resource: projects.locations.endpoints
- description: Return a list of tokens based on the input text.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}:computeTokens
  resource: projects.locations.endpoints
- description: Updates an Endpoint.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}
  resource: projects.locations.endpoints
- description: Deletes an Endpoint.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}
  resource: projects.locations.endpoints
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}/operations
  resource: projects.locations.endpoints.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}/operations/{operationsId}
  resource: projects.locations.endpoints.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}/operations/{operationsId}:cancel
  resource: projects.locations.endpoints.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}/operations/{operationsId}:wait
  resource: projects.locations.endpoints.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}/operations/{operationsId}
  resource: projects.locations.endpoints.operations
- description: Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix mus
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}/invoke/{invokeId}
  resource: projects.locations.endpoints.invoke
- description: Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix mus
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}/deployedModels/{deployedModelId}/invoke/{invokeId}
  resource: projects.locations.endpoints.deployedModels.invoke
- description: Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix mus
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/openapi/embeddings
  resource: projects.locations.endpoints.openapi
- description: Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix mus
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/openapi/completions
  resource: projects.locations.endpoints.openapi
- description: Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix mus
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/openapi/responses
  resource: projects.locations.endpoints.openapi
- description: Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix mus
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/google/science/inference
  resource: projects.locations.endpoints.google.science
- description: Exposes an OpenAI-compatible endpoint for chat completions.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/endpoints/{endpointsId}/chat/completions
  resource: projects.locations.endpoints.chat
- description: Gets an Evaluation Run.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationRuns/{evaluationRunsId}
  resource: projects.locations.evaluationRuns
- description: Lists Evaluation Runs.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationRuns
  resource: projects.locations.evaluationRuns
- description: Creates an Evaluation Run.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationRuns
  resource: projects.locations.evaluationRuns
- description: 'Cancels an Evaluation Run. Attempts to cancel a running Evaluation Run asynchronously. Status of run can be checked via '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationRuns/{evaluationRunsId}:cancel
  resource: projects.locations.evaluationRuns
- description: Deletes an Evaluation Run.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationRuns/{evaluationRunsId}
  resource: projects.locations.evaluationRuns
- description: Gets an Evaluation Set.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationSets/{evaluationSetsId}
  resource: projects.locations.evaluationSets
- description: Lists Evaluation Sets.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationSets
  resource: projects.locations.evaluationSets
- description: Creates an Evaluation Set.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationSets
  resource: projects.locations.evaluationSets
- description: Updates an Evaluation Set.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationSets/{evaluationSetsId}
  resource: projects.locations.evaluationSets
- description: Deletes an Evaluation Set.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationSets/{evaluationSetsId}
  resource: projects.locations.evaluationSets
- description: Gets an Evaluation Item.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationItems/{evaluationItemsId}
  resource: projects.locations.evaluationItems
- description: Lists Evaluation Items.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationItems
  resource: projects.locations.evaluationItems
- description: Creates an Evaluation Item.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationItems
  resource: projects.locations.evaluationItems
- description: Deletes an Evaluation Item.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/evaluationItems/{evaluationItemsId}
  resource: projects.locations.evaluationItems
- description: Gets cached content configurations
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/cachedContents/{cachedContentsId}
  resource: projects.locations.cachedContents
- description: Lists cached contents in a project
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/cachedContents
  resource: projects.locations.cachedContents
- description: 'Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/cachedContents
  resource: projects.locations.cachedContents
- description: Updates cached content configurations
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/cachedContents/{cachedContentsId}
  resource: projects.locations.cachedContents
- description: Deletes cached content
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/cachedContents/{cachedContentsId}
  resource: projects.locations.cachedContents
- description: Perform an online prediction.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:predict
  resource: projects.locations.publishers.models
- description: 'Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers: * `X-Vert'
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:rawPredict
  resource: projects.locations.publishers.models
- description: Perform a streaming online prediction with an arbitrary HTTP payload.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:streamRawPredict
  resource: projects.locations.publishers.models
- description: Perform a server-side streaming online prediction request for Vertex LLM streaming.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:serverStreamingPredict
  resource: projects.locations.publishers.models
- method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:predictLongRunning
  resource: projects.locations.publishers.models
- description: Fetch an asynchronous online prediction operation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:fetchPredictOperation
  resource: projects.locations.publishers.models
- description: Generate content with multimodal inputs.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:generateContent
  resource: projects.locations.publishers.models
- description: Generate content with multimodal inputs with streaming support.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:streamGenerateContent
  resource: projects.locations.publishers.models
- description: Embed content with multimodal inputs.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:embedContent
  resource: projects.locations.publishers.models
- description: Perform a token counting.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:countTokens
  resource: projects.locations.publishers.models
- description: Return a list of tokens based on the input text.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}:computeTokens
  resource: projects.locations.publishers.models
- description: Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix mus
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/publishers/{publishersId}/models/{modelsId}/invoke/{invokeId}
  resource: projects.locations.publishers.models.invoke
- description: Gets a tuning job.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs/{tuningJobsId}
  resource: projects.locations.tuningJobs
- description: Lists tuning jobs in a location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs
  resource: projects.locations.tuningJobs
- description: Creates a tuning job. A created tuning job will be subsequently executed to start the model tuning process.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs
  resource: projects.locations.tuningJobs
- description: Cancels a tuning job. Starts an asynchronous cancellation request. The server makes a best effort to cancel the job, but
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs/{tuningJobsId}:cancel
  resource: projects.locations.tuningJobs
- description: Rebase a tuned model. A rebase operation takes a model that was previously tuned on a base model version, and retunes it
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs:rebaseTunedModel
  resource: projects.locations.tuningJobs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs/{tuningJobsId}/operations
  resource: projects.locations.tuningJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs/{tuningJobsId}/operations/{operationsId}
  resource: projects.locations.tuningJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs/{tuningJobsId}/operations/{operationsId}:cancel
  resource: projects.locations.tuningJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tuningJobs/{tuningJobsId}/operations/{operationsId}
  resource: projects.locations.tuningJobs.operations
- description: Gets an Index.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}
  resource: projects.locations.indexes
- description: Lists Indexes in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes
  resource: projects.locations.indexes
- description: Creates an Index.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes
  resource: projects.locations.indexes
- description: Add/update Datapoints into an Index.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}:upsertDatapoints
  resource: projects.locations.indexes
- description: Remove Datapoints from an Index.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}:removeDatapoints
  resource: projects.locations.indexes
- description: Updates an Index.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}
  resource: projects.locations.indexes
- description: Deletes an Index. An Index can only be deleted when all its DeployedIndexes had been undeployed.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}
  resource: projects.locations.indexes
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}/operations
  resource: projects.locations.indexes.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}/operations/{operationsId}
  resource: projects.locations.indexes.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}/operations/{operationsId}:cancel
  resource: projects.locations.indexes.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}/operations/{operationsId}:wait
  resource: projects.locations.indexes.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/indexes/{indexesId}/operations/{operationsId}
  resource: projects.locations.indexes.operations
- description: Gets an IndexEndpoint.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}
  resource: projects.locations.indexEndpoints
- description: Lists IndexEndpoints in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints
  resource: projects.locations.indexEndpoints
- description: Creates an IndexEndpoint.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints
  resource: projects.locations.indexEndpoints
- description: Deploys an Index into this IndexEndpoint, creating a DeployedIndex within it.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}:deployIndex
  resource: projects.locations.indexEndpoints
- description: Undeploys an Index from an IndexEndpoint, removing a DeployedIndex from it, and freeing all resources it's using.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}:undeployIndex
  resource: projects.locations.indexEndpoints
- description: Update an existing DeployedIndex under an IndexEndpoint.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}:mutateDeployedIndex
  resource: projects.locations.indexEndpoints
- description: Finds the nearest neighbors of each vector within the request.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}:findNeighbors
  resource: projects.locations.indexEndpoints
- description: Reads the datapoints/vectors of the given IDs. A maximum of 1000 datapoints can be retrieved in a batch.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}:readIndexDatapoints
  resource: projects.locations.indexEndpoints
- description: Updates an IndexEndpoint.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}
  resource: projects.locations.indexEndpoints
- description: Deletes an IndexEndpoint.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}
  resource: projects.locations.indexEndpoints
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}/operations
  resource: projects.locations.indexEndpoints.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}/operations/{operationsId}
  resource: projects.locations.indexEndpoints.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}/operations/{operationsId}:cancel
  resource: projects.locations.indexEndpoints.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}/operations/{operationsId}:wait
  resource: projects.locations.indexEndpoints.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/indexEndpoints/{indexEndpointsId}/operations/{operationsId}
  resource: projects.locations.indexEndpoints.operations
- description: Gets a CustomJob.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs/{customJobsId}
  resource: projects.locations.customJobs
- description: Lists CustomJobs in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs
  resource: projects.locations.customJobs
- description: Creates a CustomJob. A created CustomJob right away will be attempted to be run.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs
  resource: projects.locations.customJobs
- description: Cancels a CustomJob. Starts asynchronous cancellation on the CustomJob. The server makes a best effort to cancel the job
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs/{customJobsId}:cancel
  resource: projects.locations.customJobs
- description: Deletes a CustomJob.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs/{customJobsId}
  resource: projects.locations.customJobs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs/{customJobsId}/operations
  resource: projects.locations.customJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs/{customJobsId}/operations/{operationsId}
  resource: projects.locations.customJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs/{customJobsId}/operations/{operationsId}:cancel
  resource: projects.locations.customJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs/{customJobsId}/operations/{operationsId}:wait
  resource: projects.locations.customJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/customJobs/{customJobsId}/operations/{operationsId}
  resource: projects.locations.customJobs.operations
- description: Gets a DataLabelingJob.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs/{dataLabelingJobsId}
  resource: projects.locations.dataLabelingJobs
- description: Lists DataLabelingJobs in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs
  resource: projects.locations.dataLabelingJobs
- description: Creates a DataLabelingJob.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs
  resource: projects.locations.dataLabelingJobs
- description: Cancels a DataLabelingJob. Success of cancellation is not guaranteed.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs/{dataLabelingJobsId}:cancel
  resource: projects.locations.dataLabelingJobs
- description: Deletes a DataLabelingJob.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs/{dataLabelingJobsId}
  resource: projects.locations.dataLabelingJobs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs/{dataLabelingJobsId}/operations
  resource: projects.locations.dataLabelingJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs/{dataLabelingJobsId}/operations/{operationsId}
  resource: projects.locations.dataLabelingJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs/{dataLabelingJobsId}/operations/{operationsId}:cancel
  resource: projects.locations.dataLabelingJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs/{dataLabelingJobsId}/operations/{operationsId}:wait
  resource: projects.locations.dataLabelingJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/dataLabelingJobs/{dataLabelingJobsId}/operations/{operationsId}
  resource: projects.locations.dataLabelingJobs.operations
- description: Gets a HyperparameterTuningJob
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs/{hyperparameterTuningJobsId}
  resource: projects.locations.hyperparameterTuningJobs
- description: Lists HyperparameterTuningJobs in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs
  resource: projects.locations.hyperparameterTuningJobs
- description: Creates a HyperparameterTuningJob
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs
  resource: projects.locations.hyperparameterTuningJobs
- description: Cancels a HyperparameterTuningJob. Starts asynchronous cancellation on the HyperparameterTuningJob. The server makes a b
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs/{hyperparameterTuningJobsId}:cancel
  resource: projects.locations.hyperparameterTuningJobs
- description: Deletes a HyperparameterTuningJob.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs/{hyperparameterTuningJobsId}
  resource: projects.locations.hyperparameterTuningJobs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations
  resource: projects.locations.hyperparameterTuningJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations/{operationsId}
  resource: projects.locations.hyperparameterTuningJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations/{operationsId}:cancel
  resource: projects.locations.hyperparameterTuningJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations/{operationsId}:wait
  resource: projects.locations.hyperparameterTuningJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/hyperparameterTuningJobs/{hyperparameterTuningJobsId}/operations/{operationsId}
  resource: projects.locations.hyperparameterTuningJobs.operations
- description: Gets a NasJob
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/nasJobs/{nasJobsId}
  resource: projects.locations.nasJobs
- description: Lists NasJobs in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/nasJobs
  resource: projects.locations.nasJobs
- description: Creates a NasJob
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/nasJobs
  resource: projects.locations.nasJobs
- description: 'Cancels a NasJob. Starts asynchronous cancellation on the NasJob. The server makes a best effort to cancel the job, but '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/nasJobs/{nasJobsId}:cancel
  resource: projects.locations.nasJobs
- description: Deletes a NasJob.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/nasJobs/{nasJobsId}
  resource: projects.locations.nasJobs
- description: Gets a NasTrialDetail.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/nasJobs/{nasJobsId}/nasTrialDetails/{nasTrialDetailsId}
  resource: projects.locations.nasJobs.nasTrialDetails
- description: List top NasTrialDetails of a NasJob.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/nasJobs/{nasJobsId}/nasTrialDetails
  resource: projects.locations.nasJobs.nasTrialDetails
- description: Gets a BatchPredictionJob
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/batchPredictionJobs/{batchPredictionJobsId}
  resource: projects.locations.batchPredictionJobs
- description: Lists BatchPredictionJobs in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/batchPredictionJobs
  resource: projects.locations.batchPredictionJobs
- description: Creates a BatchPredictionJob. A BatchPredictionJob once created will right away be attempted to start.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/batchPredictionJobs
  resource: projects.locations.batchPredictionJobs
- description: Cancels a BatchPredictionJob. Starts asynchronous cancellation on the BatchPredictionJob. The server makes the best effo
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/batchPredictionJobs/{batchPredictionJobsId}:cancel
  resource: projects.locations.batchPredictionJobs
- description: Deletes a BatchPredictionJob. Can only be called on jobs that already finished.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/batchPredictionJobs/{batchPredictionJobsId}
  resource: projects.locations.batchPredictionJobs
- description: Gets a ModelDeploymentMonitoringJob.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}
  resource: projects.locations.modelDeploymentMonitoringJobs
- description: Lists ModelDeploymentMonitoringJobs in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs
  resource: projects.locations.modelDeploymentMonitoringJobs
- description: Creates a ModelDeploymentMonitoringJob. It will run periodically on a configured interval.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs
  resource: projects.locations.modelDeploymentMonitoringJobs
- description: Searches Model Monitoring Statistics generated within a given time window.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}:searchModelDeploymentMonitoringStatsAnomalies
  resource: projects.locations.modelDeploymentMonitoringJobs
- description: Pauses a ModelDeploymentMonitoringJob. If the job is running, the server makes a best effort to cancel the job. Will mar
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}:pause
  resource: projects.locations.modelDeploymentMonitoringJobs
- description: Resumes a paused ModelDeploymentMonitoringJob. It will start to run from next scheduled time. A deleted ModelDeploymentM
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}:resume
  resource: projects.locations.modelDeploymentMonitoringJobs
- description: Updates a ModelDeploymentMonitoringJob.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}
  resource: projects.locations.modelDeploymentMonitoringJobs
- description: Deletes a ModelDeploymentMonitoringJob.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}
  resource: projects.locations.modelDeploymentMonitoringJobs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations
  resource: projects.locations.modelDeploymentMonitoringJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations/{operationsId}
  resource: projects.locations.modelDeploymentMonitoringJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations/{operationsId}:cancel
  resource: projects.locations.modelDeploymentMonitoringJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations/{operationsId}:wait
  resource: projects.locations.modelDeploymentMonitoringJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/modelDeploymentMonitoringJobs/{modelDeploymentMonitoringJobsId}/operations/{operationsId}
  resource: projects.locations.modelDeploymentMonitoringJobs.operations
- description: Retrieves a specific MetadataStore.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}
  resource: projects.locations.metadataStores
- description: Lists MetadataStores for a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores
  resource: projects.locations.metadataStores
- description: Initializes a MetadataStore, including allocation of resources.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores
  resource: projects.locations.metadataStores
- description: Deletes a single MetadataStore and all its child resources (Artifacts, Executions, and Contexts).
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}
  resource: projects.locations.metadataStores
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/operations
  resource: projects.locations.metadataStores.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/operations/{operationsId}
  resource: projects.locations.metadataStores.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/operations/{operationsId}:cancel
  resource: projects.locations.metadataStores.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/operations/{operationsId}:wait
  resource: projects.locations.metadataStores.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/operations/{operationsId}
  resource: projects.locations.metadataStores.operations
- description: Retrieves a specific Artifact.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}
  resource: projects.locations.metadataStores.artifacts
- description: Lists Artifacts in the MetadataStore.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts
  resource: projects.locations.metadataStores.artifacts
- description: Retrieves lineage of an Artifact represented through Artifacts and Executions connected by Event edges and returned as a
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}:queryArtifactLineageSubgraph
  resource: projects.locations.metadataStores.artifacts
- description: Creates an Artifact associated with a MetadataStore.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts
  resource: projects.locations.metadataStores.artifacts
- description: Purges Artifacts.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts:purge
  resource: projects.locations.metadataStores.artifacts
- description: Updates a stored Artifact.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}
  resource: projects.locations.metadataStores.artifacts
- description: Deletes an Artifact.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}
  resource: projects.locations.metadataStores.artifacts
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations
  resource: projects.locations.metadataStores.artifacts.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations/{operationsId}
  resource: projects.locations.metadataStores.artifacts.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations/{operationsId}:cancel
  resource: projects.locations.metadataStores.artifacts.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations/{operationsId}:wait
  resource: projects.locations.metadataStores.artifacts.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/artifacts/{artifactsId}/operations/{operationsId}
  resource: projects.locations.metadataStores.artifacts.operations
- description: Retrieves a specific Context.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}
  resource: projects.locations.metadataStores.contexts
- description: Lists Contexts on the MetadataStore.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts
  resource: projects.locations.metadataStores.contexts
- description: Retrieves Artifacts and Executions within the specified Context, connected by Event edges and returned as a LineageSubgr
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}:queryContextLineageSubgraph
  resource: projects.locations.metadataStores.contexts
- description: Creates a Context associated with a MetadataStore.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts
  resource: projects.locations.metadataStores.contexts
- description: Purges Contexts.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts:purge
  resource: projects.locations.metadataStores.contexts
- description: 'Adds a set of Artifacts and Executions to a Context. If any of the Artifacts or Executions have already been added to a '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}:addContextArtifactsAndExecutions
  resource: projects.locations.metadataStores.contexts
- description: Adds a set of Contexts as children to a parent Context. If any of the child Contexts have already been added to the pare
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}:addContextChildren
  resource: projects.locations.metadataStores.contexts
- description: Remove a set of children contexts from a parent Context. If any of the child Contexts were NOT added to the parent Conte
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}:removeContextChildren
  resource: projects.locations.metadataStores.contexts
- description: Updates a stored Context.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}
  resource: projects.locations.metadataStores.contexts
- description: Deletes a stored Context.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}
  resource: projects.locations.metadataStores.contexts
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations
  resource: projects.locations.metadataStores.contexts.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations/{operationsId}
  resource: projects.locations.metadataStores.contexts.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations/{operationsId}:cancel
  resource: projects.locations.metadataStores.contexts.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations/{operationsId}:wait
  resource: projects.locations.metadataStores.contexts.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/contexts/{contextsId}/operations/{operationsId}
  resource: projects.locations.metadataStores.contexts.operations
- description: Retrieves a specific Execution.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}
  resource: projects.locations.metadataStores.executions
- description: Lists Executions in the MetadataStore.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions
  resource: projects.locations.metadataStores.executions
- description: 'Obtains the set of input and output Artifacts for this Execution, in the form of LineageSubgraph that also contains the '
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}:queryExecutionInputsAndOutputs
  resource: projects.locations.metadataStores.executions
- description: Creates an Execution associated with a MetadataStore.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions
  resource: projects.locations.metadataStores.executions
- description: Purges Executions.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions:purge
  resource: projects.locations.metadataStores.executions
- description: Adds Events to the specified Execution. An Event indicates whether an Artifact was used as an input or output for an Exe
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}:addExecutionEvents
  resource: projects.locations.metadataStores.executions
- description: Updates a stored Execution.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}
  resource: projects.locations.metadataStores.executions
- description: Deletes an Execution.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}
  resource: projects.locations.metadataStores.executions
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}/operations
  resource: projects.locations.metadataStores.executions.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}/operations/{operationsId}
  resource: projects.locations.metadataStores.executions.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}/operations/{operationsId}:cancel
  resource: projects.locations.metadataStores.executions.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}/operations/{operationsId}:wait
  resource: projects.locations.metadataStores.executions.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/executions/{executionsId}/operations/{operationsId}
  resource: projects.locations.metadataStores.executions.operations
- description: Retrieves a specific MetadataSchema.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/metadataSchemas/{metadataSchemasId}
  resource: projects.locations.metadataStores.metadataSchemas
- description: Lists MetadataSchemas.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/metadataSchemas
  resource: projects.locations.metadataStores.metadataSchemas
- description: Creates a MetadataSchema.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/metadataStores/{metadataStoresId}/metadataSchemas
  resource: projects.locations.metadataStores.metadataSchemas
- description: Searches all of the resources in automl.googleapis.com, datalabeling.googleapis.com and ml.googleapis.com that can be mi
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/migratableResources:search
  resource: projects.locations.migratableResources
- description: Batch migrates resources from ml.googleapis.com, automl.googleapis.com, and datalabeling.googleapis.com to Vertex AI.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/migratableResources:batchMigrate
  resource: projects.locations.migratableResources
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/migratableResources/{migratableResourcesId}/operations
  resource: projects.locations.migratableResources.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/migratableResources/{migratableResourcesId}/operations/{operationsId}
  resource: projects.locations.migratableResources.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/migratableResources/{migratableResourcesId}/operations/{operationsId}:cancel
  resource: projects.locations.migratableResources.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/migratableResources/{migratableResourcesId}/operations/{operationsId}:wait
  resource: projects.locations.migratableResources.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/migratableResources/{migratableResourcesId}/operations/{operationsId}
  resource: projects.locations.migratableResources.operations
- description: Gets a NotebookRuntime.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}
  resource: projects.locations.notebookRuntimes
- description: Lists NotebookRuntimes in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes
  resource: projects.locations.notebookRuntimes
- description: Assigns a NotebookRuntime to a user for a particular Notebook file. This method will either returns an existing assignme
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes:assign
  resource: projects.locations.notebookRuntimes
- description: Upgrades a NotebookRuntime.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}:upgrade
  resource: projects.locations.notebookRuntimes
- description: Starts a NotebookRuntime.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}:start
  resource: projects.locations.notebookRuntimes
- description: Stops a NotebookRuntime.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}:stop
  resource: projects.locations.notebookRuntimes
- description: Deletes a NotebookRuntime.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}
  resource: projects.locations.notebookRuntimes
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}/operations
  resource: projects.locations.notebookRuntimes.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}/operations/{operationsId}
  resource: projects.locations.notebookRuntimes.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}/operations/{operationsId}:cancel
  resource: projects.locations.notebookRuntimes.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}/operations/{operationsId}:wait
  resource: projects.locations.notebookRuntimes.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookRuntimes/{notebookRuntimesId}/operations/{operationsId}
  resource: projects.locations.notebookRuntimes.operations
- description: Gets a NotebookExecutionJob.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs/{notebookExecutionJobsId}
  resource: projects.locations.notebookExecutionJobs
- description: Lists NotebookExecutionJobs in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs
  resource: projects.locations.notebookExecutionJobs
- description: Creates a NotebookExecutionJob.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs
  resource: projects.locations.notebookExecutionJobs
- description: Deletes a NotebookExecutionJob.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs/{notebookExecutionJobsId}
  resource: projects.locations.notebookExecutionJobs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs/{notebookExecutionJobsId}/operations
  resource: projects.locations.notebookExecutionJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs/{notebookExecutionJobsId}/operations/{operationsId}
  resource: projects.locations.notebookExecutionJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs/{notebookExecutionJobsId}/operations/{operationsId}:cancel
  resource: projects.locations.notebookExecutionJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs/{notebookExecutionJobsId}/operations/{operationsId}:wait
  resource: projects.locations.notebookExecutionJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/notebookExecutionJobs/{notebookExecutionJobsId}/operations/{operationsId}
  resource: projects.locations.notebookExecutionJobs.operations
- description: Gets a PersistentResource.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}
  resource: projects.locations.persistentResources
- description: Lists PersistentResources in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources
  resource: projects.locations.persistentResources
- description: Creates a PersistentResource.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources
  resource: projects.locations.persistentResources
- description: Reboots a PersistentResource.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}:reboot
  resource: projects.locations.persistentResources
- description: Updates a PersistentResource.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}
  resource: projects.locations.persistentResources
- description: Deletes a PersistentResource.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}
  resource: projects.locations.persistentResources
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}/operations
  resource: projects.locations.persistentResources.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}/operations/{operationsId}
  resource: projects.locations.persistentResources.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}/operations/{operationsId}:cancel
  resource: projects.locations.persistentResources.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}/operations/{operationsId}:wait
  resource: projects.locations.persistentResources.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/persistentResources/{persistentResourcesId}/operations/{operationsId}
  resource: projects.locations.persistentResources.operations
- description: Gets a TrainingPipeline.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines/{trainingPipelinesId}
  resource: projects.locations.trainingPipelines
- description: Lists TrainingPipelines in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines
  resource: projects.locations.trainingPipelines
- description: Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines
  resource: projects.locations.trainingPipelines
- description: 'Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines/{trainingPipelinesId}:cancel
  resource: projects.locations.trainingPipelines
- description: Deletes a TrainingPipeline.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines/{trainingPipelinesId}
  resource: projects.locations.trainingPipelines
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines/{trainingPipelinesId}/operations
  resource: projects.locations.trainingPipelines.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines/{trainingPipelinesId}/operations/{operationsId}
  resource: projects.locations.trainingPipelines.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines/{trainingPipelinesId}/operations/{operationsId}:cancel
  resource: projects.locations.trainingPipelines.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines/{trainingPipelinesId}/operations/{operationsId}:wait
  resource: projects.locations.trainingPipelines.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/trainingPipelines/{trainingPipelinesId}/operations/{operationsId}
  resource: projects.locations.trainingPipelines.operations
- description: Gets a PipelineJob.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs/{pipelineJobsId}
  resource: projects.locations.pipelineJobs
- description: Lists PipelineJobs in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs
  resource: projects.locations.pipelineJobs
- description: Creates a PipelineJob. A PipelineJob will run immediately when created.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs
  resource: projects.locations.pipelineJobs
- description: Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, a
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs:batchDelete
  resource: projects.locations.pipelineJobs
- description: Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs/{pipelineJobsId}:cancel
  resource: projects.locations.pipelineJobs
- description: Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs t
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs:batchCancel
  resource: projects.locations.pipelineJobs
- description: Deletes a PipelineJob.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs/{pipelineJobsId}
  resource: projects.locations.pipelineJobs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs/{pipelineJobsId}/operations
  resource: projects.locations.pipelineJobs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs/{pipelineJobsId}/operations/{operationsId}
  resource: projects.locations.pipelineJobs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs/{pipelineJobsId}/operations/{operationsId}:cancel
  resource: projects.locations.pipelineJobs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs/{pipelineJobsId}/operations/{operationsId}:wait
  resource: projects.locations.pipelineJobs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/pipelineJobs/{pipelineJobsId}/operations/{operationsId}
  resource: projects.locations.pipelineJobs.operations
- description: Gets a Schedule.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}
  resource: projects.locations.schedules
- description: Lists Schedules in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules
  resource: projects.locations.schedules
- description: Creates a Schedule.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules
  resource: projects.locations.schedules
- description: Pauses a Schedule. Will mark Schedule.state to 'PAUSED'. If the schedule is paused, no new runs will be created. Already
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}:pause
  resource: projects.locations.schedules
- description: Resumes a paused Schedule to start scheduling new runs. Will mark Schedule.state to 'ACTIVE'. Only paused Schedule can b
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}:resume
  resource: projects.locations.schedules
- description: Updates an active or paused Schedule. When the Schedule is updated, new runs will be scheduled starting from the updated
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}
  resource: projects.locations.schedules
- description: Deletes a Schedule.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}
  resource: projects.locations.schedules
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}/operations
  resource: projects.locations.schedules.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}/operations/{operationsId}
  resource: projects.locations.schedules.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}/operations/{operationsId}:cancel
  resource: projects.locations.schedules.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}/operations/{operationsId}:wait
  resource: projects.locations.schedules.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/schedules/{schedulesId}/operations/{operationsId}
  resource: projects.locations.schedules.operations
- description: Gets a SpecialistPool.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools/{specialistPoolsId}
  resource: projects.locations.specialistPools
- description: Lists SpecialistPools in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools
  resource: projects.locations.specialistPools
- description: Creates a SpecialistPool.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools
  resource: projects.locations.specialistPools
- description: Updates a SpecialistPool.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools/{specialistPoolsId}
  resource: projects.locations.specialistPools
- description: Deletes a SpecialistPool as well as all Specialists in the pool.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools/{specialistPoolsId}
  resource: projects.locations.specialistPools
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools/{specialistPoolsId}/operations
  resource: projects.locations.specialistPools.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools/{specialistPoolsId}/operations/{operationsId}
  resource: projects.locations.specialistPools.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools/{specialistPoolsId}/operations/{operationsId}:cancel
  resource: projects.locations.specialistPools.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools/{specialistPoolsId}/operations/{operationsId}:wait
  resource: projects.locations.specialistPools.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/specialistPools/{specialistPoolsId}/operations/{operationsId}
  resource: projects.locations.specialistPools.operations
- description: Gets a Tensorboard.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}
  resource: projects.locations.tensorboards
- description: Lists Tensorboards in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards
  resource: projects.locations.tensorboards
- description: Returns a list of monthly active users for a given TensorBoard instance.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}:readUsage
  resource: projects.locations.tensorboards
- description: Returns the storage size for a given TensorBoard instance.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}:readSize
  resource: projects.locations.tensorboards
- description: Reads multiple TensorboardTimeSeries' data. The data point number limit is 1000 for scalars, 100 for tensors and blob re
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}:batchRead
  resource: projects.locations.tensorboards
- description: Creates a Tensorboard.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards
  resource: projects.locations.tensorboards
- description: Updates a Tensorboard.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}
  resource: projects.locations.tensorboards
- description: Deletes a Tensorboard.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}
  resource: projects.locations.tensorboards
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/operations
  resource: projects.locations.tensorboards.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/operations/{operationsId}
  resource: projects.locations.tensorboards.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/operations/{operationsId}:cancel
  resource: projects.locations.tensorboards.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/operations/{operationsId}:wait
  resource: projects.locations.tensorboards.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/operations/{operationsId}
  resource: projects.locations.tensorboards.operations
- description: Gets a TensorboardExperiment.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}
  resource: projects.locations.tensorboards.experiments
- description: Lists TensorboardExperiments in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments
  resource: projects.locations.tensorboards.experiments
- description: Creates a TensorboardExperiment.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments
  resource: projects.locations.tensorboards.experiments
- description: Batch create TensorboardTimeSeries that belong to a TensorboardExperiment.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}:batchCreate
  resource: projects.locations.tensorboards.experiments
- description: Write time series data points of multiple TensorboardTimeSeries in multiple TensorboardRun's. If any data fail to be ing
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}:write
  resource: projects.locations.tensorboards.experiments
- description: Updates a TensorboardExperiment.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}
  resource: projects.locations.tensorboards.experiments
- description: Deletes a TensorboardExperiment.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}
  resource: projects.locations.tensorboards.experiments
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations
  resource: projects.locations.tensorboards.experiments.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations/{operationsId}
  resource: projects.locations.tensorboards.experiments.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations/{operationsId}:cancel
  resource: projects.locations.tensorboards.experiments.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations/{operationsId}:wait
  resource: projects.locations.tensorboards.experiments.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/operations/{operationsId}
  resource: projects.locations.tensorboards.experiments.operations
- description: Gets a TensorboardRun.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}
  resource: projects.locations.tensorboards.experiments.runs
- description: Lists TensorboardRuns in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs
  resource: projects.locations.tensorboards.experiments.runs
- description: Creates a TensorboardRun.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs
  resource: projects.locations.tensorboards.experiments.runs
- description: Batch create TensorboardRuns.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs:batchCreate
  resource: projects.locations.tensorboards.experiments.runs
- description: Write time series data points into multiple TensorboardTimeSeries under a TensorboardRun. If any data fail to be ingeste
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}:write
  resource: projects.locations.tensorboards.experiments.runs
- description: Updates a TensorboardRun.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}
  resource: projects.locations.tensorboards.experiments.runs
- description: Deletes a TensorboardRun.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}
  resource: projects.locations.tensorboards.experiments.runs
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations
  resource: projects.locations.tensorboards.experiments.runs.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations/{operationsId}
  resource: projects.locations.tensorboards.experiments.runs.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations/{operationsId}:cancel
  resource: projects.locations.tensorboards.experiments.runs.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations/{operationsId}:wait
  resource: projects.locations.tensorboards.experiments.runs.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/operations/{operationsId}
  resource: projects.locations.tensorboards.experiments.runs.operations
- description: Gets a TensorboardTimeSeries.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}
  resource: projects.locations.tensorboards.experiments.runs.timeSeries
- description: Lists TensorboardTimeSeries in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries
  resource: projects.locations.tensorboards.experiments.runs.timeSeries
- description: Reads a TensorboardTimeSeries' data. By default, if the number of data points stored is less than 1000, all data is retu
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}:read
  resource: projects.locations.tensorboards.experiments.runs.timeSeries
- description: Gets bytes of TensorboardBlobs. This is to allow reading blob data stored in consumer project's Cloud Storage bucket wit
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}:readBlobData
  resource: projects.locations.tensorboards.experiments.runs.timeSeries
- description: Creates a TensorboardTimeSeries.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries
  resource: projects.locations.tensorboards.experiments.runs.timeSeries
- description: Exports a TensorboardTimeSeries' data. Data is returned in paginated responses.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}:exportTensorboardTimeSeries
  resource: projects.locations.tensorboards.experiments.runs.timeSeries
- description: Updates a TensorboardTimeSeries.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}
  resource: projects.locations.tensorboards.experiments.runs.timeSeries
- description: Deletes a TensorboardTimeSeries.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}
  resource: projects.locations.tensorboards.experiments.runs.timeSeries
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations
  resource: projects.locations.tensorboards.experiments.runs.timeSeries.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations/{operationsId}
  resource: projects.locations.tensorboards.experiments.runs.timeSeries.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations/{operationsId}:cancel
  resource: projects.locations.tensorboards.experiments.runs.timeSeries.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations/{operationsId}:wait
  resource: projects.locations.tensorboards.experiments.runs.timeSeries.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/tensorboards/{tensorboardsId}/experiments/{experimentsId}/runs/{runsId}/timeSeries/{timeSeriesId}/operations/{operationsId}
  resource: projects.locations.tensorboards.experiments.runs.timeSeries.operations
- description: Gets a Study by name.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}
  resource: projects.locations.studies
- description: Lists all the studies in a region for an associated project.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/studies
  resource: projects.locations.studies
- description: Creates a Study. A resource name will be generated after creation of the Study.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies
  resource: projects.locations.studies
- description: Looks a study up using the user-defined display_name field instead of the fully qualified resource name.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies:lookup
  resource: projects.locations.studies
- description: Deletes a Study.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}
  resource: projects.locations.studies
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/operations
  resource: projects.locations.studies.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/operations/{operationsId}
  resource: projects.locations.studies.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/operations/{operationsId}:cancel
  resource: projects.locations.studies.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/operations/{operationsId}:wait
  resource: projects.locations.studies.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/operations/{operationsId}
  resource: projects.locations.studies.operations
- description: Gets a Trial.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}
  resource: projects.locations.studies.trials
- description: Lists the Trials associated with a Study.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials
  resource: projects.locations.studies.trials
- description: Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operatio
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials:suggest
  resource: projects.locations.studies.trials
- description: Adds a user provided Trial to a Study.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials
  resource: projects.locations.studies.trials
- description: 'Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}:addTrialMeasurement
  resource: projects.locations.studies.trials
- description: Marks a Trial as complete.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}:complete
  resource: projects.locations.studies.trials
- description: Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will c
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}:checkTrialEarlyStoppingState
  resource: projects.locations.studies.trials
- description: Stops a Trial.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}:stop
  resource: projects.locations.studies.trials
- description: Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. The definiti
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials:listOptimalTrials
  resource: projects.locations.studies.trials
- description: Deletes a Trial.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}
  resource: projects.locations.studies.trials
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}/operations
  resource: projects.locations.studies.trials.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}/operations/{operationsId}
  resource: projects.locations.studies.trials.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}/operations/{operationsId}:cancel
  resource: projects.locations.studies.trials.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}/operations/{operationsId}:wait
  resource: projects.locations.studies.trials.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/studies/{studiesId}/trials/{trialsId}/operations/{operationsId}
  resource: projects.locations.studies.trials.operations
- description: Gets a RagCorpus.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}
  resource: projects.locations.ragCorpora
- description: Lists RagCorpora in a Location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora
  resource: projects.locations.ragCorpora
- description: Creates a RagCorpus.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora
  resource: projects.locations.ragCorpora
- description: Updates a RagCorpus.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}
  resource: projects.locations.ragCorpora
- description: Deletes a RagCorpus.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}
  resource: projects.locations.ragCorpora
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/operations
  resource: projects.locations.ragCorpora.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/operations/{operationsId}
  resource: projects.locations.ragCorpora.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/operations/{operationsId}:cancel
  resource: projects.locations.ragCorpora.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/operations/{operationsId}:wait
  resource: projects.locations.ragCorpora.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/operations/{operationsId}
  resource: projects.locations.ragCorpora.operations
- description: Gets a RagFile.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}
  resource: projects.locations.ragCorpora.ragFiles
- description: Lists RagFiles in a RagCorpus.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles
  resource: projects.locations.ragCorpora.ragFiles
- description: Import files from Google Cloud Storage or Google Drive into a RagCorpus.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles:import
  resource: projects.locations.ragCorpora.ragFiles
- description: Deletes a RagFile.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}
  resource: projects.locations.ragCorpora.ragFiles
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations
  resource: projects.locations.ragCorpora.ragFiles.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations/{operationsId}
  resource: projects.locations.ragCorpora.ragFiles.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations/{operationsId}:cancel
  resource: projects.locations.ragCorpora.ragFiles.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations/{operationsId}:wait
  resource: projects.locations.ragCorpora.ragFiles.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles/{ragFilesId}/operations/{operationsId}
  resource: projects.locations.ragCorpora.ragFiles.operations
- description: Perform an online prediction.
  method: POST
  path: v1/endpoints/{endpointsId}:predict
  resource: endpoints
- method: POST
  path: v1/endpoints/{endpointsId}:predictLongRunning
  resource: endpoints
- description: Fetch an asynchronous online prediction operation.
  method: POST
  path: v1/endpoints/{endpointsId}:fetchPredictOperation
  resource: endpoints
- description: Generate content with multimodal inputs.
  method: POST
  path: v1/endpoints/{endpointsId}:generateContent
  resource: endpoints
- description: Generate content with multimodal inputs with streaming support.
  method: POST
  path: v1/endpoints/{endpointsId}:streamGenerateContent
  resource: endpoints
- description: Perform a token counting.
  method: POST
  path: v1/endpoints/{endpointsId}:countTokens
  resource: endpoints
- description: Return a list of tokens based on the input text.
  method: POST
  path: v1/endpoints/{endpointsId}:computeTokens
  resource: endpoints
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/endpoints/{endpointsId}/operations
  resource: endpoints.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/endpoints/{endpointsId}/operations/{operationsId}
  resource: endpoints.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/endpoints/{endpointsId}/operations/{operationsId}:cancel
  resource: endpoints.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/endpoints/{endpointsId}/operations/{operationsId}:wait
  resource: endpoints.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/endpoints/{endpointsId}/operations/{operationsId}
  resource: endpoints.operations
- description: Exposes an OpenAI-compatible endpoint for chat completions.
  method: POST
  path: v1/endpoints/{endpointsId}/chat/completions
  resource: endpoints.chat
- description: Gets a Model Garden publisher model.
  method: GET
  path: v1/publishers/{publishersId}/models/{modelsId}
  resource: publishers.models
- description: Perform an online prediction.
  method: POST
  path: v1/publishers/{publishersId}/models/{modelsId}:predict
  resource: publishers.models
- method: POST
  path: v1/publishers/{publishersId}/models/{modelsId}:predictLongRunning
  resource: publishers.models
- description: Fetch an asynchronous online prediction operation.
  method: POST
  path: v1/publishers/{publishersId}/models/{modelsId}:fetchPredictOperation
  resource: publishers.models
- description: Generate content with multimodal inputs.
  method: POST
  path: v1/publishers/{publishersId}/models/{modelsId}:generateContent
  resource: publishers.models
- description: Generate content with multimodal inputs with streaming support.
  method: POST
  path: v1/publishers/{publishersId}/models/{modelsId}:streamGenerateContent
  resource: publishers.models
- description: Perform a token counting.
  method: POST
  path: v1/publishers/{publishersId}/models/{modelsId}:countTokens
  resource: publishers.models
- description: Return a list of tokens based on the input text.
  method: POST
  path: v1/publishers/{publishersId}/models/{modelsId}:computeTokens
  resource: publishers.models
- description: Lists BatchPredictionJobs in a Location.
  method: GET
  path: v1/batchPredictionJobs
  resource: batchPredictionJobs
- description: Gets a BatchPredictionJob
  method: GET
  path: v1/batchPredictionJobs/{batchPredictionJobsId}
  resource: batchPredictionJobs
- description: Creates a BatchPredictionJob. A BatchPredictionJob once created will right away be attempted to start.
  method: POST
  path: v1/batchPredictionJobs
  resource: batchPredictionJobs
- description: Lists reasoning engines in a location.
  method: GET
  path: v1/reasoningEngines
  resource: reasoningEngines
- description: Gets a reasoning engine.
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}
  resource: reasoningEngines
- description: Queries using a reasoning engine.
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}:query
  resource: reasoningEngines
- description: Streams queries using a reasoning engine.
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}:streamQuery
  resource: reasoningEngines
- description: Creates a reasoning engine.
  method: POST
  path: v1/reasoningEngines
  resource: reasoningEngines
- description: Executes code statelessly.
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}:executeCode
  resource: reasoningEngines
- description: Updates a reasoning engine.
  method: PATCH
  path: v1/reasoningEngines/{reasoningEnginesId}
  resource: reasoningEngines
- description: Deletes a reasoning engine.
  method: DELETE
  path: v1/reasoningEngines/{reasoningEnginesId}
  resource: reasoningEngines
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/operations
  resource: reasoningEngines.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/operations/{operationsId}
  resource: reasoningEngines.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/operations/{operationsId}:cancel
  resource: reasoningEngines.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/operations/{operationsId}:wait
  resource: reasoningEngines.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/reasoningEngines/{reasoningEnginesId}/operations/{operationsId}
  resource: reasoningEngines.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations
  resource: reasoningEngines.memories.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations/{operationsId}
  resource: reasoningEngines.memories.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations/{operationsId}:cancel
  resource: reasoningEngines.memories.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations/{operationsId}:wait
  resource: reasoningEngines.memories.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/reasoningEngines/{reasoningEnginesId}/memories/{memoriesId}/operations/{operationsId}
  resource: reasoningEngines.memories.operations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations
  resource: reasoningEngines.sessions.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations/{operationsId}
  resource: reasoningEngines.sessions.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations/{operationsId}:cancel
  resource: reasoningEngines.sessions.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations/{operationsId}:wait
  resource: reasoningEngines.sessions.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/reasoningEngines/{reasoningEnginesId}/sessions/{sessionsId}/operations/{operationsId}
  resource: reasoningEngines.sessions.operations
- description: Gets details of the specific SandboxEnvironment.
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}
  resource: reasoningEngines.sandboxEnvironments
- description: Lists SandboxEnvironments in a given reasoning engine.
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments
  resource: reasoningEngines.sandboxEnvironments
- description: Executes using a sandbox environment.
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}:execute
  resource: reasoningEngines.sandboxEnvironments
- description: Creates a SandboxEnvironment in a given reasoning engine.
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments
  resource: reasoningEngines.sandboxEnvironments
- description: Deletes the specific SandboxEnvironment.
  method: DELETE
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}
  resource: reasoningEngines.sandboxEnvironments
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}/operations/{operationsId}
  resource: reasoningEngines.sandboxEnvironments.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}/operations/{operationsId}:cancel
  resource: reasoningEngines.sandboxEnvironments.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}/operations/{operationsId}:wait
  resource: reasoningEngines.sandboxEnvironments.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/reasoningEngines/{reasoningEnginesId}/sandboxEnvironments/{sandboxEnvironmentsId}/operations/{operationsId}
  resource: reasoningEngines.sandboxEnvironments.operations
- description: Upload a file into a RagCorpus.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/ragCorpora/{ragCorporaId}/ragFiles:upload
  resource: media
name: aiplatform
service_url: https://aiplatform.googleapis.com/
title: Vertex AI API
version: v1
---
