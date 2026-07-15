---
name: token-security
title: "Token Risk Assessment — AI Security Analysis"
description: "AI-powered token risk assessment for any blockchain asset. Evaluates contract security, liquidity locks, holder concentration, trading patterns, and known threat vectors."
use_case: "Use when an agent needs to assess token contract risk, check for rug-pull indicators, analyze token holder distribution, or get a security score before interacting with a token."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — Token Risk Assessment — AI Security Analysis

AI-powered token risk assessment for any blockchain asset. Evaluates contract security, liquidity locks, holder concentration, trading patterns, and known threat vectors.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/token/risk` | Token Risk Assessment — AI Security Analysis — primary endpoint |
