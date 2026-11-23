---
name: tools
title: "Agent402"
description: "Pay-per-call web tools over x402: live web and news search, cited answers, JavaScript page rendering, article extraction, screenshots, audio transcription, image OCR and PDF to markdown, as JSON."
use_case: "Use for live web search, current news lookup, answering a question with citations, reading or rendering a URL, page screenshots, transcribing audio, OCR on images and converting PDFs to markdown."
category: search
service_url: https://agent402.tools
version: v1
endpoints:
  - method: GET
    path: api/search
    resource: search
    description: "Search the live web for a query, returning ranked results with title, URL, snippet and age as JSON"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.01}]}]}
  - method: GET
    path: api/search-news
    resource: search
    description: "Search recent news articles for a query, returning headlines, sources, URLs and publish times"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.01}]}]}
  - method: GET
    path: api/answer
    resource: answer
    description: "Answer a question from live web results with inline citations; model-backed synthesis over search"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.08}]}]}
  - method: POST
    path: api/render
    resource: web
    description: "Read a JavaScript-heavy page as clean markdown, rendering it in a headless browser when the page needs it"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.003}]}]}
  - method: POST
    path: api/extract
    resource: web
    description: "Extract the main article from a public URL as clean markdown with title, byline and word count"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.001}]}]}
  - method: GET
    path: api/screenshot
    resource: web
    description: "Capture a screenshot of a public web page and return it as an image"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.002}]}]}
  - method: POST
    path: api/transcribe
    resource: audio
    description: "Transcribe an audio file from a URL to text, up to 4 minutes; speaker labels and word timestamps on request; model-backed speech recognition"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.03}]}]}
  - method: POST
    path: api/image-ocr
    resource: documents
    description: "Read text from an image by URL or base64 with OCR, returning the text, overall confidence and per-line bounding boxes"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.006}]}]}
  - method: POST
    path: api/pdf-to-markdown
    resource: documents
    description: "Convert a PDF from a URL into markdown text with page structure kept"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.003}]}]}
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
