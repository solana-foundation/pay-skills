---
name: mint-risk-gate
title: "Mint Risk Gate"
description: "Fail-closed Solana mint pre-trade facts for autonomous trading agents. Reports authorities, holder concentration, LP lock, Jupiter route, and pump.fun progress. Unknown means unproven."
use_case: "Use before a Solana token swap to check mint/freeze authority, holder concentration, LP lock, Jupiter route, and pump.fun bonding without invented safety scores."
category: security
service_url: https://mint-risk-gate.mint-risk.workers.dev
openapi:
  path: openapi.json
---

Fail-closed Solana mint pre-trade risk gate. Autonomous trading and research agents pay $0.01 USDC on Solana (x402 v2 exact, PayAI facilitator) and get proven facts for one mint. Unknown means unproven. No invented safety scores.

Paid routes: `GET /v1/mint/{mint}`, `POST /v1/mint/{mint}`, and `POST /mcp` (`mint_risk` tool). Free: `/health`, `/.well-known/x402`, `/openapi.json`, `/llms.txt`.

payTo: `E5Ba7DeM6tVcNN1wN2qMbHuZ8nrJHyw1YdZJkiK7HvYz`.

## Spend-aware usage

- Call `/health` first. It is free and confirms liveness, payTo, and price.
- Pay once per mint you actually intend to trade. Cache the JSON for 5–15 seconds.
- Prefer `GET /v1/mint/{mint}` for a single lookup. Use `POST /mcp` only if you already speak MCP.
- Do not retry a 402 with a second payment until you have read `PAYMENT-REQUIRED` and `accepts[]`.
- Treat `unknown` as unproven, not safe. Fail closed.
