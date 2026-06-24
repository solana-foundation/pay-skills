---
name: gentechlabs-defi-intelligence
title: GenTech Labs — DeFi Intelligence API
category: finance
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "DeFi Intelligence API", "version": "1.0.0" }, "paths": { "/v1/defi/{protocol}": { "get": { "summary": "Get protocol data", "responses": {"200": {"description": "Protocol intelligence"}} } } } }
  Get TVL, yield, chain breakdown, and risk assessment for DeFi protocols. Full protocol intelligence in one call.
  DeFi protocol data via DefiLlama — TVL, yield pools, token prices, DEX data, chain stats.
  Real-time on-chain intelligence for 500+ protocols across 50+ chains via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/defi/{protocol}
    description: Get TVL and stats for a specific DeFi protocol
    price_usd: 0.001
    request: { protocol: "aave-v3" }
    response: { protocol, tvl, chain_tvls: {}, change_1d, change_7d }
  - method: GET
    path: /v1/yield/opportunities
    description: Top yield opportunities ranked by APY and TVL
    price_usd: 0.002
    request: { chain: "ethereum", min_tvl: 1000000 }
    response: { pools: [{ protocol, pool, apy, tvl, chain }] }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — DeFi Intelligence API

DeFi protocol data powered by DefiLlama. TVL, yield pools, token prices, DEX data across 500+ protocols.

## Endpoints

- `GET /v1/defi/{protocol}` — Protocol TVL and stats ($0.001)
- `GET /v1/yield/opportunities` — Top yield opportunities ($0.002)

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.
