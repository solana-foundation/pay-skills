---
category: ai_ml
description: "Use Google Gemini models for text generation, multimodal image/audio/video understanding, chat, embeddings, code generation, JSON output, function calling, cached context, file search, grounding with Google Search, and fine-tuned models."
use_case: "Use for AI chat, text generation, summarization, code help, image and video understanding, embeddings, semantic retrieval, tool calling, structured JSON output, grounded answers, batch generation, cached prompts, and tuned model workflows."
endpoints:
- description: List Gemini batch operations, including batch generation and embedding jobs.
  method: GET
  path: v1beta/batches
  resource: batches
- description: Get the latest state of a Gemini batch operation for polling results.
  method: GET
  path: v1beta/batches/{batchesId}
  resource: batches
- description: Request cancellation of a Gemini batch operation.
  method: POST
  path: v1beta/batches/{batchesId}:cancel
  resource: batches
- description: Updates a batch of GenerateContent requests for batch processing.
  method: PATCH
  path: v1beta/batches/{batchesId}:updateGenerateContentBatch
  resource: batches
- description: Updates a batch of EmbedContent requests for batch processing.
  method: PATCH
  path: v1beta/batches/{batchesId}:updateEmbedContentBatch
  resource: batches
- description: Delete a Gemini batch operation record after results are no longer needed.
  method: DELETE
  path: v1beta/batches/{batchesId}
  resource: batches
- description: List Gemini models available through the API, including supported methods and model metadata.
  method: GET
  path: v1beta/models
  resource: models
- description: Get Gemini model metadata such as version, token limits, supported methods, and tuning parameters.
  method: GET
  path: v1beta/models/{modelsId}
  resource: models
- description: Generate a Gemini response from text, image, audio, video, tool, or structured content inputs.
  method: POST
  path: v1beta/models/{modelsId}:generateContent
  resource: models
- description: Generates a grounded answer from the model given an input `GenerateAnswerRequest`.
  method: POST
  path: v1beta/models/{modelsId}:generateAnswer
  resource: models
- description: Stream a Gemini generated response incrementally for lower-latency text or multimodal output.
  method: POST
  path: v1beta/models/{modelsId}:streamGenerateContent
  resource: models
- description: Generate a text embedding vector from input content using a Gemini embedding model.
  method: POST
  path: v1beta/models/{modelsId}:embedContent
  pricing:
    dimensions:
    - direction: input
      scale: 1000000
      tiers:
      - notes: Free
        price_usd: 0
      unit: tokens
  resource: models
- description: Generate multiple embedding vectors in one request from a batch of input content strings.
  method: POST
  path: v1beta/models/{modelsId}:batchEmbedContents
  pricing:
    dimensions:
    - direction: input
      scale: 1000000
      tiers:
      - notes: Free
        price_usd: 0
      unit: tokens
  resource: models
- description: Count tokens for Gemini content input before generation or embedding requests.
  method: POST
  path: v1beta/models/{modelsId}:countTokens
  resource: models
- description: Enqueues a batch of `GenerateContent` requests for batch processing.
  method: POST
  path: v1beta/models/{modelsId}:batchGenerateContent
  resource: models
- description: Enqueue a batch of embedding requests for asynchronous Gemini processing.
  method: POST
  path: v1beta/models/{modelsId}:asyncBatchEmbedContent
  resource: models
- description: Generates a response from the model given an input `MessagePrompt`.
  method: POST
  path: v1beta/models/{modelsId}:generateMessage
  resource: models
- description: Runs a model's tokenizer on a string and returns the token count.
  method: POST
  path: v1beta/models/{modelsId}:countMessageTokens
  resource: models
- description: Perform a prediction request against a Gemini model, returning generated output based on the provided input and model parameters
  method: POST
  path: v1beta/models/{modelsId}:predict
  resource: models
- description: Run a prediction request against a Gemini model asynchronously and return a long-running operation.
  method: POST
  path: v1beta/models/{modelsId}:predictLongRunning
  resource: models
- description: Generates a response from the model given an input message.
  method: POST
  path: v1beta/models/{modelsId}:generateText
  resource: models
- description: Generates an embedding from the model given an input message.
  method: POST
  path: v1beta/models/{modelsId}:embedText
  resource: models
- description: Generates multiple embeddings from the model given input text in a synchronous call.
  method: POST
  path: v1beta/models/{modelsId}:batchEmbedText
  resource: models
- description: Runs a model's tokenizer on a text and returns the token count.
  method: POST
  path: v1beta/models/{modelsId}:countTextTokens
  resource: models
