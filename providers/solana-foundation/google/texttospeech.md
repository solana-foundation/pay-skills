---
category: ai_ml
description: Convert text to natural-sounding speech in 50+ languages and 380+ voices. Supports SSML markup, pitch/speed control, MP3/WAV/OGG output, and Neural2/Studio voice models for human-like quality.
endpoints:
- description: Returns a list of Voice supported for synthesis.
  method: GET
  path: v1/voices
  resource: voices
- description: Synthesizes long form text asynchronously.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:synthesizeLongAudio
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
  path: v1/operations/{operationsId}:cancel
  resource: operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/operations/{operationsId}
  resource: operations
- description: 'Synthesizes speech synchronously: receive results after all text input has been processed.'
  method: POST
  path: v1/text:synthesize
  resource: text
name: texttospeech
sandbox_service_url: https://sandbox-pay-google-texttospeech-123883807128.us-central1.run.app
service_url: https://production-pay-google-texttospeech-123883807128.us-central1.run.app
title: Cloud Text-to-Speech API
use_case: generating voiceovers, text-to-speech, accessibility, IVR systems, audiobook generation, pronunciation
version: v1
---
