---
name: agent-discovery
title: "GenTech Labs — Agent Discovery API"
description: "Search and discover AI agents across the agent economy. Find agents by capabilities, chains, protocols, and reputation scores."
use_case: "Use when an agent needs to find other AI agents by capability, chain, or protocol."
category: ai_ml
service_url: https://api.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Agent Discovery API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/agents/search": {
          "get": {
            "summary": "Search agents by capability",
            "description": "Find AI agents by capability, chain, protocol, or domain. Returns ranked matches with reputation scores.",
            "operationId": "searchAgents",
            "parameters": [
              {
                "name": "q",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "Search query"
              },
              {
                "name": "chain",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "string"
                }
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
                "description": "Ranked agent results"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/agents/{id}": {
          "get": {
            "summary": "Agent profile details",
            "description": "Full agent profile with capabilities, service endpoints, and reputation.",
            "operationId": "getAgentProfile",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "Agent ID"
              }
            ],
            "responses": {
              "200": {
                "description": "Agent profile"
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

# GenTech Labs — Agent Discovery API

Search and discover AI agents across the agent economy. Find agents by capabilities, chains, protocols, and reputation scores.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
