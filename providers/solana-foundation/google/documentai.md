---
category: ai_ml
description: Extract structured data from PDFs, scanned documents, and images using OCR and ML. Handles invoices, receipts, contracts, forms, tax docs, and IDs. Returns typed fields, tables, and entities.
use_case: "processing invoices, extracting text from scanned documents, digitizing paper forms, receipt parsing, contract analysis"
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
- description: Retrieve detailed configuration for a Document AI processor including its type, state, default version, and creation time
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}
  resource: projects.locations.processors
- description: Process a single document synchronously through a Document AI processor, extracting text, entities, tables, and structured fields
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
- description: Enable a disabled Document AI processor so it can accept document processing and batch processing requests again
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}:enable
  resource: projects.locations.processors
- description: Disable a Document AI processor to prevent it from accepting new processing requests while preserving its configuration
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
- description: Process a single document using a specific processor version, extracting text, entities, tables, and structured data fields
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
- description: Deploy a processor version to make it available for online document processing, loading the model artifacts for serving
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
- description: Retrieve details for a specific Document AI processor type including its category, available locations, and launch stage
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processorTypes/{processorTypesId}
  resource: projects.locations.processorTypes
- description: List all document schemas in a location, returning their field definitions, display names, and entity type configurations
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas
  resource: projects.locations.schemas
- description: Retrieve a specific document schema by ID, including its field definitions, entity types, and label configurations
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}
  resource: projects.locations.schemas
- description: Create a new document schema defining the entity types and field structures for document extraction and classification
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas
  resource: projects.locations.schemas
- description: 'Updates a schema. Editable fields are: - `display_name` - `labels`'
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}
  resource: projects.locations.schemas
- description: Delete a document schema permanently, removing its field definitions and entity type configurations from the project
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}
  resource: projects.locations.schemas
- description: List all versions of a document schema, returning each version's field definitions and revision history metadata
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions
  resource: projects.locations.schemas.schemaVersions
- description: Retrieve a specific schema version by ID, including its entity type definitions, field structures, and version metadata
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions/{schemaVersionsId}
  resource: projects.locations.schemas.schemaVersions
- description: Create a new version of a document schema, allowing you to evolve field definitions while preserving previous versions
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions
  resource: projects.locations.schemas.schemaVersions
- description: Generate a new schema version automatically using AI to infer entity types and field structures from sample documents
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions:generate
  resource: projects.locations.schemas.schemaVersions
- description: 'Updates a schema version. Editable fields are: - `display_name` - `labels`'
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions/{schemaVersionsId}
  resource: projects.locations.schemas.schemaVersions
- description: Delete a specific schema version permanently, removing its field definitions while leaving other versions of the schema intact
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions/{schemaVersionsId}
  resource: projects.locations.schemas.schemaVersions
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/operations/{operationsId}
  resource: operations
name: documentai
sandbox_service_url: https://sandbox-pay-google-documentai-123883807128.us-central1.run.app
service_url: https://production-pay-google-documentai-123883807128.us-central1.run.app
title: Cloud Document AI API
version: v1
---
