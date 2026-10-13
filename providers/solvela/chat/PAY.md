---
name: chat
title: "Solvela Gateway"
description: "OpenAI-compatible LLM chat completions over OpenAI, Anthropic, Google, xAI, and DeepSeek models, paid per request in Solana USDC via x402 — no API key or account. Includes a smart router, exact-match cache, and trustless on-chain escrow."
use_case: "Use for chat completions and LLM inference payable per request in Solana USDC with no account, API key, or prepaid balance — across OpenAI, Anthropic, Gemini, Grok, and DeepSeek. Use the auto profile to route by prompt complexity."
category: ai_ml
service_url: https://solvela-gateway.fly.dev
openapi:
  path: openapi.json
---

Solvela is a Solana-native AI agent payment gateway. It exposes an OpenAI-compatible chat completions API that AI agents pay for per request in USDC-SPL over the x402 protocol — no API key, no account, no prepaid credit balance. Authenticate and pay with a Solana wallet on a per-call basis.

A single gateway fronts five providers (OpenAI, Anthropic, Google, xAI, DeepSeek). A rule-based smart router classifies each prompt and selects a model by the chosen routing profile; an exact-match response cache returns identical prior answers without re-charging the upstream model; and a trustless on-chain escrow scheme is available for prepaid, refundable sessions.

## x402 payment flow

1. `POST /v1/chat/completions` with no `PAYMENT-SIGNATURE` header → HTTP 402 with the x402 challenge. The legacy challenge is in the JSON body; the canonical x402 v2 challenge is base64-encoded in the `PAYMENT-REQUIRED` response header. Both quote the USDC `exact` cost on Solana mainnet, including a 5% platform fee in `cost_breakdown`.
2. Sign the quoted `exact` payment with your Solana wallet and resubmit the request with the signed payload in the `PAYMENT-SIGNATURE` header.
3. The gateway verifies and broadcasts the payment, proxies to the selected model, and returns the completion (or an SSE stream when `stream` is true).

## Spend-aware usage

- Use the `auto` routing profile to let the router pick a model by prompt complexity; use `eco` to bias toward cheaper models, `premium` for frontier models, or pin an exact model ID for deterministic cost.
- Call `GET /v1/models` (free) to see available model IDs, capabilities, and per-token pricing before sending a paid request.
- Identical requests (same model, messages, temperature) hit the exact-match cache and avoid re-charging the upstream model — reuse prompts where possible.
- The 402 challenge quotes the exact USDC cost before you pay; read `cost_breakdown.total` to budget per call.
- `GET /health` is free and unauthenticated for liveness checks.
