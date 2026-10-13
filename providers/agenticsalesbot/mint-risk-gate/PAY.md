---
name: mint-risk-gate
title: "Mint Risk Gate"
description: "Fail-closed Solana mint pre-trade facts and tx preflight for autonomous trading agents. Mint authorities, LP, Jupiter route, plus simulate/CU/priority-fee pack. Unknown means unproven."
use_case: "Use before a Solana swap: score a mint, then simulate the buy for fail taxonomy, compute units, and a suggested priority fee. No invented safety scores."
category: security
service_url: https://mint-risk-gate.mint-risk.workers.dev
openapi:
  path: openapi.json
---

Fail-closed Solana mint pre-trade risk gate plus tx preflight, same host. Autonomous trading and research agents pay USDC on Solana (x402 v2 exact, PayAI facilitator). Unknown means unproven. No invented safety scores.

Paid routes:
- `GET /v1/mint/{mint}` and `POST /v1/mint/{mint}` — $0.01 USDC. Fail-closed mint facts.
- `POST /mcp` (`mint_risk` tool) — same $0.01 SKU.
- `POST /v1/preflight` — $0.005 USDC. Simulate a serialized tx or instruction list. Returns fail taxonomy, compute units, and a suggested priority fee. Does not send the transaction.

Free: `/health`, `GET /v1/fees/p50`, `/.well-known/x402`, `/openapi.json`, `/llms.txt`.

payTo: `E5Ba7DeM6tVcNN1wN2qMbHuZ8nrJHyw1YdZJkiK7HvYz`.

## Spend-aware usage

- Call `/health` first. It is free and confirms liveness, payTo, and both SKUs.
- Use free `GET /v1/fees/p50` when you only need a priority-fee sample.
- Pay mint-risk once per mint you actually intend to trade. Cache the JSON for 5–15 seconds.
- Pay preflight once per transaction you actually intend to send. Do not use it as a raw RPC.
- Prefer `GET /v1/mint/{mint}` then `POST /v1/preflight` for score-then-simulate. Use `POST /mcp` only if you already speak MCP.
- Do not retry a 402 with a second payment until you have read `PAYMENT-REQUIRED` and `accepts[]`.
- Treat `unknown` as unproven, not safe. Fail closed.
