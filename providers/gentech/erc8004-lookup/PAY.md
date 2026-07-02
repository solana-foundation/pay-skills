---
name: erc8004-lookup
title: "GenTech Labs — ERC-8004 Identity Lookup API"
description: "Query ERC-8004 agent identities on-chain. Look up agent metadata, reputation scores, service endpoints, and ownership. Cross-chain identity resolution for the agent economy."
use_case: "Use when an agent needs to verify another agent identity, check reputation, or resolve ERC-8004 agent metadata on Base."
category: identity
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — ERC-8004 Identity Lookup API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — ERC-8004 Identity Lookup API

Query ERC-8004 agent identities on-chain. Look up agent metadata, reputation scores, service endpoints, and ownership. Cross-chain identity resolution for the agent economy.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
