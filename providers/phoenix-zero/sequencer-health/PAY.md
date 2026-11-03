---
name: sequencer-health
title: "Phoenix Zero"
description: "Real-time L2 sequencer health oracle for Base, Arbitrum, Optimism, and ZKSync. Returns P99 RTT, revert ratio, and a boolean execution recommendation via x402 micropayments. Detects sequencer stalls and MEV pressure 27 seconds before on-chain impact."
use_case: "Use before any DeFi transaction execution to check if the sequencer is healthy. Returns safe=true/false with reason codes. Ideal for MEV bots, liquidation keepers, yield harvesters, and any agent that needs to know if submitting a transaction is safe right now."
category: data
service_url: https://rtt.phoenix-ai.work
openapi:
  path: openapi.json
---

Real-time sequencer telemetry for L2 chains. Built on 2-second `eth_blockNumber`
probes + `eth_getBlockReceipts` revert ratio measurement.

## Endpoints

- `GET /api/v1/safe` — Boolean safety check. Returns `{"safe": true/false, "reason": "ok|elevated_revert|high_revert|sequencer_stall", "base_p99_ms": N, "revert_ratio": N}`. Cheapest and fastest endpoint for pre-flight checks.
- `GET /api/v1/health` — Full snapshot across all chains: P99 RTT, stall status, revert ratio, gas pressure, blob base fee, recommendation.
- `GET /api/v1/chains/{chain}` — Single chain detail. Chain values: `base`, `arbitrum`, `optimism`, `zksync`.
- `GET /api/v1/price` — Current x402 price (surge 10x during MEV storms).

## Spend-aware usage

- Call `/api/v1/safe` for the cheapest pre-flight check ($0.0001 USDC). Only upgrade to `/api/v1/health` when you need cross-chain spread data.
- During MEV wars, price surges to $0.001 — check `/api/v1/price` first if cost matters.
- Data is updated every 2 seconds. Cache responses for up to 2 seconds to reduce spend.

## Proven signal

May 17 2026: P99 RTT spiked 52ms → 739ms at 23:29:43 UTC. Base revert ratio
peaked at 61.36% at 23:39:35 UTC — **27 seconds after the RTT warning**. Agents
using `/api/v1/safe` would have received `safe: false` before the revert storm.

## Payment

x402 USDC on Base Sepolia testnet (eip155:84532) — testnet USDC (`0x036CbD53842c5426634e7929541eC2318f3dCF7e`).
$0.0001 per request, surge pricing during sequencer stress events.

> **Mainnet migration:** Base mainnet (eip155:8453) with mainnet USDC (`0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`) will be activated once CDP mainnet credentials are configured. The endpoint, response schema, and pricing are identical — only the payment network changes.
