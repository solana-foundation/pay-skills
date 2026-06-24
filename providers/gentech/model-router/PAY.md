---
name: gentechlabs-model-router
title: GenTech Labs — Model Router API
category: ai-agents
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Model Router API", "version": "1.0.0" }, "paths": { "/v1/router/route": { "post": { "summary": "Route task", "responses": {"200": {"description": "Routing result"}} } } } }
  Route AI tasks to the cheapest capable model. 84.6% cost savings across 4 complexity tiers.
  Intelligent LLM model routing based on task complexity and domain.
  Automatically selects the optimal model for cost and quality via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/router/route
    description: Get optimal model recommendation for a task
    price_usd: 0.0005
    request: { task: "code review", domain: "technical", complexity: "medium" }
    response: { recommended_model, provider, estimated_cost, reasoning }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Model Router API

Intelligent LLM model routing based on task complexity and domain. Optimal cost and quality.

## Endpoints

- `GET /v1/router/route` — Get optimal model recommendation ($0.0005)

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.
