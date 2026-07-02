---
name: travel-search
title: "GenTech Labs — Travel Search API"
description: "Flight and hotel search across providers. Real-time availability, price comparison, and booking links. Multi-city routing and date flexibility for best deals."
use_case: "Use when an agent needs to search for flights, find hotels, compare travel prices, or plan multi-city trips."
category: maps
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — Travel Search API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — Travel Search API

Flight and hotel search across providers. Real-time availability, price comparison, and booking links. Multi-city routing and date flexibility for best deals.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
