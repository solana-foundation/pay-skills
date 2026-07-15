---
name: airdrop-checker
title: "Airdrop Eligibility Checker"
description: "Multi-chain airdrop eligibility checker. Submit a wallet address and receive qualification status, estimated claim value, claim deadlines, and eligibility tier across active campaigns."
use_case: "Use when an agent needs to check wallet airdrop eligibility, find claimable tokens, verify qualification status, or get airdrop deadlines across multiple chains."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — Airdrop Eligibility Checker

Multi-chain airdrop eligibility checker. Submit a wallet address and receive qualification status, estimated claim value, claim deadlines, and eligibility tier across active campaigns.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/airdrops/check` | Airdrop Eligibility Checker — primary endpoint |
