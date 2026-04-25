---
category: ai_ml
description: Translate text and documents between 130+ languages. Supports batch translation, language detection, romanization, glossaries for domain-specific terms, and adaptive MT for improved quality over time.
use_case: "translating text, language detection, multilingual content, localization, document translation, cross-language communication"
endpoints:
- description: Returns a list of supported languages for translation.
  method: GET
  path: v3/projects/{projectsId}/supportedLanguages
  resource: projects
- description: Detects the language of text within a request.
  method: POST
  path: v3/projects/{projectsId}:detectLanguage
  pricing:
    dimensions:
    - direction: usage
      scale: 1000000
      tiers:
      - price_usd: 0
        up_to: 500000
      - price_usd: 20
      unit: characters
  resource: projects
- description: Translates input text and returns translated text.
  method: POST
  path: v3/projects/{projectsId}/translateText
  pricing:
    dimensions:
    - direction: usage
      scale: 1000000
      tiers:
      - price_usd: 0
        up_to: 500000
      - price_usd: 20
      unit: characters
  resource: projects
- description: Romanize input text written in non-Latin scripts to Latin text.
  method: POST
  path: v3/projects/{projectsId}/romanizeText
  resource: projects
- description: 'Lists information about the supported locations for this service. This method can be called in two ways: * **List all pu'
  method: GET
  path: v3/projects/{projectsId}/locations
  resource: projects.locations
- description: Gets information about a location.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}
  resource: projects.locations
- description: Returns a list of supported languages for translation.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/supportedLanguages
  resource: projects.locations
- description: Romanize input text written in non-Latin scripts to Latin text.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:romanizeText
  resource: projects.locations
- description: 'Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are '
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:batchTranslateText
  resource: projects.locations
- description: Translate text using Adaptive MT.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:adaptiveMtTranslate
  resource: projects.locations
- description: Detects the language of text within a request.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:detectLanguage
  pricing:
    dimensions:
    - direction: usage
      scale: 1000000
      tiers:
      - price_usd: 0
        up_to: 500000
      - price_usd: 20
      unit: characters
  resource: projects.locations
- description: Translates documents in synchronous mode.
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
- description: Refines the input translated text to improve the quality.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:refineText
  resource: projects.locations
- description: Translates input text and returns translated text.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}:translateText
  pricing:
    dimensions:
    - direction: usage
      scale: 1000000
      tiers:
      - price_usd: 0
        up_to: 500000
      - price_usd: 20
      unit: characters
  resource: projects.locations
- description: 'Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs '
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
- description: Import sentence pairs into translation Dataset.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:importData
  resource: projects.locations.datasets
- description: Exports dataset's data to the provided output location.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:exportData
  resource: projects.locations.datasets
- description: Deletes a dataset and all of its contents.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}
  resource: projects.locations.datasets
- description: Lists sentence pairs in the dataset.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/examples
  resource: projects.locations.datasets.examples
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/operations
  resource: projects.locations.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel
  resource: projects.locations.operations
- description: Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest st
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait
  resource: projects.locations.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries
  resource: projects.locations.glossaries
- description: Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}
  resource: projects.locations.glossaries
- description: Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries
  resource: projects.locations.glossaries
- description: Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.
  method: PATCH
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}
  resource: projects.locations.glossaries
- description: Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossa
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}
  resource: projects.locations.glossaries
- description: Gets a single glossary entry by the given id.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}
  resource: projects.locations.glossaries.glossaryEntries
- description: List the entries for the glossary.
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
- description: Deletes a single entry from the glossary
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}
  resource: projects.locations.glossaries.glossaryEntries
- description: Retrieve an Adaptive MT dataset by ID, including its language pair, example count, and configuration for adaptive translation
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}
  resource: projects.locations.adaptiveMtDatasets
- description: Lists all Adaptive MT datasets for which the caller has read permission.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets
  resource: projects.locations.adaptiveMtDatasets
- description: Create a new Adaptive MT dataset for a language pair, which learns from corrections to improve translation quality over time
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets
  resource: projects.locations.adaptiveMtDatasets
- description: Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.
  method: POST
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}:importAdaptiveMtFile
  resource: projects.locations.adaptiveMtDatasets
- description: Deletes an Adaptive MT dataset, including all its entries and associated metadata.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}
  resource: projects.locations.adaptiveMtDatasets
- description: Retrieve an Adaptive MT file by ID, returning its sentence pairs and metadata used for adaptive translation improvements
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtFiles
- description: Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtFiles
- description: Deletes an AdaptiveMtFile along with its sentences.
  method: DELETE
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtFiles
- description: Lists all AdaptiveMtSentences under a given file/dataset.
  method: GET
  path: v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}/adaptiveMtSentences
  resource: projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences
- description: Lists all AdaptiveMtSentences under a given file/dataset.
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
