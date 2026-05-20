---
category: ai_ml
description: "Extract text and structured document data with Alibaba Cloud OCR (VIAPI), including bank Card Recognition, business License Recognition, and general Recognition, for OCR workflows."
use_case: "Use for bank Card Recognition, business License Recognition, general Recognition, and related document OCR, structured extraction, and image-to-text parsing."
openapi:
  path: openapi.json
name: viapi-ocr
service_url: https://viapi-ocr.alibaba.gateway-402.com
title: Alibaba Cloud OCR (VIAPI)
version: "2019-12-30"

---

## Spend-aware usage

- Choose the endpoint that best matches the document or image type before paying; do not shotgun several recognizers against the same asset by default.
- Send the cleanest public image or document input you have and request only the structured output format the caller actually needs.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