- description: List long-running operations associated with a Gemini model.
  method: GET
  path: v1beta/models/{modelsId}/operations
  resource: models.operations
- description: Get the latest state of a model-scoped Gemini operation for polling results.
  method: GET
  path: v1beta/models/{modelsId}/operations/{operationsId}
  resource: models.operations
- description: List all fine-tuned Gemini models created by the user, including their training status, base model, and tuning configuration
  method: GET
  path: v1beta/tunedModels
  resource: tunedModels
- description: Get metadata for a fine-tuned Gemini model, including base model, tuning state, and display name.
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}
  resource: tunedModels
- description: Generate content with a fine-tuned Gemini model from text, multimodal, tool, or structured inputs.
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:generateContent
  resource: tunedModels
- description: Stream generated content from a fine-tuned Gemini model incrementally.
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:streamGenerateContent
  resource: tunedModels
- description: Enqueues a batch of `GenerateContent` requests for batch processing.
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:batchGenerateContent
  resource: tunedModels
- description: Enqueue a batch of embedding requests for asynchronous processing by a fine-tuned model.
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:asyncBatchEmbedContent
  resource: tunedModels
- description: Create a fine-tuned Gemini model and return a long-running operation for training progress.
  method: POST
  path: v1beta/tunedModels
  resource: tunedModels
- description: Transfer ownership of a fine-tuned Gemini model to another account.
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:transferOwnership
  resource: tunedModels
- description: Generates a response from the model given an input message.
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:generateText
  resource: tunedModels
- description: Update a fine-tuned Gemini model's display name, description, or tuning hyperparameters using a field mask for partial updates
  method: PATCH
  path: v1beta/tunedModels/{tunedModelsId}
  resource: tunedModels
- description: Delete a fine-tuned Gemini model permanently, removing its weights, configuration, and all associated training artifacts
  method: DELETE
  path: v1beta/tunedModels/{tunedModelsId}
  resource: tunedModels
- description: List long-running operations associated with a fine-tuned Gemini model.
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}/operations
  resource: tunedModels.operations
- description: Get the latest state of a fine-tuned model operation for polling results.
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}/operations/{operationsId}
  resource: tunedModels.operations
- description: Get an access permission on a fine-tuned Gemini model.
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}/permissions/{permissionsId}
  resource: tunedModels.permissions
- description: List access permissions granted on a fine-tuned Gemini model.
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}/permissions
  resource: tunedModels.permissions
- description: Grant access permission to a user, group, or service account for a fine-tuned Gemini model.
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}/permissions
  resource: tunedModels.permissions
- description: Update access permissions on a fine-tuned model, modifying the role granted to a specific user, group, or service account
  method: PATCH
  path: v1beta/tunedModels/{tunedModelsId}/permissions/{permissionsId}
  resource: tunedModels.permissions
- description: Revoke a specific access permission from a fine-tuned model, removing the granted role for a user, group, or service account
  method: DELETE
  path: v1beta/tunedModels/{tunedModelsId}/permissions/{permissionsId}
  resource: tunedModels.permissions
- description: Generate content through a dynamic Gemini model route from text or multimodal inputs.
  method: POST
  path: v1beta/dynamic/{dynamicId}:generateContent
  resource: dynamic
- description: Stream generated content through a dynamic Gemini model route.
  method: POST
  path: v1beta/dynamic/{dynamicId}:streamGenerateContent
  resource: dynamic
- description: List all cached content resources for the project, returning metadata such as expiration time, creation time, and model used
  method: GET
  path: v1beta/cachedContents
  resource: cachedContents
- description: Retrieve a specific cached content resource by ID, including its expiration time, token count, model, and usage metadata
  method: GET
  path: v1beta/cachedContents/{cachedContentsId}
  resource: cachedContents
- description: Create a cached content resource to store reusable context for Gemini models, reducing latency and token costs on repeated prompts
  method: POST
  path: v1beta/cachedContents
  resource: cachedContents
- description: Update cached content expiration for reusable Gemini context.
  method: PATCH
  path: v1beta/cachedContents/{cachedContentsId}
  resource: cachedContents
- description: Delete a cached content resource permanently, freeing the stored tokens and associated model context from the project
  method: DELETE
  path: v1beta/cachedContents/{cachedContentsId}
  resource: cachedContents
- description: Upload a file to the Gemini API for use in multimodal prompts, supporting images, audio, video, and documents up to 2GB
  method: POST
  path: v1beta/files
  resource: media
- description: Upload data to a File Search Store, then preprocess, chunk, and index it as a searchable document.
  method: POST
  path: v1beta/fileSearchStores/{fileSearchStoresId}:uploadToFileSearchStore
  resource: media
