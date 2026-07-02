---
name: crypto-price
title: "GenTech Labs — Crypto Price API"
description: "Real-time cryptocurrency price quotes and OHLC history for 100+ pairs. Pyth-backed data across crypto, FX, commodities, and 12 global stock markets with x402 micropayments."
use_case: "Use for real-time crypto prices, OHLC charts, market data, FX rates, commodity prices, and stock quotes."
category: finance
service_url: https://prices.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Crypto Price API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/price/{symbol}": {
          "get": {
            "summary": "Real-time price quote",
            "description": "Current price for a trading pair. Pyth-backed data for crypto, FX, commodities, and stocks.",
            "operationId": "getPrice",
            "parameters": [
              {
                "name": "symbol",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string",
                  "pattern": "^[A-Z0-9-]+$"
                },
                "description": "Trading pair (e.g. BTC-USD, ETH-USD)"
              }
            ],
            "responses": {
              "200": {
                "description": "Price quote data"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/price/{symbol}/history": {
          "get": {
            "summary": "OHLC price history",
            "description": "Historical OHLC bars with multiple resolutions.",
            "operationId": "getPriceHistory",
            "parameters": [
              {
                "name": "symbol",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              },
              {
                "name": "resolution",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "string",
                  "enum": [
                    "1",
                    "5",
                    "15",
                    "60",
                    "D",
                    "W",
                    "M"
                  ],
                  "default": "D"
                }
              },
              {
                "name": "from",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "integer"
                },
                "description": "Start timestamp (unix seconds)"
              },
              {
                "name": "to",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "integer"
                },
                "description": "End timestamp (unix seconds)"
              }
            ],
            "responses": {
              "200": {
                "description": "OHLC bar data"
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
        "network": "base",
        "token": "USDC"
      }
    }
---

# GenTech Labs — Crypto Price API

Real-time cryptocurrency price quotes and OHLC history for 100+ pairs. Pyth-backed data across crypto, FX, commodities, and 12 global stock markets with x402 micropayments.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
