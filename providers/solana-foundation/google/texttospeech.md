---
category: ai_ml
description: "Generate natural-sounding speech from text or SSML in 50+ languages and 380+ voices. Supports pitch, speed, effects profiles, MP3/WAV/OGG output, long-form synthesis, and Neural2/Studio voice models for production audio."
endpoints:
- description: List supported Text-to-Speech voices with language codes, gender, and voice model metadata.
  method: GET
  path: v1/voices
  resource: voices
- description: Synthesize long-form text asynchronously and poll the operation for generated audio output.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:synthesizeLongAudio
  resource: projects.locations
- description: List long-running Text-to-Speech operations in a project location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/operations
  resource: projects.locations.operations
- description: Get the latest state of a long-running Text-to-Speech operation for polling results.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Request cancellation of a long-running Text-to-Speech operation.
  method: POST
  path: v1/operations/{operationsId}:cancel
  resource: operations
- description: Delete a long-running Text-to-Speech operation record after results are no longer needed.
  method: DELETE
  path: v1/operations/{operationsId}
  resource: operations
- description: Synthesize speech synchronously from text or SSML and return generated audio in the requested format.
  method: POST
  path: v1/text:synthesize
  resource: text
name: texttospeech
sandbox_service_url: https://sandbox-pay-google-texttospeech-123883807128.us-central1.run.app
service_url: https://production-pay-google-texttospeech-123883807128.us-central1.run.app
title: Cloud Text-to-Speech API
use_case: "Use for voiceovers, IVR and phone prompts, accessibility audio, audiobook generation, language learning, pronunciation previews, product narration, support bots, podcast snippets, SSML-controlled speech, and long-form narration."
version: v1
---
