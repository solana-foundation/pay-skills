---
name: gateway
title: "x402engine"
description: "Pay-per-call gateway with 108 agent APIs: 72 LLMs, image and video generation, audio, web search, code execution, crypto and wallet data, travel, and IPFS."
use_case: "Use for model inference, media generation, transcription, speech synthesis, web research, sandboxed code, market data, wallet analytics, travel search, and storage without API keys or subscriptions."
category: ai_ml
service_url: https://x402engine.app
openapi:
  path: openapi.json
---

x402engine exposes 108 HTTP APIs through x402 v2. Agents pay only for the
requested operation using USDC on Solana or Base, or USDm on MegaETH. No
account, API key, subscription, or prepaid balance is required.

The catalog includes 72 language models from OpenAI, Anthropic, Google, xAI,
DeepSeek, Qwen, MiniMax, GLM, Meta, Mistral, and other providers. It also
includes image and video generation, text-to-speech, transcription, web search
and scraping, sandboxed code execution, embeddings, crypto market data, wallet
analytics, transaction simulation, travel search, and IPFS storage.

## Spend-aware usage

- Call the free discovery document before selecting a paid route:
  `GET /.well-known/x402.json`.
- Choose the least expensive model or media tier that satisfies the task.
- Keep search limits, history windows, and generated media dimensions as small
  as the task permits.
- Reuse crypto identifiers and wallet metadata instead of repeating discovery
  calls.
- Use one targeted endpoint per task; avoid speculative paid calls across
  multiple models.
