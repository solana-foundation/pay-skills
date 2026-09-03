---
name: llm
title: "BridgeNode"
description: "Accountless OpenAI-compatible LLM chat completions (DeepSeek V4 Flash/Pro, Groq Llama 3.3 70B) with per-request x402 payments in Solana USDC - no API keys, no registration, no subscriptions; per-token pricing from $0.002, gasless."
use_case: "Use for pay-per-call LLM inference through the OpenAI request shape when an agent needs chat completions, model routing, or pricing transparency without API keys or accounts; per-token prices visible upfront."
category: ai_ml
service_url: https://bridgenode.cc
openapi:
  path: openapi.json
---

BridgeNode exposes an OpenAI-compatible chat completions endpoint without API
keys, accounts, or subscriptions. Send the familiar `model`/`mode` and
`messages` request to `POST /v1/chat/completions`; the server returns an x402
V2 challenge and accepts per-request payment in USDC on Solana mainnet
(gasless - the facilitator covers SOL fees).

Models: deepseek-v4-flash, deepseek-v4-pro, groq-llama-3.3-70b. Pricing is
dynamic (per-model token rates, floor $0.002/request).

## Spend-aware usage

- Choose the least expensive model that reliably handles the task (`eco` forces the cheapest).
- Set the smallest useful `max_tokens`; you pay for max output tokens upfront.
- Prefer `stream: true` for long generations.
- Avoid retries unless the previous request clearly failed before inference.
