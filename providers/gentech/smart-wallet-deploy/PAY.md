---
name: smart-wallet-deploy
title: "GenTech Labs — Smart Wallet Deploy API"
description: "Deploy smart contract wallets programmatically. Create ERC-4337 compatible smart accounts and manage wallet policies via API."
use_case: "Use when an agent needs to deploy a smart contract wallet or set up account abstraction."
category: finance
service_url: https://api.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Smart Wallet Deploy API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/wallet/deploy": {
          "post": {
            "summary": "Deploy smart wallet",
            "description": "Deploy ERC-4337 compatible smart contract wallet.",
            "operationId": "deployWallet",
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "owner",
                      "chain"
                    ],
                    "properties": {
                      "owner": {
                        "type": "string",
                        "pattern": "^0x[a-fA-F0-9]{40}$"
                      },
                      "chain": {
                        "type": "string",
                        "enum": [
                          "ethereum",
                          "base",
                          "polygon",
                          "arbitrum",
                          "optimism"
                        ]
                      },
                      "implementation": {
                        "type": "string",
                        "enum": [
                          "safe",
                          "biconomy",
                          "default"
                        ],
                        "default": "default"
                      }
                    }
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Deployed wallet details"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/wallet/{address}": {
          "get": {
            "summary": "Wallet status",
            "description": "Get smart wallet status, owners, and configuration.",
            "operationId": "getWalletInfo",
            "parameters": [
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
                "description": "Wallet info"
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

# GenTech Labs — Smart Wallet Deploy API

Deploy smart contract wallets programmatically. Create ERC-4337 compatible smart accounts and manage wallet policies via API.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
