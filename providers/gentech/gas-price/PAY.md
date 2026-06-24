---
name: gentechlabs-gas-price
title: GenTech Labs — Gas Price API
category: finance
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://gas.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Gas Price API", "version": "1.0.0" }, "paths": { "/v1/gas/{chain}": { "get": { "summary": "Get gas price", "responses": {"200": {"description": "Gas data"}} } } } }
  Get current gas prices across 20+ chains. Slow/standard/fast tiers with recommendations.
  Real-time gas price estimates for Ethereum, Base, Arbitrum, Optimism, Polygon, BSC, and Avalanche.
  Returns slow/standard/fast estimates with confidence scores via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/gas/:chain
    description: Current gas prices for a chain (ethereum, base, arbitrum, optimism, polygon, bsc, avalanche)
    price_usd: 0.005
    request: { chain: "string" }
    response: { chain, slow, standard, fast, base_fee, priority_fee }
  - method: GET
    path: /v1/gas/history/:chain
    description: Gas price history for a chain (24h)
    price_usd: 0.01
    request: { chain: "string" }
    response: { chain, history: [{ timestamp, slow, standard, fast }] }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Gas Price API

Real-time and historical gas prices across 7 EVM chains.

## Endpoints

- `GET /v1/gas/:chain` — Current gas prices ($0.005)
- `GET /v1/gas/history/:chain` — 24h gas history ($0.01)

## Supported Chains

ethereum, base, arbitrum, optimism, polygon, bsc, avalanche

## Payment

x402 USDC on Base.
