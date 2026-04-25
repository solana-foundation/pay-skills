---
category: ai_ml
description: Google Gemini models — generate text, analyze images and video, run multi-turn conversations, embed text, and execute code. Supports function calling, grounding with Google Search, and JSON output mode.
use_case: "text generation, image understanding, conversational AI, code generation, multimodal analysis, embeddings"
endpoints:
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1beta/batches
  resource: batches
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1beta/batches/{batchesId}
  resource: batches
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
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
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1beta/batches/{batchesId}
  resource: batches
- description: Lists the [`Model`s](https://ai.google.dev/gemini-api/docs/models/gemini) available through the Gemini API.
  method: GET
  path: v1beta/models
  resource: models
- description: Gets information about a specific `Model` such as its version number, token limits, [parameters](https://ai.google.dev/g
  method: GET
  path: v1beta/models/{modelsId}
  resource: models
- description: Generates a model response given an input `GenerateContentRequest`. Refer to the [text generation guide](https://ai.goog
  method: POST
  path: v1beta/models/{modelsId}:generateContent
  resource: models
- description: Generates a grounded answer from the model given an input `GenerateAnswerRequest`.
  method: POST
  path: v1beta/models/{modelsId}:generateAnswer
  resource: models
- description: Generates a [streamed response](https://ai.google.dev/gemini-api/docs/text-generation?lang=python#generate-a-text-stream
  method: POST
  path: v1beta/models/{modelsId}:streamGenerateContent
  resource: models
- description: Generates a text embedding vector from the input `Content` using the specified [Gemini Embedding model](https://ai.googl
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
- description: Generates multiple embedding vectors from the input `Content` which consists of a batch of strings represented as `Embed
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
- description: Runs a model's tokenizer on input `Content` and returns the token count. Refer to the [tokens guide](https://ai.google.d
  method: POST
  path: v1beta/models/{modelsId}:countTokens
  resource: models
- description: Enqueues a batch of `GenerateContent` requests for batch processing.
  method: POST
  path: v1beta/models/{modelsId}:batchGenerateContent
  resource: models
- description: Enqueues a batch of `EmbedContent` requests for batch processing. We have a `BatchEmbedContents` handler in `GenerativeS
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
- description: Same as Predict but returns an LRO.
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
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1beta/models/{modelsId}/operations
  resource: models.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1beta/models/{modelsId}/operations/{operationsId}
  resource: models.operations
- description: List all fine-tuned Gemini models created by the user, including their training status, base model, and tuning configuration
  method: GET
  path: v1beta/tunedModels
  resource: tunedModels
- description: Gets information about a specific TunedModel.
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}
  resource: tunedModels
- description: Generates a model response given an input `GenerateContentRequest`. Refer to the [text generation guide](https://ai.goog
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:generateContent
  resource: tunedModels
- description: Generates a [streamed response](https://ai.google.dev/gemini-api/docs/text-generation?lang=python#generate-a-text-stream
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:streamGenerateContent
  resource: tunedModels
- description: Enqueues a batch of `GenerateContent` requests for batch processing.
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:batchGenerateContent
  resource: tunedModels
- description: Enqueues a batch of `EmbedContent` requests for batch processing. We have a `BatchEmbedContents` handler in `GenerativeS
  method: POST
  path: v1beta/tunedModels/{tunedModelsId}:asyncBatchEmbedContent
  resource: tunedModels
- description: 'Creates a tuned model. Check intermediate tuning progress (if any) through the [google.longrunning.Operations] service. '
  method: POST
  path: v1beta/tunedModels
  resource: tunedModels
- description: Transfers ownership of the tuned model. This is the only way to change ownership of the tuned model. The current owner w
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
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}/operations
  resource: tunedModels.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}/operations/{operationsId}
  resource: tunedModels.operations
- description: Gets information about a specific Permission.
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}/permissions/{permissionsId}
  resource: tunedModels.permissions
- description: Lists permissions for the specific resource.
  method: GET
  path: v1beta/tunedModels/{tunedModelsId}/permissions
  resource: tunedModels.permissions
- description: Create a permission to a specific resource.
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
- description: Generates a model response given an input `GenerateContentRequest`. Refer to the [text generation guide](https://ai.goog
  method: POST
  path: v1beta/dynamic/{dynamicId}:generateContent
  resource: dynamic
- description: Generates a [streamed response](https://ai.google.dev/gemini-api/docs/text-generation?lang=python#generate-a-text-stream
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
- description: Updates CachedContent resource (only expiration is updatable).
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
- description: Uploads data to a FileSearchStore, preprocesses and chunks before storing it in a FileSearchStore Document.
  method: POST
  path: v1beta/fileSearchStores/{fileSearchStoresId}:uploadToFileSearchStore
  resource: media
- description: Lists the metadata for `File`s owned by the requesting project.
  method: GET
  path: v1beta/files
  resource: files
- description: Gets the metadata for the given `File`.
  method: GET
  path: v1beta/files/{filesId}
  resource: files
- description: Registers a Google Cloud Storage files with FileService. The user is expected to provide Google Cloud Storage URIs and w
  method: POST
  path: v1beta/files:register
  resource: files
- description: Delete an uploaded file permanently from the Gemini API, removing it from storage and preventing its use in future prompts
  method: DELETE
  path: v1beta/files/{filesId}
  resource: files
- description: Lists the generated files owned by the requesting project.
  method: GET
  path: v1beta/generatedFiles
  resource: generatedFiles
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1beta/generatedFiles/{generatedFilesId}/operations/{operationsId}
  resource: generatedFiles.operations
- description: Lists all `FileSearchStores` owned by the user.
  method: GET
  path: v1beta/fileSearchStores
  resource: fileSearchStores
- description: Gets information about a specific `FileSearchStore`.
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}
  resource: fileSearchStores
- description: Creates an empty `FileSearchStore`.
  method: POST
  path: v1beta/fileSearchStores
  resource: fileSearchStores
- description: Imports a `File` from File Service to a `FileSearchStore`.
  method: POST
  path: v1beta/fileSearchStores/{fileSearchStoresId}:importFile
  resource: fileSearchStores
- description: Delete a file search store and all its indexed documents, removing the searchable knowledge base from the project
  method: DELETE
  path: v1beta/fileSearchStores/{fileSearchStoresId}
  resource: fileSearchStores
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}/operations/{operationsId}
  resource: fileSearchStores.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}/upload/operations/{operationsId}
  resource: fileSearchStores.upload.operations
- description: Gets information about a specific `Document`.
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}/documents/{documentsId}
  resource: fileSearchStores.documents
- description: Lists all `Document`s in a `Corpus`.
  method: GET
  path: v1beta/fileSearchStores/{fileSearchStoresId}/documents
  resource: fileSearchStores.documents
- description: Delete a document from a file search store, removing its indexed content and chunks from the searchable knowledge base
  method: DELETE
  path: v1beta/fileSearchStores/{fileSearchStoresId}/documents/{documentsId}
  resource: fileSearchStores.documents
- description: Lists all `Corpora` owned by the user.
  method: GET
  path: v1beta/corpora
  resource: corpora
- description: Gets information about a specific `Corpus`.
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
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1beta/corpora/{corporaId}/operations/{operationsId}
  resource: corpora.operations
- description: Gets information about a specific Permission.
  method: GET
  path: v1beta/corpora/{corporaId}/permissions/{permissionsId}
  resource: corpora.permissions
- description: Lists permissions for the specific resource.
  method: GET
  path: v1beta/corpora/{corporaId}/permissions
  resource: corpora.permissions
- description: Create a permission to a specific resource.
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
