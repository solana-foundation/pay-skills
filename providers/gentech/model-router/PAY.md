---
name: model-router
title: "GenTech Labs — Model Router API"
description: "Task-aware AI model routing. Automatically select the optimal model based on task complexity, domain, and cost constraints. Reduces LLM spend by 40-60%."
use_case: "Use when an agent needs to route a task to the best AI model or optimize LLM costs."
category: ai_ml
service_url: https://api.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Model Router API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/router/completion": {
          "post": {
            "summary": "Route AI completion",
            "description": "Route a task to the optimal AI model with automatic fallback chains.",
            "operationId": "routeCompletion",
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "prompt"
                    ],
                    "properties": {
                      "prompt": {
                        "type": "string",
                        "description": "Task prompt"
                      },
                      "domain": {
                        "type": "string",
                        "enum": [
                          "coding",
                          "creative",
                          "analysis",
                          "general"
                        ]
                      },
                      "max_cost": {
                        "type": "number",
                        "description": "Max cost in cents"
                      }
                    }
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Completion result"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/router/models": {
          "get": {
            "summary": "List available models",
            "description": "List all models with capabilities, pricing, and status.",
            "operationId": "listModels",
            "responses": {
              "200": {
                "description": "Available models list"
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

# GenTech Labs — Model Router API

Task-aware AI model routing. Automatically select the optimal model based on task complexity, domain, and cost constraints. Reduces LLM spend by 40-60%.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
