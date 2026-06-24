---
name: defi-intelligence
title: "GenTech Labs — DeFi Intelligence API"
description: "DeFi protocol intelligence: TVL, yield, chain breakdown, risk assessment for any protocol via x402 USDC on Base."
use_case: "Use when an agent needs DeFi protocol data, TVL analysis, yield comparisons, or risk assessments across protocols."
category: finance
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — DeFi Intelligence API

DeFi protocol intelligence: TVL, yield, chain breakdown, risk assessment for any protocol via x402 USDC on Base.

## Endpoints

- `GET /v1/defi/{protocol}` — Get protocol intelligence data ($0.05)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
