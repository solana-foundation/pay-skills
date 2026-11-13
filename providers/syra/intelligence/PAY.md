---
name: intelligence
title: "Syra"
description: "Crypto intelligence API for trading signals, indicators, news, sentiment, events, arbitrage, pump.fun scouting, Solana insights, Jupiter quotes, RugCheck reports, and X profile analysis via x402 pay-per-call."
use_case: "Use for trading signals, technical indicators, memecoin due diligence, sentiment and news checks, arbitrage scans, Solana network insights, swap quotes, token risk reports, and AI-assisted market research before execution."
category: finance
service_url: https://api.syraa.fun
version: v1
openapi:
  path: openapi.json
---

Syra provides trader-focused crypto intelligence endpoints through x402 payment
gating. It covers technical signals and multi-indicator analysis, news and
sentiment, event calendars, cross-CEX arbitrage, pump.fun scouting and mint
due diligence, Solana network/market insights, Jupiter quotes, RugCheck risk
reports, equity/SPCX spreads, X project scoring, and AI-assisted research.

Paid endpoints return HTTP `402` and accept Solana USDC settlement via x402.
Free discovery routes such as `/info` and `/prediction-game/health` stay ungated.

## Spend-aware usage

- Start with low-cost context (`/info`, `/info/stats`, `/insights/*`) before
  heavier paid workflows.
- Use `/signal` or `/indicator` to validate momentum and setup first, then call
  `/brain` only when synthesis is required.
- Prefer scoped inputs (`ticker`, `symbol`, `mint`, `instId`) to avoid broad
  paid retries.
- Use `/arbitrage` and `/pumpfun/*` with small `limit` values first, then widen
  only when the task needs deeper coverage.
- Call `/x-analyzer`, `/rugcheck/report`, and `/pumpfun/analyzer` for focused
  project checks; avoid batch polling unless the user asks for monitoring.
