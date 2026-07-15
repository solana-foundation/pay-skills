---
name: market-intel
title: "Market Intel — Price Comparison & Deals"
description: "Unified price comparison engine across games, entertainment, and digital goods. Finds the cheapest option for any product across multiple storefronts."
use_case: "Use when an agent needs to find the best price for a product, compare costs across stores, or find the cheapest deal."
category: shopping
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: openapi.json
pricing:
  per_request: 0.005
---

# GenTech Labs — Market Intel

Price comparison engine across multiple storefronts and product categories.

## Endpoints

| Endpoint | Description | Price |
|----------|-------------|-------|
| `GET /api/intel/search` | Search products and prices | $0.005 |
| `GET /api/intel/cheapest` | Find cheapest option | $0.005 |
