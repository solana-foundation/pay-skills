---
category: compute
description: Deploy containerized apps on a managed platform.
endpoints:
- description: Export generated customer metadata for a given project.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}:exportProjectMetadata
  resource: projects.locations
- description: Export generated customer metadata for a given resource.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/{locationsId1}:exportMetadata
  resource: projects.locations
- description: Export image metadata for a given resource.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/{locationsId1}:exportImageMetadata
  resource: projects.locations
- description: Export image for a given resource.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/{locationsId1}:exportImage
  resource: projects.locations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/operations
  resource: projects.locations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait
  resource: projects.locations.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Submits a build in a given project.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/builds:submit
  resource: projects.locations.builds
- description: Gets a Instance
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/instances/{instancesId}
  resource: projects.locations.instances
- description: Lists Instances. Results are sorted by creation time, descending.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/instances
  resource: projects.locations.instances
- description: Creates an Instance.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/instances
  resource: projects.locations.instances
- description: Stops an Instance.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/instances/{instancesId}:stop
  resource: projects.locations.instances
- description: Starts an Instance.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/instances/{instancesId}:start
  resource: projects.locations.instances
- description: Deletes a Instance
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/instances/{instancesId}
  resource: projects.locations.instances
- description: Gets information about a Job.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}
  resource: projects.locations.jobs
- description: Lists Jobs. Results are sorted by creation time, descending.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs
  resource: projects.locations.jobs
- description: Gets the IAM Access Control policy currently in effect for the given Job. This result does not include any inherited pol
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}:getIamPolicy
  resource: projects.locations.jobs
- description: Creates a Job.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs
  resource: projects.locations.jobs
- description: Triggers creation of a new Execution of this Job.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}:run
  resource: projects.locations.jobs
- description: Sets the IAM Access control policy for the specified Job. Overwrites any existing policy.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}:setIamPolicy
  resource: projects.locations.jobs
- description: Returns permissions that a caller has on the specified Project. There are no permissions required for making this API ca
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}:testIamPermissions
  resource: projects.locations.jobs
- description: Updates a Job.
  method: PATCH
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}
  resource: projects.locations.jobs
- description: Deletes a Job.
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}
  resource: projects.locations.jobs
- description: Read the status of an image export operation.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}/executions/{executionsId}/{executionsId1}:exportStatus
  resource: projects.locations.jobs.executions
- description: Gets information about an Execution.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}/executions/{executionsId}
  resource: projects.locations.jobs.executions
- description: Lists Executions from a Job. Results are sorted by creation time, descending.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}/executions
  resource: projects.locations.jobs.executions
- description: Cancels an Execution.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}/executions/{executionsId}:cancel
  resource: projects.locations.jobs.executions
- description: Deletes an Execution.
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}/executions/{executionsId}
  resource: projects.locations.jobs.executions
- description: Gets information about a Task.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}/executions/{executionsId}/tasks/{tasksId}
  resource: projects.locations.jobs.executions.tasks
- description: Lists Tasks from an Execution of a Job.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/jobs/{jobsId}/executions/{executionsId}/tasks
  resource: projects.locations.jobs.executions.tasks
- description: Gets information about a Service.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}
  resource: projects.locations.services
- description: Lists Services. Results are sorted by creation time, descending.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/services
  resource: projects.locations.services
- description: Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:getIamPolicy
  resource: projects.locations.services
- description: Creates a new Service in a given project and location.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/services
  resource: projects.locations.services
- description: Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:setIamPolicy
  resource: projects.locations.services
- description: Returns permissions that a caller has on the specified Project. There are no permissions required for making this API ca
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:testIamPermissions
  resource: projects.locations.services
- description: Updates a Service.
  method: PATCH
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}
  resource: projects.locations.services
- description: Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}
  resource: projects.locations.services
- description: Read the status of an image export operation.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/revisions/{revisionsId}/{revisionsId1}:exportStatus
  resource: projects.locations.services.revisions
- description: Gets information about a Revision.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/revisions/{revisionsId}
  resource: projects.locations.services.revisions
- description: Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/revisions
  resource: projects.locations.services.revisions
- description: Deletes a Revision.
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/revisions/{revisionsId}
  resource: projects.locations.services.revisions
- description: Gets information about a WorkerPool.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}
  resource: projects.locations.workerPools
- description: Lists WorkerPools. Results are sorted by creation time, descending.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools
  resource: projects.locations.workerPools
- description: 'Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include '
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}:getIamPolicy
  resource: projects.locations.workerPools
- description: Creates a new WorkerPool in a given project and location.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools
  resource: projects.locations.workerPools
- description: Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}:setIamPolicy
  resource: projects.locations.workerPools
- description: Returns permissions that a caller has on the specified Project. There are no permissions required for making this API ca
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}:testIamPermissions
  resource: projects.locations.workerPools
- description: Updates a WorkerPool.
  method: PATCH
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}
  resource: projects.locations.workerPools
- description: Deletes a WorkerPool.
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}
  resource: projects.locations.workerPools
- description: Gets information about a Revision.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}/revisions/{revisionsId}
  resource: projects.locations.workerPools.revisions
- description: Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}/revisions
  resource: projects.locations.workerPools.revisions
- description: Deletes a Revision.
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/workerPools/{workerPoolsId}/revisions/{revisionsId}
  resource: projects.locations.workerPools.revisions
name: run
service_url: https://run.googleapis.com/
title: Cloud Run Admin API
version: v2
---
