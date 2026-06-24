---
name: gentechlabs-smart-wallet-deploy
title: GenTech Labs — Smart Wallet Deploy API
category: wallets
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Smart Wallet Deploy API", "version": "1.0.0" }, "paths": { "/v1/wallet/deploy": { "post": { "summary": "Deploy wallet", "responses": {"200": {"description": "Wallet address"}} } } } }
  Deploy Safe smart wallets via Zyfai SDK. Yield optimization, session keys, auto-rebalance.
  Deploy ERC-4337 smart contract wallets for AI agents.
  Factory-based deployment with configurable spending limits and recovery via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/wallet/deploy
    description: Deploy a new smart wallet for an agent
    price_usd: 0.05
    request: { owner: "0x...", spending_limit: "1000000000000000000" }
    response: { wallet_address, owner, spending_limit, deployed_at }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Smart Wallet Deploy API

Deploy ERC-4337 smart contract wallets for AI agents. Factory-based with spending limits.

## Endpoints

- `GET /v1/wallet/deploy` — Deploy a new smart wallet ($0.05)

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.
