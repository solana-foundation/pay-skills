---
name: risk
title: "Trench Lessons"
description: "Pre-trade risk flags for Solana meme-coin mints (curve-skip pool, unlocked LP, mayhem mode, bundle handoff, 0-100 risk score) plus a structured daily research feed, paid per call via x402."
use_case: "Use before a bot buys a Solana or pump.fun token to check curve-skip, unlocked LP, mayhem mode and bundle-handoff flags for a mint, or to pull recent evidence-graded meme-coin research."
category: finance
service_url: https://trench-lessons.vercel.app
version: v1
openapi:
  path: openapi.json
---

Trench Lessons publishes free Solana meme-coin research lessons and sells two small JSON endpoints to trading bots and agents. No account or API key: pay per call with x402 (USDC on Solana mainnet, PayAI facilitator).

Pricing:

- `GET /api/signals/risk/{mint}` (or `/api/signals/risk?mint=<mint>`): $0.01. Flags `curveSkipPool`, `unlockedLp`, `mayhemMode`, `bundleHandoff`, each with value (true/false/null), status (ok/unknown/n/a) and confidence, plus `riskScore` 0-100.
- `GET /api/lessons/feed?days=N` (N 1-30, default 7): $0.005. Recent research findings with topic, evidence grade, points and sources.

Free: `GET /api/signals/risk/sample`, `GET /api/lessons/latest`, `GET /api/pricing`.

A missing or invalid mint returns 400 before any payment challenge. Treat `unknown` as no data, not as safe. Educational research only, not financial advice. Payments are final; see https://trench-lessons.vercel.app/terms.

## Spend-aware usage

- Try `/api/signals/risk/sample` first to learn the response shape for free.
- One risk call per mint is enough; cache the result instead of re-checking within minutes.
- Request the smallest `days` window on the feed that answers the task.
