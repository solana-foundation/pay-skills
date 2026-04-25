---
category: ai_ml
description: "Convert speech audio to text with Google Speech-to-Text. Supports 125+ languages, short and long audio, streaming-style workflows, speaker diarization, word timestamps, phrase hints, custom classes, profanity filtering, and punctuation."
use_case: "Use for audio transcription, meeting notes, podcast and video captions, call center analytics, voice command processing, accessibility, diarized conversations, timestamped transcripts, domain vocabulary hints, and long audio jobs."
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
- description: Create a phrase set of single-word or multi-word hints with boost values to improve recognition accuracy.
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
- description: List long-running Speech-to-Text operations matching an optional filter.
  method: GET
  path: v1/operations
  resource: operations
- description: Get the latest state of a long-running Speech-to-Text operation for polling transcription results.
  method: GET
  path: v1/operations/{operationsId}
  resource: operations
- description: Transcribe short audio synchronously and return recognition results after the audio is processed.
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
- description: Transcribe longer audio asynchronously and poll the operation for speech recognition results.
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
