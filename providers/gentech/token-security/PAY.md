---
name: gentechlabs-token-security
title: GenTech Labs — Token Security API
category: security
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://security.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Token Security API", "version": "1.0.0" }, "paths": { "/v1/score/{token}": { "get": { "summary": "Score token", "responses": {"200": {"description": "Risk score"}} } } } }
  11-factor risk scoring for tokens. Honeypot detection, owner privileges, contract verification, LP analysis.
  On-chain token security analysis for Solana and EVM chains. Detects rug pull risks,
  honeypots, mint authority risks, ownership renunciation, liquidity locks, and holder concentration.
endpoints:
  - method: GET
    path: /v1/token/solana/:address
    description: Full security audit for a Solana SPL token
    price_usd: 0.01
    request: { address: "string" }
    response: { address, risk_score, risks: [{ type, severity, detail }], authority_status }
  - method: GET
    path: /v1/token/evm/:chain/:address
    description: Full security audit for an EVM ERC-20 token
    price_usd: 0.01
    request: { chain: "ethereum" | "base" | "arbitrum", address: "string" }
    response: { address, risk_score, risks, ownership, liquidity, holders }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Token Security API

On-chain security analysis for SPL and ERC-20 tokens. Honeypot detection, mint authority, ownership, liquidity locks.

## Endpoints

- `GET /v1/token/solana/:address` — Solana SPL token audit ($0.01)
- `GET /v1/token/evm/:chain/:address` — EVM ERC-20 token audit ($0.01)

## Risk Categories

- Rug pull indicators (liquidity lock, ownership renunciation)
- Honeypot detection (cannot sell, high tax)
- Mint authority (unlimited supply risk)
- Holder concentration (whale dominance)
- Contract verification status

## Payment

x402 USDC on Base.
