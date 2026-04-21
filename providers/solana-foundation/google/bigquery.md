---
category: data
description: Serverless data warehouse. SQL over petabyte-scale data.
endpoints:
- description: Returns the dataset specified by datasetID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Lists all datasets in the specified project to which the user has been granted the READER dataset role.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets
  resource: datasets
- description: Creates a new empty dataset.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets
  resource: datasets
- description: Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version d
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}:undelete
  resource: datasets
- description: Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch me
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch me
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, e
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Returns information about a specific job. Job information is available for a six month period after creation. Requires t
  method: GET
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}
  resource: jobs
- description: RPC to get the results of a query job.
  method: GET
  path: bigquery/v2/projects/{projectsId}/queries/{queriesId}
  resource: jobs
- description: Lists all jobs that you started in the specified project. Job information is available for a six month period after crea
  method: GET
  path: bigquery/v2/projects/{projectsId}/jobs
  resource: jobs
- description: Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status
  method: POST
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}/cancel
  resource: jobs
- description: Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of u
  method: POST
  path: bigquery/v2/projects/{projectsId}/jobs
  resource: jobs
- description: Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
  method: POST
  path: bigquery/v2/projects/{projectsId}/queries
  pricing:
    dimensions:
    - direction: usage
      scale: 1099511627776
      tiers:
      - notes: First 1 TiB/month free
        price_usd: 0
        up_to: 1
      - price_usd: 0.005
      unit: bytes
  resource: jobs
- description: Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}/delete
  resource: jobs
- description: Gets the specified model resource by model ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you ca
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models
  resource: models
- description: Patch specific fields in the specified model.
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: Deletes the model specified by modelId from the dataset.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: RPC to list projects to which the user has been granted any project role. Users of this method are encouraged to conside
  method: GET
  path: projects
  resource: projects
- description: RPC to get the service account for a project used for interactions with Google Cloud KMS
  method: GET
  path: bigquery/v2/projects/{projectsId}/serviceAccount
  resource: projects
- description: Gets the specified routine resource by routine ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: Lists all routines in the specified dataset. Requires the READER dataset role.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines
  resource: routines
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:getIamPolicy
  resource: routines
- description: Creates a new routine in the dataset.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines
  resource: routines
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:setIamPolicy
  resource: routines
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:testIamPermissions
  resource: routines
- description: Updates information in an existing routine. The update method replaces the entire Routine resource.
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: Deletes the routine specified by routineId from the dataset.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: Gets the specified row access policy by policy ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}
  resource: rowAccessPolicies
- description: Lists all row access policies on the specified table.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies
  resource: rowAccessPolicies
- description: Deletes provided row access policies.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies:batchDelete
  resource: rowAccessPolicies
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}:getIamPolicy
  resource: rowAccessPolicies
- description: Creates a row access policy.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies
  resource: rowAccessPolicies
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}:testIamPermissions
  resource: rowAccessPolicies
- description: Updates a row access policy.
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}
  resource: rowAccessPolicies
- description: Deletes a row access policy.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}
  resource: rowAccessPolicies
- description: List the content of a table in rows.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/data
  resource: tabledata
- description: Streams data into BigQuery one record at a time without needing to run a load job.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/insertAll
  resource: tabledata
- description: Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the ta
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: Lists all tables in the specified dataset. Requires the READER dataset role.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables
  resource: tables
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:getIamPolicy
  resource: tables
- description: Creates a new, empty table in the dataset.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables
  resource: tables
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:setIamPolicy
  resource: tables
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:testIamPermissions
  resource: tables
- description: Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
name: bigquery
service_url: https://bigquery.googleapis.com/
title: BigQuery API
version: v2
---
