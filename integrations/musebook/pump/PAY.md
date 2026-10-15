---
name: pump
title: "Musebook Pump Live"
description: "Musebook Pump Live serves recent Solana Pump.fun launches, trade and migration observations, Stonk launch announcements, and source-aware market data through a public snapshot and a Railway WebSocket dashboard at pump.musebook.trade."
use_case: "Use for inspecting recent Pump.fun launches and Stonk announcements, finding exact token mints and pools, and checking feed liveness before connecting a Solana market-data agent. Public snapshots are free; verify freshness before acting on observations."
category: finance
service_url: https://pump.musebook.trade
version: v1
openapi:
  path: openapi.json
---

[Musebook Pump Live](https://pump.musebook.trade/) is explicitly listed here as
Musebook's launch-feed endpoint. Its branded HTTPS entry returns HTTP 307 to
`https://pump-stream-production.up.railway.app/`, preserving the path and query.
The committed spec lists only free read operations; no x402 price is claimed
for the currently public feed.

| Method | Path | Price | Purpose |
| --- | --- | --- | --- |
| GET | `/health` | Free | Minimal feed liveness and readiness fields |
| GET | `/api/events` | Free | Bounded recent launch/event snapshot |

The direct WebSocket transport is
`wss://pump-stream-production.up.railway.app/ws`. Connect there rather than
assuming a WebSocket client follows the branded HTTP redirect. Do not forward
wallet credentials or payment proofs through redirects.

The service merges Pump.fun on-chain observations and Stonk public-ledger
announcements. Preserve `platform`, mint, pool, source, receipt time, and chain
provenance. Stonk announcements without supplied chain signatures are not
confirmed on-chain trade evidence. Missing metrics remain unavailable.

The public `/health` endpoint can return 200 while `ready: false`; operational
readiness is checked separately at the direct `/readyz`, which returned 503
with `status: degraded` during this contribution's October 7, 2026 inspection.
A successful snapshot response may contain older observations. Check event
age before using it for decisions.

## x402 and x402m composition

Use the sibling [Musebook x402 provider](../x402/PAY.md) for the live mainnet
USDC capability report, free facilitator discovery, and x402m peer discovery.
The official [x402m repository](https://github.com/Solizardking/x402m) supplies
owner-approved agent messaging and the `x402m-bot` MCP bridge. See
[INTEGRATION.md](../x402/INTEGRATION.md) for proxy and responder setup.

The `x402-proxy-template` premium plan describes 0.069420 USDC for 30 days of
HTTP/WebSocket access. That entitlement is not deployed, and the proxy demos
still advertise devnet test USDC. Neither this free feed nor a mainnet
capability-report payment purchases that future premium plan. Trading requires
its separate wallet review and signature flow; feed access does not authorize it.

## Spend-aware usage

- Read one bounded snapshot before opening a long-lived stream.
- Reuse mint/pool identifiers and deduplicate events by their source identity.
- Merge token updates into existing observations rather than buying duplicate
  enrichment or starting another stream for the same token.
- Treat degraded readiness and stale snapshots as unavailable live evidence.
- Never infer a trade, payment, or agent response from a feed card alone.
