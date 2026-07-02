---
name: rugcheck-v2
title: "GenTech Labs — Rugcheck v2 API"
description: "Solana token rug pull risk scoring with 11-factor analysis. Detects honeypots, freeze authority, LP locks, holder concentration, and scam patterns before trading."
use_case: "Use when an agent needs to verify Solana token safety, check for scam patterns, assess risk scores, or validate token contracts before trading."
category: security
service_url: https://rugcheck.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — Rugcheck v2 API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — Rugcheck v2 API

Solana token rug pull risk scoring with 11-factor analysis. Detects honeypots, freeze authority, LP locks, holder concentration, and scam patterns before trading.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
