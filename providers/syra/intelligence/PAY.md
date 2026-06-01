---
name: intelligence
title: "Syra"
description: "Crypto intelligence API for trading workflows with technical signals, market news, sentiment, event feeds, cross-CEX arbitrage snapshots, and X profile analysis, delivered through x402 pay-per-call access."
use_case: "Use for trading signal checks, sentiment and news validation, event-driven market context, arbitrage scanning across exchanges, X project credibility scoring, and AI-assisted market research before execution."
category: finance
service_url: https://api.syraa.fun
version: v1
openapi:
  path: openapi.json
---

Syra provides trader-focused crypto intelligence endpoints through x402 payment
gating. It combines structured market signals (RSI, MACD, trend context),
news and sentiment feeds, event tracking, cross-exchange arbitrage snapshots,
X project analysis, and AI-assisted research output for decision support.

Paid endpoints return HTTP `402` and accept Solana USDC settlement via x402.
Free preview and info routes are available for lightweight discovery.

## Spend-aware usage

- Start with preview or low-cost context endpoints (such as `/preview/*`,
  `/info`, and `/info/stats`) before triggering paid workflows.
- Use `/signal` or `/api/signal` to validate momentum and trend setup first,
  then call heavier AI routes like `/brain` only when synthesis is required.
- Query scoped symbols (`ticker`, `token`, `instId`) to avoid broad requests
  and unnecessary paid retries.
- Use `/arbitrage` with a small `limit` first, then increase only when the
  task needs deeper candidate coverage.
- Call `/x-analyzer` for focused project checks and avoid batch or repeated
  polling unless the user explicitly asks for monitoring.
