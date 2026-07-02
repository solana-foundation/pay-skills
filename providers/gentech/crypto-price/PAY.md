---
name: crypto-price
title: "GenTech Labs — Crypto Price API"
description: "Real-time cryptocurrency price quotes and OHLC history for 100+ pairs. Pyth-backed data across crypto, FX, commodities, and 12 global stock markets with x402 micropayments."
use_case: "Use for real-time crypto prices, OHLC charts, market data, FX rates, commodity prices, and stock quotes."
category: finance
service_url: https://prices.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — Crypto Price API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — Crypto Price API

Real-time cryptocurrency price quotes and OHLC history for 100+ pairs. Pyth-backed data across crypto, FX, commodities, and 12 global stock markets with x402 micropayments.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
