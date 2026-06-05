---
name: ai
title: "Venice.ai — Private AI Inference"
description: "OpenAI-compatible inference API for text, image, audio, and video generation with x402 wallet access. No API key required — authenticate with an EVM or Solana wallet via SIWX and pay with USDC credits."
use_case: "Use for chat completions, image generation and editing, audio synthesis and transcription, video generation, embeddings, web scraping, text parsing, semantic search, and blockchain RPC proxying — all payable with USDC via x402 without an account."
category: ai_ml
service_url: https://api.venice.ai/api/v1
openapi:
  path: openapi.json
---

Venice.ai is a privacy-focused AI inference platform with an OpenAI-compatible API, exposed via x402 wallet-based access. No API key or account required — top up a USDC credit balance using an EVM or Solana wallet and call any inference endpoint.

Supports text, image, audio, and video generation across a wide range of open-source and proprietary models.

## x402 Wallet Flow

1. `POST /x402/top-up` without headers — returns `accepts` array with Base and Solana USDC payment options
2. Sign the chosen payment option using the x402 SDK and re-submit with `X-402-Payment` header
3. Call any inference endpoint with `X-Sign-In-With-X` header (base64-encoded signed SIWX payload)
4. Credits are deducted per request; check balance via `GET /x402/balance/{walletAddress}` or the `X-Balance-Remaining` response header

## Spend-aware usage

- Use `/chat/completions` for text generation — OpenAI-compatible, supports multimodal inputs (text, images, audio, video) on capable models.
- Use `/image/generate` or `/images/generations` for image generation. Use `/image/upscale`, `/image/edit`, `/image/background-remove` for image manipulation.
- Use `/audio/speech` for text-to-speech and `/audio/transcriptions` for speech-to-text.
- Use `/video/complete` for synchronous video generation; use `/video/queue` + `/video/retrieve` for async jobs.
- Use `/embeddings` for vector embeddings.
- Use `/models` to discover available models and their capabilities before making generation calls.
- Use `/x402/balance/{walletAddress}` to check remaining credits before large generation jobs.
- Batch image/audio/video work when possible — each request consumes credits based on compute cost.
- Use `/augment/scrape` to extract structured content from a URL — useful for agents that need to read web pages without a separate scraping provider.
- Use `/augment/search` for semantic web search — returns ranked results with snippets, payable per query with no search API key required.
- Use `/augment/text-parser` to extract structured data from unstructured text — useful for parsing documents, receipts, or free-form input into typed fields.
