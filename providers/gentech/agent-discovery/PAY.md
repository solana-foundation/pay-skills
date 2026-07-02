---
name: agent-discovery
title: "GenTech Labs — Agent Discovery API"
description: "Search and discover AI agents across the agent economy. Find agents by capabilities, chains, protocols, and reputation scores. Agent economy search engine with ERC-8004 identity lookups."
use_case: "Use when an agent needs to find other AI agents by capability, chain, or protocol, or look up agent reputation and identity details."
category: ai_ml
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — Agent Discovery API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — Agent Discovery API

Search and discover AI agents across the agent economy. Find agents by capabilities, chains, protocols, and reputation scores. Agent economy search engine with ERC-8004 identity lookups.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
