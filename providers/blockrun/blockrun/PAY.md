---
name: blockrun
title: "BlockRun - Stablecoin gated LLM inference"
description: "Accountless OpenAI-compatible chat completions across frontier models from OpenAI, Anthropic, Google, xAI, DeepSeek, and others, with per-request x402 payments in Solana USDC."
use_case: "Use for pay-per-call LLM chat completions through the familiar OpenAI request shape when an agent needs model choice without API keys, accounts, subscriptions, or prepaid credits."
category: ai_ml
service_url: https://sol.blockrun.ai
openapi:
  path: openapi.json
---

BlockRun exposes an OpenAI-compatible chat completions endpoint without API
keys, accounts, subscriptions, or prepaid balances. Send the familiar `model`
and `messages` request to `POST /api/v1/chat/completions`; the gateway returns an
x402 challenge and accepts per-request payment in USDC on Solana.

The endpoint supports frontier models from OpenAI, Anthropic, Google, xAI,
DeepSeek, and other model providers. Pricing is dynamic based on the selected
model and token usage; the committed OpenAPI document declares the current
range and supported model identifiers.

## Spend-aware usage

- Choose the least expensive model that can reliably handle the task.
- Set the smallest useful `max_tokens`; output length affects dynamic pricing.
- Reuse conversation context selectively instead of resending irrelevant
  history, since input tokens also contribute to cost.
- Avoid retries unless the previous request clearly failed before inference.
