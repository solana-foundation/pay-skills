---
name: rugcheck-v2
title: "GenTech Labs — Rugcheck v2 API"
description: "Solana token rug pull risk scoring with 11-factor analysis. Detects honeypots, freeze authority, LP locks, holder concentration, and scam patterns before trading."
use_case: "Use when an agent needs to verify Solana token safety, check for scam patterns, assess risk scores, or validate token contracts before trading."
category: security
service_url: https://rugcheck.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Rugcheck v2 API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/token/{address}/risk": {
          "get": {
            "summary": "Token risk score",
            "description": "11-factor Solana token risk analysis: honeypot detection, freeze authority, LP lock status, holder concentration, mint authority, and scam pattern detection.",
            "operationId": "getTokenRisk",
            "parameters": [
              {
                "name": "address",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string",
                  "pattern": "^[1-9A-HJ-NP-Za-km-z]{32,44}$"
                },
                "description": "Solana token mint address"
              }
            ],
            "responses": {
              "200": {
                "description": "Risk assessment with score and factor breakdown"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/token/{address}/holders": {
          "get": {
            "summary": "Holder distribution analysis",
            "description": "Top holder concentration, distribution metrics, and whale alert data for a token.",
            "operationId": "getTokenHolders",
            "parameters": [
              {
                "name": "address",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Holder distribution data"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/token/{address}/liquidity": {
          "get": {
            "summary": "LP liquidity analysis",
            "description": "Liquidity pool depth, LP lock status, and liquidity health metrics.",
            "operationId": "getTokenLiquidity",
            "parameters": [
              {
                "name": "address",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Liquidity analysis data"
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

# GenTech Labs — Rugcheck v2 API

Solana token rug pull risk scoring with 11-factor analysis. Detects honeypots, freeze authority, LP locks, holder concentration, and scam patterns before trading.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
