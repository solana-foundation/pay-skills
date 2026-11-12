---
name: inference
title: "Dagon Inference"
description: "OpenAI- and Anthropic-compatible LLM inference for abliterated (refusal-removed) and standard open-weight models routed across providers: chat completions, Responses and Messages APIs, model price list, signed receipts."
use_case: "Use when an agent needs pay-per-request LLM chat or text generation without an account or KYC, uncensored or abliterated models, OpenAI or Anthropic SDK compatibility, or a verifiable signed receipt per request."
category: ai_ml
service_url: https://inference.dagon.so
openapi:
  path: openapi.json
---

Dagon Inference is an OpenAI- and Anthropic-compatible gateway for abliterated
(refusal-removed) and standard open-weight models. Each request goes to the
cheapest healthy provider serving the requested model id and is charged that
provider's token rates plus 10%, with an Ed25519-signed receipt.

`POST /v1/chat/completions`, `POST /v1/responses` and `POST /v1/messages` sent
without an API key answer `402 Payment Required` with an x402 challenge: USDC on
Solana mainnet, `exact` scheme. The gateway is the fee payer, so the agent's
wallet needs USDC only. The payment prepays the request's maximum cost (prompt
estimate plus output cap; at least $0.50, at most $1,000); the request is
charged at token prices and the rest stays as credit on a prepaid key returned
once in the `x-dagon-key` response header. That credit is not refunded: reuse
the key as `Authorization: Bearer <key>` for later requests instead of paying
again.

`GET /v1/models` is free and lists every model with its per-million-token
prices (`pricing_per_mtok_micros`), context length and endpoints. Prices range
from about $0.01 to $5.50 per 1M input tokens and $0.09 to $16.50 per 1M
output tokens, depending on the model.

Docs: https://inference.dagon.so/docs/x402 and https://inference.dagon.so/llms.txt.

## Spend-aware usage

- Call `GET /v1/models` first and pick the cheapest model that fits the task.
- Set the smallest useful `max_tokens`; it caps the output part of the
  prepaid maximum cost.
- Pay with x402 once, then keep the key from `x-dagon-key` and send it as
  `Authorization: Bearer` on later calls so the leftover credit is used.
- Check a response's receipt with `GET /v1/receipts/{id}` (with the key) or
  `POST /v1/receipts/verify`, using the id from the `x-gateway-receipt-id`
  header.
