---
name: bridge-watch
title: "Bridge Watch"
description: "Base mainnet address-intelligence API: wallet labels, transaction explanations, funder sybil clustering, CCTP bridge tracking, compliance alerts, and SEC Form 8-K filings served over x402 pay-per-call HTTP endpoints."
use_case: "Use when an agent must label an EVM wallet before sending funds, explain a transaction hash, detect sybil-funded clusters behind an airdrop claim, monitor a CCTP bridge transfer, or screen SEC 8-K filings for a ticker."
category: finance
service_url: https://agentsapi.top
version: 0.3.1
openapi:
  path: openapi.json
---

Bridge Watch serves Base mainnet address intelligence over plain HTTP with x402
pay-per-call gating. There are no accounts and no API keys: an unauthenticated
request returns HTTP 402 with payment requirements, and repeating it with a valid
payment signature returns the data.

Capabilities, all reachable from the committed OpenAPI sidecar:

- `GET/POST /v1/label/{address}` — labels and risk signals for an EVM address.
- `GET/POST /v1/explain/{txHash}` — human-readable decoding of a Base transaction.
- `GET/POST /v1/cluster/{funder}` — sybil clustering of wallets funded by one source.
- `GET/POST /v1/track/cctp/{txHash}` — CCTP bridge transfer status.
- `GET/POST /v1/alerts` and `/v1/alerts/stats`, `POST /v1/alerts/subscribe` — monitored-address alerting.
- `GET /api/filings/8k` and `GET /api/filings/today` — SEC Form 8-K corporate filings.

## Payment compatibility (read before merging)

The 402 challenge advertises x402 v2 `exact` payments in **USDC on Base mainnet
(chain 8453)** only. `pay` today authorizes Solana stablecoin transfers, so a
Base-only provider cannot yet be settled by the CLI even though the catalog check
reports it:

- every paid endpoint returns 402 unauthenticated, so the probe classifies the route;
- the expected registry verdict is therefore *non-Solana* (a warning under PR CI's
  non-strict invocation), not a hard failure.

If the registry only admits Solana-settleable providers, this entry can be closed
without objection and re-opened once the API also accepts an SPL USDC leg; the
resource server deliberately advertises a single network rather than claiming
capabilities it cannot settle.

## Spend-aware usage

- Reach for `GET` before `POST`; both are documented, but `GET` lets a client retry cheaply.
- Label one address at a time; request clustering only when a shared funder is suspected.
- `GET /v1/label` without a path parameter lists the labelled-address universe cheaply before paying for detail.
- The MCP endpoint `https://agentsapi.top/mcp` exposes seven tools with one free call per tool
  per IP per day, so an agent can confirm coverage before spending.
