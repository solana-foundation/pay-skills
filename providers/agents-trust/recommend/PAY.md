---
name: recommend
title: "Agents Trust"
description: "Ranked recommendations of paid x402 APIs for a task described in plain words: endpoint URL, provider price, payment networks, request template, liveness, delivery evidence and risk flags, plus evidence lookups for one known endpoint URL."
use_case: "Use when an agent needs a paid API for a task and does not know which one to call: API discovery, choosing between x402 endpoints, comparing provider prices, or checking an endpoint's liveness and delivery history before paying it."
category: search
service_url: https://api.agents-trust.com
version: "2.0.0"
openapi:
  path: openapi.json
---

Agents Trust recommends which paid x402 API to call for a task. Send the task
in plain words as `need` to `GET /recommend`; the answer ranks candidate
endpoints with their URL, the provider's price and payment networks, a ready
request template, and the evidence behind each pick: liveness, delivery
history from paid tests, and risk flags.

`GET /inspect?url=…` returns the stored evidence for one endpoint you already
know. Neither route calls or pays the provider: you call the chosen provider
yourself, with your own wallet, at its own price.

Pricing: Recommend costs 0.01 USDC per query. Inspect costs 1% of the target
endpoint's lowest quoted price, minimum 0.001 USDC. Both accept USDC on Solana
mainnet, Base or Algorand through x402. `GET /receipt` (settlement status of a
paid answer) and `GET /health` are free. Three demo needs are free: exactly
`weather`, `crypto prices` or `web search`.

## Spend-aware usage

- Describe the task itself (`current weather in Paris`), not a product name.
- Use `limit` and `view=compact` to keep answers small; narrow with
  `max_price_usd` or `chain` (CAIP-2, e.g. the Solana mainnet id).
- An empty result costs nothing. Call Recommend once per need and reuse the
  picks instead of re-asking.
- Replay the exact quoted query string when paying; the payment binds to it.
- Never pay twice: check `GET /receipt?payment_attempt_id=…` for a pending
  settlement instead of signing another payment.
