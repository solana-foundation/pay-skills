---
name: erc8004-lookup
title: "GenTech Labs — ERC-8004 Identity Lookup API"
description: "Query ERC-8004 agent identities on-chain. Look up agent metadata, reputation scores, service endpoints, and ownership."
use_case: "Use when an agent needs to verify another agent identity, check reputation, or resolve ERC-8004 agent metadata."
category: identity
service_url: https://api.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 ERC-8004 Identity Lookup API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/identity/{agentId}": {
          "get": {
            "summary": "Lookup agent by ID",
            "description": "Resolve ERC-8004 agent identity by agent ID. Returns metadata, endpoints, and reputation.",
            "operationId": "lookupAgentById",
            "parameters": [
              {
                "name": "agentId",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "ERC-8004 agent identifier"
              }
            ],
            "responses": {
              "200": {
                "description": "Agent identity metadata"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/identity/wallet/{address}": {
          "get": {
            "summary": "Lookup agent by wallet",
            "description": "Find ERC-8004 agent identities associated with a wallet address.",
            "operationId": "lookupAgentByWallet",
            "parameters": [
              {
                "name": "address",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string",
                  "pattern": "^0x[a-fA-F0-9]{40}$"
                },
                "description": "Owner wallet"
              }
            ],
            "responses": {
              "200": {
                "description": "Agent identities for wallet"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/identity/{agentId}/reputation": {
          "get": {
            "summary": "Agent reputation scores",
            "description": "Reputation score breakdown from ERC-8004 on-chain registry.",
            "operationId": "getAgentReputation",
            "parameters": [
              {
                "name": "agentId",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Reputation scores"
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

# GenTech Labs — ERC-8004 Identity Lookup API

Query ERC-8004 agent identities on-chain. Look up agent metadata, reputation scores, service endpoints, and ownership.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
