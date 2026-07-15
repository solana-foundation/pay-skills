---
name: defi-yields
title: "DeFi Yields — Lending Rates Across Protocols"
description: "Real-time DeFi yield data across 200+ protocols and 15+ chains. Query lending APY, pool TVL, historical rates, and yield comparisons for Aave, Compound, Morpho, and more."
use_case: "Use when an agent needs to find the best lending yield, compare APY across DeFi protocols, check pool TVL, get historical rate data, or research yield farming opportunities."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — DeFi Yields

Real-time DeFi yield data across 200+ protocols and 15+ chains. Find the best APY for lending, compare pools, and track historical rate changes.

## Spend-aware usage

- Narrow by chain and protocol for fastest results.
- Cache yield data — most protocols update rates every 1-15 minutes.
- Use specific asset symbols when known.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | Health check and network status |
| `GET /api/pricing` | Current pricing tiers by endpoint |
