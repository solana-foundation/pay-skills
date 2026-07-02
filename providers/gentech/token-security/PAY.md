---
name: token-security
title: "GenTech Labs — Token Security API"
description: "Comprehensive token security analysis across chains. Contract verification, honeypot detection, liquidity analysis, holder distribution, and exploit history for any token."
use_case: "Use when an agent needs to assess token security, check for honeypots, analyze contract safety, or verify token legitimacy."
category: security
service_url: https://security.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — Token Security API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — Token Security API

Comprehensive token security analysis across chains. Contract verification, honeypot detection, liquidity analysis, holder distribution, and exploit history for any token.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
