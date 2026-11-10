---
name: inference
title: "Lyber — Wallet-paid Uncensored AI Inference"
description: "OpenAI-compatible text inference with Lyber's uncensored DeepSeek V4.1 Flash 1017 model, paid in Solana USDC through x402 upto authorizations and billed from measured input, cached-input and output tokens."
use_case: "Use for wallet-paid text generation, reasoning and coding assistance with an uncensored DeepSeek model when an agent wants OpenAI-compatible requests and measured token billing without obtaining a Lyber API key."
category: ai_ml
service_url: https://api.lyber.ai/x402
openapi:
  path: openapi.json
---

Lyber's wallet-payment gateway accepts Solana-mainnet USDC and exposes JSON
Chat Completions. Call `GET /v1/models` for current availability, exact checkpoint
identity, output allowances and tariffs before requesting inference.

## Payment and delivery

Send a normal Chat Completions body to `POST /v1/chat/completions`.
The gateway returns an x402 v2 `upto` challenge bound to that request.
Your wallet authorizes a maximum deposit into the canonical Solana payment
channel. The gateway settles measured token usage and returns the remainder.
The operator sponsors transaction fees and channel rent.

The quote reserves the selected model's full input-context bound plus the
requested output budget. The authorized deposit can therefore exceed the
charge for a short prompt. Input, cached-input and output tariffs are applied
with integer arithmetic and one final micro-USDC rounding boundary.

## Spend-aware usage

- Inspect the model and quote before authorizing a wallet payment.
- Supply `max_tokens` appropriate to the task. Omitting it uses the model's
  published default, which can require a larger authorized deposit.
- For an interrupted or pending operation, reuse the identical request and
  payment authorization. HTTP 202 retains the original payment operation.
- Completed answers can be recovered with that authorization for 24 hours.
  A retry never starts another generation or creates another payment.
- Failed or unserved operations return the escrowed deposit through the
  payment-channel settlement. Unknown chain evidence remains pending.
- The initial gateway serves `stream: false` JSON completions. Check discovery
  and the committed OpenAPI contract before using additional features.
