---
name: api
title: "Elfa AI"
description: "Auto conditional alerts and Iris market intelligence: describe a price or social condition and get a webhook when it fires, over trending assets, mentions, account quality, news and narratives."
use_case: "Use for Auto conditional alerts: describe a price or social condition on crypto markets and get notified or execute when it fires. Also Iris market intelligence — trending assets, contract-address discovery, mention search, account quality, narratives."
category: finance
service_url: https://api.elfa.ai
version: v2
openapi:
  path: openapi.json
---

Elfa is real-time data infrastructure for financial AI, powered by our
intelligence stack **Iris**. Iris synthesises signals across social, on-chain and
off-chain market data, then traces their second and third-order effects, so
agents act on greater context.

These endpoints serve the same signals our own finance agent runs on,
pay-per-call over x402 — no API key and no account.

## Auto — the condition engine

Describe what to watch and Elfa fires a webhook when it happens. Register an EQL
query against price or social conditions; Elfa evaluates it continuously and
calls you back. Identity is `SHA256(x-elfa-agent-secret)` — invent a secret once
and reuse it to reach your own queries.

Creating a query is the only paid step. Validating, polling, cancelling, listing
LLM sessions and the SSE notification stream are all free.

```
POST /x402/v2/auto/queries/validate   free, returns the exact cost first
POST /x402/v2/auto/queries            create and activate
GET  /x402/v2/auto/queries/{id}/stream  live notifications over SSE
```

## Iris market intelligence

Point-in-time reads of what the market is saying and doing: trending assets and
contract addresses surfacing on X and Telegram, smart-account stats, keyword
mention feeds, token news, event summaries and narratives — plus an LLM chat
endpoint that interprets them.

## Payment

USDC on Solana mainnet, Base, Arbitrum, Polygon and Avalanche. Every rail is
quoted in the same 402, so pay on whichever you already hold. Solana payments are
gasless — the facilitator acts as fee payer — and settle with the `exact` scheme,
so the price you are quoted is the price you pay.

`GET https://api.elfa.ai/.well-known/x402` lists every payable resource.

## Spend-aware usage

- Call `POST /x402/v2/auto/queries/validate` (free) before creating a query; it
  returns the exact cost of the query you are about to register.
- Poll with `POST /x402/v2/auto/queries/{queryId}` (free) rather than
  re-creating a query.
- Start with `/x402/v2/aggregations/trending-tokens` ($0.009) before paying for
  `/x402/v2/data/event-summary` ($0.045).
- Cap `pageSize` / `limit` on mention feeds; the defaults return more than most
  tasks need.
- `/x402/v2/chat` costs $1 at `speed: fast` and $2 at `speed: expert` — prefer
  the structured endpoints when a plain lookup answers the question.
