---
name: synap
title: "Synap by Linkrra — Open-Model AI Inference"
description: "OpenAI-compatible chat, coding, vision, and speech inference on dedicated GPUs. Agents pay per call in USDC on Solana or Base through x402, with no account or API key."
use_case: "Use for agent loops, code generation, multimodal image understanding, general chat completions, and text-to-speech when an agent needs pay-as-you-go open-model inference."
category: ai_ml
service_url: https://synap.linkrra.com
openapi:
  path: openapi.json
---

Synap exposes open-weight language, coding, and vision models through an
OpenAI-compatible API. Each paid endpoint returns a standard x402 challenge
with USDC payment options on Solana mainnet and Base; callers do not need an
account or API key.

## Spend-aware usage

- Use the model-specific chat endpoint when the workload already knows which
  model it needs; this avoids a discovery call and makes the quote predictable.
- Start with `gpt-oss-20b` for inexpensive general work and
  `qwen3-coder-30b` for code generation.
- Use `qwen3-vl-30b-a3b-instruct` only when the request includes images.
- Set `max_tokens` to the smallest useful cap because chat quotes include the
  requested output allowance.
- Use `/api/billing/x402/topup` only when repeated calls justify prepaid
  credits; one-off calls can pay the target inference endpoint directly.
- Use `/api/billing/x402/tts` for speech output and keep text concise because
  pricing is character based.
