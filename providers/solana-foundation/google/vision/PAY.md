---
category: ai_ml
description: "Analyze images with Google Cloud Vision ML. Detect objects, faces, text/OCR, labels, landmarks, logos, safe-search signals, web entities, crop hints, dominant colors, and product-search reference images across image, PDF, and TIFF inputs."
openapi:
  path: openapi.json
name: vision
service_url: https://vision.google.gateway-402.com
title: Cloud Vision API
use_case: "Use for OCR, image labeling, object and face detection, content moderation, logo and landmark recognition, product search, PDF/TIFF text extraction, web entity lookup, crop hints, color analysis, and visual metadata enrichment."
version: v1

---

## Spend-aware usage

- Use `v1/images:annotate` for image OCR, labels, safe-search, faces, logos, or
  landmarks. Include only the requested feature types; do not request the full
  Vision feature set by default.
- Batch multiple images in one annotate call when the request size allows.
- Use file endpoints for PDF/TIFF OCR and async endpoints only for large batches
  or multi-page documents that require long-running processing.
- Do not fetch product-search catalog resources unless the task is explicitly
  about managing or searching a product catalog.