- description: List Gemini API file metadata for uploaded files owned by the project.
  method: GET
  path: v1beta/files
  resource: files
- description: Get Gemini API metadata for an uploaded file, including state, URI, MIME type, and size.
  method: GET
  path: v1beta/files/{filesId}
  resource: files
- description: Register Google Cloud Storage files with the Gemini File Service for later use in prompts.
  method: POST
  path: v1beta/files:register
  resource: files
- description: Delete an uploaded file permanently from the Gemini API, removing it from storage and preventing its use in future prompts
  method: DELETE
  path: v1beta/files/{filesId}
  resource: files
- description: List generated files owned by the project, including file metadata and creation state.
  method: GET
  path: v1beta/generatedFiles
  resource: generatedFiles
- description: Get the latest state of a generated-file operation for polling results.
  method: GET
  path: v1beta/generatedFiles/{generatedFilesId}/operations/{operationsId}
  resource: generatedFiles.operations
- description: List File Search Stores owned by the project for retrieval-augmented Gemini workflows.
  method: GET
  path: v1beta/fileSearchStores
  resource: fileSearchStores
- description: Get File Search Store metadata, including display name and indexing state.
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}
  resource: fileSearchStores
- description: Create an empty File Search Store for indexing files used in grounded Gemini responses.
  method: POST
  path: v1beta/fileSearchStores
  resource: fileSearchStores
- description: Import an uploaded Gemini file into a File Search Store for indexing and retrieval.
  method: POST
  path: v1beta/fileSearchStores/{fileSearchStoresId}:importFile
  resource: fileSearchStores
- description: Delete a file search store and all its indexed documents, removing the searchable knowledge base from the project
  method: DELETE
  path: v1beta/fileSearchStores/{fileSearchStoresId}
  resource: fileSearchStores
- description: Get the latest state of a File Search Store operation for polling indexing results.
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}/operations/{operationsId}
  resource: fileSearchStores.operations
- description: Get the latest state of a File Search Store upload operation for polling results.
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}/upload/operations/{operationsId}
  resource: fileSearchStores.upload.operations
- description: Get metadata for a document indexed in a File Search Store.
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}/documents/{documentsId}
  resource: fileSearchStores.documents
- description: List documents indexed in a File Search Store, including document IDs, metadata, and indexing state.
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}/documents
  resource: fileSearchStores.documents
- description: Delete a document from a file search store, removing its indexed content and chunks from the searchable knowledge base
  method: DELETE
  path: v1beta/fileSearchStores/{fileSearchStoresId}/documents/{documentsId}
  resource: fileSearchStores.documents
- description: List semantic retrieval corpora owned by the project.
  method: GET
  path: v1beta/corpora
  resource: corpora
- description: Get metadata for a semantic retrieval corpus, including display name and configuration.
  method: GET
  path: v1beta/corpora/{corporaId}
  resource: corpora
- description: Create a new empty corpus for semantic retrieval, which can store documents and chunks for grounded question answering
  method: POST
  path: v1beta/corpora
  resource: corpora
- description: Delete a corpus and all its stored documents and chunks permanently, removing the semantic retrieval knowledge base
  method: DELETE
  path: v1beta/corpora/{corporaId}
  resource: corpora
- description: Get the latest state of a corpus operation for polling results.
  method: GET
  path: v1beta/corpora/{corporaId}/operations/{operationsId}
  resource: corpora.operations
- description: Get an access permission on a semantic retrieval corpus.
  method: GET
  path: v1beta/corpora/{corporaId}/permissions/{permissionsId}
  resource: corpora.permissions
- description: List access permissions granted on a semantic retrieval corpus.
  method: GET
  path: v1beta/corpora/{corporaId}/permissions
  resource: corpora.permissions
- description: Grant access permission to a user, group, or service account for a semantic retrieval corpus.
  method: POST
  path: v1beta/corpora/{corporaId}/permissions
  resource: corpora.permissions
- description: Update access permissions on a corpus, modifying the role granted to a specific user, group, or service account for the resource
  method: PATCH
  path: v1beta/corpora/{corporaId}/permissions/{permissionsId}
  resource: corpora.permissions
- description: Revoke a specific access permission from a corpus, removing the granted role for a user, group, or service account
  method: DELETE
  path: v1beta/corpora/{corporaId}/permissions/{permissionsId}
  resource: corpora.permissions
name: generativelanguage
sandbox_service_url: https://sandbox-pay-google-generativelanguage-123883807128.us-central1.run.app
service_url: https://production-pay-google-generativelanguage-123883807128.us-central1.run.app
title: Generative Language API (Gemini)
version: v1beta
---
