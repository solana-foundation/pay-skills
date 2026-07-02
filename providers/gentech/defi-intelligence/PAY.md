---
name: defi-intelligence
title: "GenTech Labs — DeFi Intelligence API"
description: "DeFi protocol data via DefiLlama — TVL, yield pools, token prices, DEX data, chain stats. Real-time on-chain intelligence for 500+ protocols across 50+ chains."
use_case: "Use for DeFi protocol TVL data, yield opportunity ranking, DEX pair analytics, and chain-level statistics."
category: finance
service_url: https://api.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 DeFi Intelligence API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/defi/protocol/{slug}": {
          "get": {
            "summary": "Protocol TVL and stats",
            "description": "Total value locked and statistics for a DeFi protocol via DefiLlama.",
            "operationId": "getProtocolData",
            "parameters": [
              {
                "name": "slug",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "Protocol slug (e.g. aave-v3)"
              }
            ],
            "responses": {
              "200": {
                "description": "Protocol data"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/defi/yields": {
          "get": {
            "summary": "Yield pool ranking",
            "description": "Top yield opportunities ranked by APY. Filter by chain or protocol.",
            "operationId": "getYields",
            "parameters": [
              {
                "name": "chain",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "string"
                }
              },
              {
                "name": "min_apy",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "number"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Yield pool data"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/defi/chains": {
          "get": {
            "summary": "Chain-level TVL",
            "description": "TVL data aggregated by blockchain across 50+ chains.",
            "operationId": "getChainTVL",
            "responses": {
              "200": {
                "description": "Chain TVL rankings"
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

# GenTech Labs — DeFi Intelligence API

DeFi protocol data via DefiLlama — TVL, yield pools, token prices, DEX data, chain stats. Real-time on-chain intelligence for 500+ protocols across 50+ chains.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
