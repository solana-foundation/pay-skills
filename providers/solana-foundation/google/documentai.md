---
category: ai_ml
description: Extract structured data from documents using OCR and custom extractors.
endpoints:
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/operations/{operationsId}
  resource: projects.operations
- description: Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}:fetchProcessorTypes
  resource: projects.locations
- description: 'Lists information about the supported locations for this service. This method can be called in two ways: * **List all pu'
  method: GET
  path: v1/projects/{projectsId}/locations
  resource: projects.locations
- description: Gets information about a location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}
  resource: projects.locations
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
- description: Lists all processors which belong to this project.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors
  resource: projects.locations.processors
- description: Gets a processor detail.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}
  resource: projects.locations.processors
- description: Processes a single document.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}:process
  pricing:
    dimensions:
    - direction: usage
      scale: 1000
      tiers:
      - price_usd: 1.5
        up_to: 5000000
      - price_usd: 0.6
      unit: pages
  resource: projects.locations.processors
- description: LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}:batchProcess
  pricing:
    dimensions:
    - direction: usage
      scale: 1000
      tiers:
      - price_usd: 1.5
        up_to: 5000000
      - price_usd: 0.6
      unit: pages
  resource: projects.locations.processors
- description: Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creat
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors
  resource: projects.locations.processors
- description: Enables a processor
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}:enable
  resource: projects.locations.processors
- description: Disables a processor
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}:disable
  resource: projects.locations.processors
- description: Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}:setDefaultProcessorVersion
  resource: projects.locations.processors
- description: 'Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated '
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}
  resource: projects.locations.processors
- description: Gets a processor version detail.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}
  resource: projects.locations.processors.processorVersions
- description: Lists all versions of a processor.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions
  resource: projects.locations.processors.processorVersions
- description: Processes a single document.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:process
  resource: projects.locations.processors.processorVersions
- description: LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:batchProcess
  resource: projects.locations.processors.processorVersions
- description: Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions:train
  resource: projects.locations.processors.processorVersions
- description: Deploys the processor version.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:deploy
  resource: projects.locations.processors.processorVersions
- description: Undeploys the processor version.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:undeploy
  resource: projects.locations.processors.processorVersions
- description: Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:evaluateProcessorVersion
  resource: projects.locations.processors.processorVersions
- description: Deletes the processor version, all artifacts under the processor version will be deleted.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}
  resource: projects.locations.processors.processorVersions
- description: Retrieves a specific evaluation.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}/evaluations/{evaluationsId}
  resource: projects.locations.processors.processorVersions.evaluations
- description: Retrieves a set of evaluations for a given processor version.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}/evaluations
  resource: projects.locations.processors.processorVersions.evaluations
- description: Send a document for Human Review. The input document should be processed by the specified processor.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/humanReviewConfig:reviewDocument
  resource: projects.locations.processors.humanReviewConfig
- description: Lists the processor types that exist.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processorTypes
  resource: projects.locations.processorTypes
- description: Gets a processor type detail.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processorTypes/{processorTypesId}
  resource: projects.locations.processorTypes
- description: Lists Schemas.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas
  resource: projects.locations.schemas
- description: Gets a schema.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}
  resource: projects.locations.schemas
- description: Creates a schema.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas
  resource: projects.locations.schemas
- description: 'Updates a schema. Editable fields are: - `display_name` - `labels`'
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}
  resource: projects.locations.schemas
- description: Deletes a schema.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}
  resource: projects.locations.schemas
- description: Lists SchemaVersions.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions
  resource: projects.locations.schemas.schemaVersions
- description: Gets a schema version.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions/{schemaVersionsId}
  resource: projects.locations.schemas.schemaVersions
- description: Creates a schema version.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions
  resource: projects.locations.schemas.schemaVersions
- description: Generates a schema version.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions:generate
  resource: projects.locations.schemas.schemaVersions
- description: 'Updates a schema version. Editable fields are: - `display_name` - `labels`'
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions/{schemaVersionsId}
  resource: projects.locations.schemas.schemaVersions
- description: Deletes a schema version.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions/{schemaVersionsId}
  resource: projects.locations.schemas.schemaVersions
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/operations/{operationsId}
  resource: operations
name: documentai
service_url: https://sandbox-pay-google-documentai-v2c65mhlba-uc.a.run.app
title: Cloud Document AI API
version: v1
---
