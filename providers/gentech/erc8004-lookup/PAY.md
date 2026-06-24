---
name: erc8004-lookup
title: "GenTech Labs — ERC-8004 Lookup API"
description: "Verify any agent on-chain identity across Avalanche, Base, and Arbitrum via x402 USDC on Base."
use_case: "Use when an agent needs to verify another agent identity, check registration status, or validate ERC-8004 token ownership."
category: security
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — ERC-8004 Lookup API

Verify any agent on-chain identity across Avalanche, Base, and Arbitrum via x402 USDC on Base.

## Endpoints

- `GET /v1/identity/{address}` — Verify agent identity on-chain ($0.001)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
