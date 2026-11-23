---
name: tools
title: "Agent402"
description: "Pay-per-call web tools over x402: live web and news search, cited answers, JavaScript page rendering, article extraction, screenshots, audio transcription, image OCR and PDF to markdown, as JSON."
use_case: "Use for live web search, current news lookup, answering a question with citations, reading or rendering a URL, page screenshots, transcribing audio, OCR on images and converting PDFs to markdown."
category: search
service_url: https://agent402.tools
version: v1
openapi:
  path: openapi.json
---

Agent402 sells web, document and audio tools per call. Each listed route answers HTTP 402 with an
x402 challenge that includes USDC on Solana mainnet; no account or API key. Answers are JSON (screenshot
returns an image). The answer and transcribe routes are model-backed; the other seven run no model.
The full catalog (500+ tools) is listed at https://agent402.tools/.well-known/x402 and /openapi.json.

## Spend-aware usage

- Use `api/extract` for a known URL; use `api/render` only for JavaScript pages that extract returns empty.
- Use `api/search` to find URLs, then extract only the results you need.
- Use `api/answer` only when a cited synthesis is needed; search plus extract is cheaper.
- On x402, a failed call (4xx/5xx) is not charged. Some calls are paid before they run; a failed one can be retried free with the same payment, or is refunded.
