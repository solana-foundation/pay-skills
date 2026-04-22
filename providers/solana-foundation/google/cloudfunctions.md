---
category: compute
description: Serverless functions triggered by events or HTTP.
endpoints:
- description: Lists information about the supported locations for this service. This method lists locations based on the resource scop
  method: GET
  path: v2/projects/{projectsId}/locations
  resource: projects.locations
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/operations
  resource: projects.locations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:getIamPolicy
  resource: projects.locations.functions
- description: Returns a function with the given name from the requested project.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}
  resource: projects.locations.functions
- description: Returns a list of functions that belong to the requested project.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/functions
  resource: projects.locations.functions
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:setIamPolicy
  resource: projects.locations.functions
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:testIamPermissions
  resource: projects.locations.functions
- description: Creates a new function. If a function with the given name already exists in the specified project, the long running oper
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions
  resource: projects.locations.functions
- description: Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. This is the firs
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:setupFunctionUpgradeConfig
  resource: projects.locations.functions
- description: Aborts generation upgrade process for a function with the given name from the specified project. Deletes all 2nd Gen cop
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:abortFunctionUpgrade
  resource: projects.locations.functions
- description: Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. This is the second step
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:redirectFunctionUpgradeTraffic
  resource: projects.locations.functions
- description: Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. After this operation, a
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:rollbackFunctionUpgradeTraffic
  resource: projects.locations.functions
- description: Finalizes the upgrade after which function upgrade can not be rolled back. This is the last step of the multi step proce
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:commitFunctionUpgrade
  resource: projects.locations.functions
- description: Commits a function upgrade from GCF Gen1 to GCF Gen2. This action deletes the Gen1 function, leaving the Gen2 function a
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:commitFunctionUpgradeAsGen2
  resource: projects.locations.functions
- description: 'Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://'
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions:generateUploadUrl
  resource: projects.locations.functions
- description: Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and shoul
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:generateDownloadUrl
  resource: projects.locations.functions
- description: Detaches 2nd Gen function to Cloud Run function.
  method: POST
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:detachFunction
  resource: projects.locations.functions
- description: Updates existing function.
  method: PATCH
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}
  resource: projects.locations.functions
- description: Deletes a function with the given name from the specified project. If the given function is used by some trigger, the tr
  method: DELETE
  path: v2/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}
  resource: projects.locations.functions
- description: Returns a list of runtimes that are supported for the requested project.
  method: GET
  path: v2/projects/{projectsId}/locations/{locationsId}/runtimes
  resource: projects.locations.runtimes
name: cloudfunctions
service_url: https://sandbox-pay-google-cloudfunctions-v2c65mhlba-uc.a.run.app
title: Cloud Functions API
version: v2
---
