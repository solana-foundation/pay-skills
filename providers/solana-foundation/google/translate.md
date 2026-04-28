---
category: ai_ml
description: "Translate text and documents across 130+ languages. Supports language detection, romanization, synchronous and batch translation, glossaries for domain terminology, adaptive MT datasets, custom models, and document formatting."
use_case: "Use for multilingual content, localization, document translation, language detection, cross-language communication, glossary-controlled terminology, romanization, batch translation jobs, adaptive MT, and custom translation models."
endpoints:
- description: List languages supported for translation, optionally localized for a display language.
  method: GET
  path: v3/projects/{projectsId}/supportedLanguages
  resource: projects
- description: Detect the source language of input text and return language codes with confidence signals.
  method: POST
  path: v3/projects/{projectsId}:detectLanguage
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: characters
  resource: projects
- description: Translate input text into a target language and return translated text segments.
  method: POST
  path: v3/projects/{projectsId}/translateText
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: characters
  resource: projects
- description: Romanize input text written in non-Latin scripts into Latin script.
  method: POST
  path: v3/projects/{projectsId}/romanizeText
  resource: projects
- description: List supported Cloud Translation locations for a project, including regional endpoints.
  method: GET
  path: v3/projects/{projectsId}/locations
  resource: projects.locations
- description: Get metadata for a supported Cloud Translation location.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}
  resource: projects.locations
- description: List languages supported for translation in a specific location.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/supportedLanguages
  resource: projects.locations
- description: Romanize input text in a specific location from non-Latin scripts into Latin script.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:romanizeText
  resource: projects.locations
- description: Translate large text batches asynchronously and write translated output to the configured destination.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:batchTranslateText
  resource: projects.locations
- description: Translate text with Adaptive MT so corrections and dataset examples can improve domain-specific output.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:adaptiveMtTranslate
  resource: projects.locations
- description: Detect the source language of input text in a specific location and return language confidence signals.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:detectLanguage
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: characters
  resource: projects.locations
- description: Translate a document synchronously while preserving supported document structure and formatting.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:translateDocument
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.08
      unit: pages
  resource: projects.locations
- description: Refine previously translated text to improve fluency, terminology, and translation quality.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:refineText
  resource: projects.locations
- description: Translate input text in a specific location and return translated text segments.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:translateText
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: characters
  resource: projects.locations
- description: Translate large document batches asynchronously and write translated files to the configured destination.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:batchTranslateDocument
  resource: projects.locations
- description: Retrieve a translation dataset by ID, including its source and target language pair, training status, and example count
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}
  resource: projects.locations.datasets
- description: List all translation datasets in a project location, including their language pairs, creation times, and training status
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets
  resource: projects.locations.datasets
- description: Create a new translation dataset for a specific language pair, used to store sentence pairs for training custom translation models
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets
  resource: projects.locations.datasets
- description: Import sentence pairs into a translation dataset for custom model training.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:importData
  resource: projects.locations.datasets
- description: Export translation dataset sentence pairs to the configured output location.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:exportData
  resource: projects.locations.datasets
- description: Delete a translation dataset and all stored sentence pairs.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}
  resource: projects.locations.datasets
- description: List sentence-pair examples stored in a translation dataset.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/examples
  resource: projects.locations.datasets.examples
- description: List long-running Cloud Translation operations in a project location.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/operations
  resource: projects.locations.operations
- description: Get the latest state of a long-running Cloud Translation operation for polling results.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Request cancellation of a long-running Cloud Translation operation.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel
  resource: projects.locations.operations
- description: Wait for a Cloud Translation operation to complete or return the latest state after a timeout.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait
  resource: projects.locations.operations
- description: Delete a long-running Cloud Translation operation record after results are no longer needed.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: List translation glossaries in a project location with language pairs and entry counts.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries
  resource: projects.locations.glossaries
- description: Get a translation glossary by ID, including language pair, entry source, and metadata.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}
  resource: projects.locations.glossaries
- description: Create a translation glossary for domain-specific terminology and return a long-running operation.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries
  resource: projects.locations.glossaries
- description: Update a translation glossary, optionally reloading entries asynchronously from a glossary file.
  method: PATCH
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}
  resource: projects.locations.glossaries
- description: Delete a translation glossary or cancel glossary creation if it is still in progress.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}
  resource: projects.locations.glossaries
- description: Get a single glossary entry by ID, including source and target terms.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}
  resource: projects.locations.glossaries.glossaryEntries
- description: List glossary entries with source and target terminology mappings.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries
  resource: projects.locations.glossaries.glossaryEntries
- description: Create a new glossary entry mapping a source term to its target translation, enforcing consistent domain-specific terminology
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries
  resource: projects.locations.glossaries.glossaryEntries
- description: Update an existing glossary entry's source or target term translations to refine domain-specific translation terminology
  method: PATCH
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}
  resource: projects.locations.glossaries.glossaryEntries
- description: Delete a single glossary entry from a translation glossary.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}
  resource: projects.locations.glossaries.glossaryEntries
- description: Retrieve an Adaptive MT dataset by ID, including its language pair, example count, and configuration for adaptive translation
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}
  resource: projects.locations.adaptiveMtDatasets
- description: List Adaptive MT datasets in a project location that the caller can read.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets
  resource: projects.locations.adaptiveMtDatasets
- description: Create a new Adaptive MT dataset for a language pair, which learns from corrections to improve translation quality over time
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets
  resource: projects.locations.adaptiveMtDatasets
- description: Import an Adaptive MT file and add its sentence pairs to an Adaptive MT dataset.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}:importAdaptiveMtFile
  resource: projects.locations.adaptiveMtDatasets
- description: Delete an Adaptive MT dataset, including entries, files, and associated metadata.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}
  resource: projects.locations.adaptiveMtDatasets
- description: Retrieve an Adaptive MT file by ID, returning its sentence pairs and metadata used for adaptive translation improvements
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtFiles
- description: List Adaptive MT files associated with a dataset.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtFiles
- description: Delete an Adaptive MT file and its imported sentences.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtFiles
- description: List Adaptive MT sentences under a specific imported file.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}/adaptiveMtSentences
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences
- description: List Adaptive MT sentences directly under a dataset.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtSentences
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtSentences
- description: List all custom translation models in a project location, including their training status, language pairs, and dataset info
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/models
  resource: projects.locations.models
- description: Retrieve a specific custom translation model by ID, including its training status, source and target languages, and dataset
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}
  resource: projects.locations.models
- description: Create a new custom translation model by training on a dataset of sentence pairs for a specific source and target language pair
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/models
  resource: projects.locations.models
- description: Delete a custom translation model permanently, removing its trained weights and freeing associated project resources
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}
  resource: projects.locations.models
name: translate
sandbox_service_url: https://sandbox-pay-google-translate-123883807128.us-central1.run.app
service_url: https://production-pay-google-translate-123883807128.us-central1.run.app
title: Cloud Translation API
version: v3
---

## Spend-aware usage

- Use `translateText` when source and target languages are known. Use
  `detectLanguage` only when the source language is unknown.
- Batch multiple short strings in one request when they share the same language
  pair.
- Use romanization, adaptive translation, glossaries, datasets, or custom models
  only when the user asks for those advanced features. They are not needed for
  ordinary translation.
