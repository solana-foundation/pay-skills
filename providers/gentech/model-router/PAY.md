---
name: model-router
title: "GenTech Labs — Model Router API"
description: "Route AI tasks to the cheapest capable model with 84.6% cost savings across 4 complexity tiers via x402 USDC on Base."
use_case: "Use when an agent needs to optimize AI model costs, route tasks by complexity, or find the cheapest model for a specific task."
category: ai_ml
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Model Router API

Route AI tasks to the cheapest capable model with 84.6% cost savings across 4 complexity tiers via x402 USDC on Base.

## Endpoints

- `GET /v1/router/route` — Route task to cheapest model ($0.001)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
