---
name: nansen-api
title: "Nansen API"
description: "On-chain analytics API covering smart money flows, token metrics, wallet profiling, Nansen Score, perpetual markets, prediction markets, and token screening across multiple blockchains."
use_case: "Use for smart money tracking, wallet profiling and PnL analysis, token holder and flow analytics, on-chain signal discovery, Nansen Score token rankings, perpetual and prediction market data, and token screening."
category: finance
service_url: https://api.nansen.ai
openapi:
  path: openapi.json
---

Nansen on-chain analytics data through x402 and MPP payments.

Covers smart money intelligence, wallet profiling, token analytics
(Token God Mode), Nansen Score, perpetual markets, prediction markets,
and AI-powered research agents. Most endpoints are `POST`
and accept chain + address/token parameters.

Two payment flows are supported:

- **x402** (default): Unauthenticated requests receive a `402` with a
  `Payment-Required` header listing accepted rails and prices. The
  agent selects a rail, signs a payment, and replays the request with
  an `X-Payment` header.
- **MPP (Tempo)**: The agent sends an `Authorization: Payment …`
  header. On `402` the server returns a `WWW-Authenticate: Payment …`
  challenge; the agent completes the Tempo flow and retries.

This is a server-to-server API — CORS is restricted to first-party
origins, so browser-based agents should proxy requests through a
backend.

## Spend-aware usage

- Prefer `/api/v1/tgm/token-information` for a quick token overview
  (name, market cap, sector) before reaching for heavier endpoints like
  `/api/v1/tgm/indicators`.
- Use `/api/v1/profiler/address/pnl-summary` for a compact wallet PnL
  snapshot instead of `/api/v1/profiler/address/pnl` when detailed
  per-token breakdown is not needed.
- Batch analysis by starting with screeners (`/api/v1/token-screener`,
  `/api/v1/perp-screener`) to narrow candidates before calling per-token
  or per-address endpoints.
- Use `/api/v1/nansen-score/top-tokens` for a ranked list of tokens by
  Nansen Score before drilling into individual token analytics.
- Avoid `/api/v1/agent/expert` and `/api/v1/agent/fast` unless the task
  explicitly requires natural-language research synthesis — the
  structured endpoints are far cheaper and more predictable.
- Smart money endpoints provide aggregate signals — use
  `/api/v1/smart-money/netflow` for directional flow, and only add
  `/api/v1/smart-money/dex-trades` or `/api/v1/smart-money/holdings`
  when trade-level or position-level detail is needed.
