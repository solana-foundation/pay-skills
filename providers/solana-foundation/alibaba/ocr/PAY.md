---
category: ai_ml
description: "Extract text and structured content from images with Qwen OCR through Alibaba Cloud Model Studio's OpenAI-compatible chat completions API."
use_case: "Use for receipt extraction, invoice parsing, document OCR, table extraction, and multilingual image text recognition."
openapi:
  path: openapi.json
name: ocr
service_url: https://ocr.alibaba.gateway-402.com
title: Alibaba Cloud Model Studio OCR
version: v1

---

## Spend-aware usage

- Choose the endpoint that best matches the document or image type before paying; do not shotgun several recognizers against the same asset by default.
- Send the cleanest public image or document input you have and request only the structured output format the caller actually needs.
- Prefer one well-formed request with the right model options over several trial-and-error calls, especially when the body selects the model behavior.
