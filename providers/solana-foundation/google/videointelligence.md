---
category: ai_ml
description: Detect labels, objects, text, and shot changes in video.
endpoints:
- description: Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations
  method: POST
  path: v1/videos:annotate
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0
        up_to: 1000
      - price_usd: 0.1
      unit: minutes
  resource: videos
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
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/operations/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: operations.projects.locations.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/operations/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel
  resource: operations.projects.locations.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/operations/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: operations.projects.locations.operations
name: videointelligence
service_url: https://sandbox-pay-google-videointelligence-v2c65mhlba-uc.a.run.app
title: Cloud Video Intelligence API
version: v1
---
