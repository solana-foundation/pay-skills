---
name: token-security
title: "GenTech Labs — Token Security API"
description: "Comprehensive token security analysis across chains. Contract verification, honeypot detection, liquidity analysis, holder distribution, and exploit history."
use_case: "Use when an agent needs to assess token security, check for honeypots, analyze contract safety, or verify token legitimacy."
category: security
service_url: https://security.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Token Security API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/security/{chain}/{address}": {
          "get": {
            "summary": "Full token security analysis",
            "description": "Comprehensive token security assessment including contract verification, honeypot detection, liquidity analysis.",
            "operationId": "getTokenSecurity",
            "parameters": [
              {
                "name": "chain",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "Blockchain name"
              },
              {
                "name": "address",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string",
                  "pattern": "^0x[a-fA-F0-9]{40}$"
                },
                "description": "Token contract address"
              }
            ],
            "responses": {
              "200": {
                "description": "Security analysis report"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/security/{chain}/{address}/honeypot": {
          "get": {
            "summary": "Honeypot detection check",
            "description": "Fast honeypot/buy-sell tax check for a token contract.",
            "operationId": "checkHoneypot",
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
                "name": "address",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string",
                  "pattern": "^0x[a-fA-F0-9]{40}$"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Honeypot check result"
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

# GenTech Labs — Token Security API

Comprehensive token security analysis across chains. Contract verification, honeypot detection, liquidity analysis, holder distribution, and exploit history.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
