---
name: gas-price
title: "GenTech Labs — Gas Price API"
description: "Real-time gas prices and fee estimation across EVM chains. Current base fee, priority fee, and historical gas trends."
use_case: "Use when an agent needs current gas prices, fee estimation, or gas history for transaction planning."
category: finance
service_url: https://gas.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Gas Price API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/gas/{chain}": {
          "get": {
            "summary": "Current gas prices",
            "description": "Real-time gas fees for a specified EVM chain.",
            "operationId": "getGasPrice",
            "parameters": [
              {
                "name": "chain",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string",
                  "enum": [
                    "ethereum",
                    "base",
                    "arbitrum",
                    "optimism",
                    "polygon",
                    "avalanche",
                    "bnb"
                  ]
                },
                "description": "EVM chain name"
              }
            ],
            "responses": {
              "200": {
                "description": "Gas price with fee estimates"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/gas/{chain}/history": {
          "get": {
            "summary": "Historical gas trends",
            "description": "Historical gas price data for trend analysis.",
            "operationId": "getGasHistory",
            "parameters": [
              {
                "name": "chain",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              },
              {
                "name": "period",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "string",
                  "enum": [
                    "24h",
                    "7d",
                    "30d"
                  ],
                  "default": "24h"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Historical gas data"
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

# GenTech Labs — Gas Price API

Real-time gas prices and fee estimation across EVM chains. Current base fee, priority fee, and historical gas trends.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
