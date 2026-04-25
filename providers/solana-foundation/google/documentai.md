---
category: ai_ml
description: "Extract structured data from PDFs, scans, and document images using OCR and ML. Handles invoices, receipts, forms, contracts, tax documents, IDs, and custom schemas, returning text, tables, entities, fields, and confidence signals."
use_case: "Use for invoice and receipt parsing, OCR on scanned files, form digitization, contract analysis, tax document processing, ID extraction, table extraction, document classification, custom schema extraction, and human-review workflows."
endpoints:
- description: Get the latest state of a project-scoped Document AI operation for polling results.
  method: GET
  path: v1/projects/{projectsId}/operations/{operationsId}
  resource: projects.operations
- description: Fetch available Document AI processor types for a project location without pagination.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}:fetchProcessorTypes
  resource: projects.locations
- description: List supported Document AI locations for a project, including regional endpoints.
  method: GET
  path: v1/projects/{projectsId}/locations
  resource: projects.locations
- description: Get metadata for a supported Document AI location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}
  resource: projects.locations
- description: List long-running Document AI operations in a project location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/operations
  resource: projects.locations.operations
- description: Get the latest state of a long-running Document AI operation for polling results.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Request cancellation of a long-running Document AI operation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel
  resource: projects.locations.operations
- description: List Document AI processors in a project location, including processor IDs, types, and states.
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
- description: Batch process many documents asynchronously and write extracted Document JSON output to Cloud Storage.
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
- description: Create a Document AI processor from a processor type; new processors are enabled by default.
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
- description: Set the default processor version used for online and batch document processing requests.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}:setDefaultProcessorVersion
  resource: projects.locations.processors
- description: Delete a processor and its associated artifacts, unloading deployed model artifacts if needed.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}
  resource: projects.locations.processors
- description: Get detailed metadata for a specific processor version, including state and model information.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}
  resource: projects.locations.processors.processorVersions
- description: List all versions of a Document AI processor with deployment and training status.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions
  resource: projects.locations.processors.processorVersions
- description: Process a single document using a specific processor version, extracting text, entities, tables, and structured data fields
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:process
  resource: projects.locations.processors.processorVersions
- description: Batch process documents with a specific processor version and write Document JSON output to Cloud Storage.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:batchProcess
  resource: projects.locations.processors.processorVersions
- description: Train a new processor version from annotated documents and return a long-running training operation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions:train
  resource: projects.locations.processors.processorVersions
- description: Deploy a processor version to make it available for online document processing, loading the model artifacts for serving
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:deploy
  resource: projects.locations.processors.processorVersions
- description: Undeploy a processor version so it is no longer serving online document processing traffic.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:undeploy
  resource: projects.locations.processors.processorVersions
- description: Evaluate a processor version against annotated documents and return quality metrics in an evaluation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}:evaluateProcessorVersion
  resource: projects.locations.processors.processorVersions
- description: Delete a processor version and all artifacts associated with that version.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}
  resource: projects.locations.processors.processorVersions
- description: Get a specific processor version evaluation with metrics and metadata.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}/evaluations/{evaluationsId}
  resource: projects.locations.processors.processorVersions.evaluations
- description: List evaluations for a processor version to compare model quality over time.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/processorVersions/{processorVersionsId}/evaluations
  resource: projects.locations.processors.processorVersions.evaluations
- description: Send a processed document to Human Review for manual validation or correction.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/processors/{processorsId}/humanReviewConfig:reviewDocument
  resource: projects.locations.processors.humanReviewConfig
- description: List available processor types in a location, including prebuilt and custom-capable processors.
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
- description: Update a document schema display name or labels.
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
- description: Update a document schema version display name or labels.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions/{schemaVersionsId}
  resource: projects.locations.schemas.schemaVersions
- description: Delete a specific schema version permanently, removing its field definitions while leaving other versions of the schema intact
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/schemas/{schemasId}/schemaVersions/{schemaVersionsId}
  resource: projects.locations.schemas.schemaVersions
- description: Delete a long-running Document AI operation record after results are no longer needed.
  method: DELETE
  path: v1/operations/{operationsId}
  resource: operations
name: documentai
sandbox_service_url: https://sandbox-pay-google-documentai-123883807128.us-central1.run.app
service_url: https://production-pay-google-documentai-123883807128.us-central1.run.app
title: Cloud Document AI API
version: v1
---
