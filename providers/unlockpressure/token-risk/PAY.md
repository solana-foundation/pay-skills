---
name: token-risk
title: "UnlockPressure Token Risk"
description: "Source-backed token unlock sell-pressure data with upcoming events, event-level risk scores, 90-day token summaries, and historical unlock backtests."
use_case: "Use for 90-day token unlock pressure checks, liquidity-risk triage, agent portfolio rebalance reviews, and source-backed crypto market-data due diligence."
category: data
service_url: https://unlockpressure.pricepilot402-arya.workers.dev
openapi:
  path: openapi.json
---

UnlockPressure exposes Phase 1 x402-paid token unlock intelligence for agents that need source-backed sell-pressure context before trading, portfolio review, or market-monitoring decisions.

## Spend-aware usage

- Start with `GET /v1/unlocks/upcoming?days=90&minRisk=70` as the $0.02 bodyless wallet-paid ping when testing x402 routing.
- Use `POST /v1/token/risk-summary` for a single-symbol 90-day forward unlock-pressure summary after the ping returns material events.
- Reuse unlock identifiers from public token/unlock pages when calling event-level risk or backtest endpoints.
- Keep windows narrow unless the task truly needs a longer unlock horizon.
