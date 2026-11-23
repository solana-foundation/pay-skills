---
name: tools
title: "Agent402"
description: "Pay-per-call web tools over x402: live web and news search, cited answers, JavaScript page rendering, article extraction, screenshots, audio transcription, image OCR, PDF to markdown and Solana token risk checks, as JSON."
use_case: "Use for live web search, current news lookup, answering a question with citations, reading or rendering a URL, page screenshots, transcribing audio, OCR on images, converting PDFs to markdown, and checking a Solana token mint for risk flags."
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
    description: "Render a JavaScript page in a headless browser and return its rendered HTML and text"
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
    description: "Transcribe an audio file from a URL to text with timestamps; model-backed speech recognition"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.03}]}]}
  - method: POST
    path: api/image-ocr
    resource: documents
    description: "Read printed text from an image by URL with OCR, returning the text and word confidence"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.006}]}]}
  - method: POST
    path: api/pdf-to-markdown
    resource: documents
    description: "Convert a PDF from a URL into markdown text with page structure kept"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.003}]}]}
  - method: POST
    path: api/sol-token-safety
    resource: solana
    description: "Check a Solana token mint for risk flags such as mint and freeze authority, holder concentration and liquidity"
    pricing: {dimensions: [{direction: usage, unit: requests, scale: 1, tiers: [{price_usd: 0.005}]}]}
---

Agent402 sells web, document, audio and Solana data tools per call. Every route answers HTTP 402 with an
x402 challenge that includes USDC on Solana mainnet; no account or API key. Answers are JSON (screenshot
returns an image). The answer and transcribe routes are model-backed; the others are deterministic code.
The full catalog (500+ tools) is listed at https://agent402.tools/.well-known/x402 and /openapi.json.

## Spend-aware usage

- Use `api/extract` for a known URL; use `api/render` only for JavaScript pages that extract returns empty.
- Use `api/search` to find URLs, then extract only the results you need.
- Use `api/answer` only when a cited synthesis is needed; search plus extract is cheaper.
- A failed call (4xx/5xx) is not charged.
