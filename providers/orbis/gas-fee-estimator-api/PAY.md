---
name: gas-fee-estimator
title: "Gas Fee Estimator API"
description: "Calculate Ethereum gas fees for 10+ transaction types at slow, standard, fast, and instant speeds. Returns fees in gwei, ETH, and USD with multi-chain comparison notes."
use_case: "Use for estimating gas costs before submitting Ethereum transactions, comparing speeds, calculating fees for swaps, NFT mints, bridge transfers, and building gas-aware agent workflows."
category: analytics
service_url: https://orbisapi.com/proxy/gas-fee-estimator-api-a96f58
openapi:
  url: https://orbisapi.com/proxy/gas-fee-estimator-api-a96f58/openapi.json
---

## Overview

**Gas Fee Estimator API** is available on [Orbis](https://orbisapi.com) — an x402 pay-per-call API marketplace on Base and Solana.

No API key or signup required. Pay $0.001 USDC per call on Solana or Base.

## Quick start

```bash
curl https://orbisapi.com/proxy/gas-fee-estimator-api-a96f58
pay curl https://orbisapi.com/proxy/gas-fee-estimator-api-a96f58
```

## Networks

- **Solana** — `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` (USDC)
- **Base** — `eip155:8453` (USDC)
