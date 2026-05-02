---
category: ai_ml
description: "Extract text and structured document data with Alibaba Cloud Document Parse Service, including document Mind Parsing, for OCR workflows."
use_case: "Use for document Mind Parsing, and related document OCR, structured extraction, and image-to-text parsing."
openapi:
  url: https://documentparseservice.alibaba.gateway-402.com/openapi.json
name: documentparseservice
sandbox_service_url: https://documentparseservice.alibaba-sandbox.gateway-402.com
service_url: https://documentparseservice.alibaba.gateway-402.com
title: Alibaba Cloud Document Parse Service
version: "2026-04-14"

---

## Spend-aware usage

- Choose the endpoint that best matches the document or image type before paying; do not shotgun several recognizers against the same asset by default.
- Send the cleanest public image or document input you have and request only the structured output format the caller actually needs.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
