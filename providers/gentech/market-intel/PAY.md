---
name: market-intel
title: "Market Intelligence — Price Comparison"
description: "Unified product and price comparison engine across games, entertainment, and digital goods. Find the cheapest option for any title or product across multiple storefronts."
use_case: "Use when an agent needs to compare prices across categories, find the cheapest option for a product, or get unified search results across games and entertainment."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — Market Intelligence — Price Comparison

Unified product and price comparison engine across games, entertainment, and digital goods. Find the cheapest option for any title or product across multiple storefronts.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/intel/search` | Market Intelligence — Price Comparison — primary endpoint |
