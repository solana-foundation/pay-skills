---
name: defi-intelligence
title: "GenTech Labs — DeFi Intelligence API"
description: "DeFi protocol data via DefiLlama — TVL, yield pools, token prices, DEX data, chain stats. Real-time on-chain intelligence for 500+ protocols across 50+ chains."
use_case: "Use for DeFi protocol TVL data, yield opportunity ranking, DEX pair analytics, and chain-level statistics."
category: finance
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — DeFi Intelligence API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — DeFi Intelligence API

DeFi protocol data via DefiLlama — TVL, yield pools, token prices, DEX data, chain stats. Real-time on-chain intelligence for 500+ protocols across 50+ chains.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
