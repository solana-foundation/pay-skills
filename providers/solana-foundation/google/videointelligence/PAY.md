---
category: ai_ml
description: "Analyze video content asynchronously with Google Video Intelligence. Detect labels, shots, explicit content, speech, on-screen text, logos, object tracks, scene changes, and searchable metadata for uploaded or cloud-hosted videos."
openapi:
  url: https://videointelligence.google.gateway-402.com/openapi.json
name: videointelligence
service_url: https://videointelligence.google.gateway-402.com
title: Cloud Video Intelligence API
use_case: "Use for video indexing, content moderation, scene and shot detection, object tracking, logo recognition, OCR on video frames, speech transcription, media search, compliance review, archive tagging, and extracting structured video metadata."
version: v1

---

## Spend-aware usage

- Use video annotation only for the specific features requested, such as labels,
  shots, OCR, speech transcription, explicit content, or object tracking. Do not
  request every feature by default.
- Ask before analyzing long videos or multiple files, because cost scales with
  media duration and selected features.
- Keep and poll the returned operation name. Do not submit the same video again
  while the operation is pending.
