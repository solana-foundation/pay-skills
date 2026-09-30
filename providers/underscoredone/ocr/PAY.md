---
name: ocr
title: "OCR"
description: "Send an image as a public URL or base64-encoded data and get back the plain text found inside it — receipts, screenshots, scanned documents, signs, and labels."
use_case: "Use to extract readable text from an image when no vision step is available or when a plain, deterministic text transcription of the picture is what you need."
category: media
service_url: https://ocr.underscoredone.com
openapi:
  path: openapi.json
---

Send an image as a public URL or base64-encoded data and get back the plain text found inside it — receipts, screenshots, scanned documents, signs, and labels. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Crop to the region of interest before sending to reduce failures and retries.
- Cache extracted text per image — the same image always yields the same text.
