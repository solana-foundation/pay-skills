---
category: ai_ml
description: "Analyze video content asynchronously with Google Video Intelligence. Detect labels, shots, explicit content, speech, on-screen text, logos, object tracks, scene changes, and searchable metadata for uploaded or cloud-hosted videos."
endpoints:
- description: Analyze videos asynchronously for labels, shots, explicit content, speech transcription, text, logos, and object tracks.
  method: POST
  path: v1/videos:annotate
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0
        up_to: 1000
      - price_usd: 0.1
      unit: minutes
  resource: videos
- description: List long-running Video Intelligence operations in a project location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/operations
  resource: projects.locations.operations
- description: Get the latest state of a long-running Video Intelligence operation for polling results.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Request cancellation of a long-running Video Intelligence operation.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel
  resource: projects.locations.operations
- description: Delete a long-running Video Intelligence operation record after results are no longer needed.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: projects.locations.operations
- description: Get the latest state of a routed Video Intelligence operation for polling results.
  method: GET
  path: v1/operations/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: operations.projects.locations.operations
- description: Request cancellation of a routed long-running Video Intelligence operation.
  method: POST
  path: v1/operations/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel
  resource: operations.projects.locations.operations
- description: Delete a routed long-running Video Intelligence operation record after results are no longer needed.
  method: DELETE
  path: v1/operations/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}
  resource: operations.projects.locations.operations
name: videointelligence
sandbox_service_url: https://sandbox-pay-google-videointelligence-123883807128.us-central1.run.app
service_url: https://production-pay-google-videointelligence-123883807128.us-central1.run.app
title: Cloud Video Intelligence API
use_case: "Use for video indexing, content moderation, scene and shot detection, object tracking, logo recognition, OCR on video frames, speech transcription, media search, compliance review, archive tagging, and extracting structured video metadata."
version: v1
---
