---
name: gas-price
title: "GenTech Labs — Gas Price API"
description: "Real-time gas prices across 20+ blockchain networks with slow, standard, and fast tiers via x402 USDC on Base."
use_case: "Use when an agent needs to check gas prices before submitting transactions, compare chain costs, or optimize transaction timing."
category: finance
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Gas Price API

Real-time gas prices across 20+ blockchain networks with slow, standard, and fast tiers via x402 USDC on Base.

## Endpoints

- `GET /v1/gas/{chain}` — Get gas prices for a specific chain ($0.001)
- `GET /v1/gas/all` — Get gas prices for all chains ($0.001)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
