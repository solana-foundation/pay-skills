---
category: ai_ml
description: Convert audio to text with Google's speech recognition. Supports 125+ languages, real-time streaming, speaker diarization, word-level timestamps, profanity filtering, and automatic punctuation.
use_case: "transcribing audio, speech-to-text, meeting transcription, voice command processing, podcast transcription, accessibility"
endpoints:
- description: Retrieve a speech recognition custom class by ID, returning its list of vocabulary items used to improve transcription accuracy
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}
  resource: projects.locations.customClasses
- description: List all custom classes for speech recognition in a location, returning vocabulary item groups that boost transcription accuracy
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses
  resource: projects.locations.customClasses
- description: Create a custom class with a set of vocabulary items to improve speech recognition accuracy for domain-specific terminology
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses
  resource: projects.locations.customClasses
- description: Update a custom class by modifying its vocabulary items to refine speech recognition for evolving domain-specific terms
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}
  resource: projects.locations.customClasses
- description: Delete a custom class permanently, removing its vocabulary items from use in future speech recognition requests
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}
  resource: projects.locations.customClasses
- description: List all phrase sets for speech recognition in a location, returning phrase hint groups that boost transcription of specific terms
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets
  resource: projects.locations.phraseSets
- description: Retrieve a specific phrase set by ID, returning its phrase hints and boost values used to improve speech recognition accuracy
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}
  resource: projects.locations.phraseSets
- description: Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseS
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets
  resource: projects.locations.phraseSets
- description: Update a phrase set by modifying its phrase hints and boost values to refine speech recognition for specific vocabulary
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}
  resource: projects.locations.phraseSets
- description: Delete a phrase set permanently, removing its phrase hints from use in future speech recognition transcription requests
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}
  resource: projects.locations.phraseSets
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/operations
  resource: operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/operations/{operationsId}
  resource: operations
- description: 'Performs synchronous speech recognition: receive results after all audio has been sent and processed.'
  method: POST
  path: v1/speech:recognize
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.016
        up_to: 500000
      - price_usd: 0.01
        up_to: 1000000
      - price_usd: 0.008
        up_to: 2000000
      - price_usd: 0.004
      unit: minutes
  resource: speech
- description: 'Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns eithe'
  method: POST
  path: v1/speech:longrunningrecognize
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.016
        up_to: 500000
      - price_usd: 0.01
        up_to: 1000000
      - price_usd: 0.008
        up_to: 2000000
      - price_usd: 0.004
      unit: minutes
  resource: speech
name: speech
sandbox_service_url: https://sandbox-pay-google-speech-123883807128.us-central1.run.app
service_url: https://production-pay-google-speech-123883807128.us-central1.run.app
title: Cloud Speech-to-Text API
version: v1
---
