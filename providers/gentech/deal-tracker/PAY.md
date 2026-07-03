---
name: deal-tracker
title: "GenTech Labs — Deal Tracker API"
description: "Cross-store price comparison and deal tracking. Search products, compare prices across retailers, track price drops. Shopping intelligence layer for AI agents."
use_case: "Use when an agent needs to find the best price for a product, compare deals across stores, or track price history."
category: shopping
service_url: https://deals.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Deal Tracker API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/deals/search": {
          "get": {
            "summary": "Search deals and prices",
            "description": "Cross-store product search. Compare prices, find the best deals across 35+ retailers.",
            "operationId": "searchDeals",
            "parameters": [
              {
                "name": "q",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "Search term"
              },
              {
                "name": "store",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "string"
                },
                "description": "Filter by retailer"
              },
              {
                "name": "limit",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "integer",
                  "default": 10,
                  "maximum": 50
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Deal search results"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/deals/{id}": {
          "get": {
            "summary": "Deal details",
            "description": "Full details for a specific deal including price history, store comparisons, and availability.",
            "operationId": "getDealDetails",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Deal detail data"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        }
      },
      "x-payment": {
        "protocol": "x402",
        "network": "solana",
        "token": "USDC"
      }
    }
---

# GenTech Labs — Deal Tracker API

Cross-store price comparison and deal tracking. Search products, compare prices across retailers, track price drops. Shopping intelligence layer for AI agents.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
