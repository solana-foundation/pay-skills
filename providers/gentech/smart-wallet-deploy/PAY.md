---
name: smart-wallet-deploy
title: "GenTech Labs — Smart Wallet Deploy API"
description: "Deploy Safe wallets via Zyfai SDK with yield optimization, session keys, and auto-rebalance via x402 USDC on Base."
use_case: "Use when an agent needs to deploy smart wallets, manage multi-sig setups, or configure yield optimization strategies."
category: finance
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Smart Wallet Deploy API

Deploy Safe wallets via Zyfai SDK with yield optimization, session keys, and auto-rebalance via x402 USDC on Base.

## Endpoints

- `GET /v1/wallet/deploy` — Deploy a Safe smart wallet ($0.01)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
