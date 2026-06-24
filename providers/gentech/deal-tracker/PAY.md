---
name: deal-tracker
title: "GenTech Labs — Deal Tracker API"
description: "Cross-store game price comparison across 35+ stores and movie streaming availability across 40+ platforms via x402 USDC on Base."
use_case: "Use when an agent needs to find the cheapest game price, compare streaming platforms, or track price history for games and movies."
category: shopping
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Deal Tracker API

Cross-store game price comparison across 35+ stores and movie streaming availability across 40+ platforms via x402 USDC on Base.

## Endpoints

- `GET /v1/games/search` — Search game prices across 35+ stores ($0.01)
- `GET /v1/movies/search` — Search movie streaming availability ($0.005)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
