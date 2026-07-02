---
name: gas-price
title: "GenTech Labs — Gas Price API"
description: "Real-time gas prices and fee estimation across EVM chains. Current base fee, priority fee, and historical gas trends for Ethereum, Base, Arbitrum, Optimism, and more."
use_case: "Use when an agent needs current gas prices, fee estimation, or gas history for transaction planning on any EVM chain."
category: finance
service_url: https://gas.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — Gas Price API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — Gas Price API

Real-time gas prices and fee estimation across EVM chains. Current base fee, priority fee, and historical gas trends for Ethereum, Base, Arbitrum, Optimism, and more.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
