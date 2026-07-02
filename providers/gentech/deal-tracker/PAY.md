---
name: deal-tracker
title: "GenTech Labs — Deal Tracker API"
description: "Cross-store price comparison and deal tracking. Search products, compare prices across retailers, track price drops. Shopping intelligence layer for AI agents."
use_case: "Use when an agent needs to find the best price for a product, compare deals across stores, or track price history."
category: shopping
service_url: https://deals.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — Deal Tracker API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — Deal Tracker API

Cross-store price comparison and deal tracking. Search products, compare prices across retailers, track price drops. Shopping intelligence layer for AI agents.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
