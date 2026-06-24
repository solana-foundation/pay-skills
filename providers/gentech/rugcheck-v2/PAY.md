---
name: gentechlabs-rugcheck-v2
title: GenTech Labs — Rugcheck v2 API
category: security
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://rugcheck.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Rugcheck v2 API", "version": "1.0.0" }, "paths": { "/v1/score/{mint}": { "get": { "summary": "Score token", "responses": {"200": {"description": "Risk score"}} } } } }
  Analyze Solana token risk with 11-factor scoring. Detect honeypots, rugs, and scam tokens before trading.
  Solana token rug pull risk scoring via x402 USDC on Base.
  Analyzes mint authority, LP locks, holder distribution, and social signals to generate a risk score.
endpoints:
  - method: GET
    path: /v1/score/{mint_address}
    description: Get rug pull risk score for a Solana token mint address
    price_usd: 0.005
    request: { mint_address: "string" }
    response: { mint_address, risk_score, risks: [{ type, severity, detail }], metadata: {} }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Rugcheck v2 API

Solana token rug pull risk scoring. Analyzes mint authority, LP locks, holder distribution, and social signals.

## Endpoints

- `GET /v1/score/{mint_address}` — Risk score for a Solana token ($0.005)

## Risk Categories

- Mint authority status (revoked vs active)
- Liquidity pool lock status
- Holder concentration analysis
- Social signal verification
- Contract verification checks

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.
