---
name: games-intel
title: "Game Intelligence Suite"
description: "Pay-per-request game intelligence. Search game libraries, compare prices across stores, track upcoming releases."
use_case: "Search games across platforms, find cheapest prices, track releases, and stay updated with gaming news and patch notes."
category: entertainment
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "Game Intelligence Suite",
        "version": "1.0.0",
        "description": "Pay-per-request game intelligence. Search game libraries, compare prices across stores, track upcoming releases."
      },
      "servers": [
        {
          "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
          "description": "GenTech x402 Gateway"
        }
      ],
      "paths": {
        "/api/games/search": {
          "get": {
            "operationId": "api_games_search",
            "summary": "Game search across multiple platforms",
            "tags": [
              "games"
            ],
            "x-payment-info": {
              "price": {
                "mode": "fixed",
                "currency": "USD",
                "amount": "NaN"
              },
              "protocols": [
                {
                  "x402": {}
                }
              ],
              "networks": [
                "eip155:8453",
                "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
                "eip155:43114",
                "eip155:56",
                "eip155:196"
              ]
            },
            "responses": {
              "200": {
                "description": "Successful response"
              },
              "402": {
                "description": "Payment Required \u2014 USDC on Base, Solana, Avalanche, BNB, or OKX"
              }
            }
          }
        },
        "/api/games/cheapest": {
          "get": {
            "operationId": "api_games_cheapest",
            "summary": "Cheapest game price finder",
            "tags": [
              "games"
            ],
            "x-payment-info": {
              "price": {
                "mode": "fixed",
                "currency": "USD",
                "amount": "NaN"
              },
              "protocols": [
                {
                  "x402": {}
                }
              ],
              "networks": [
                "eip155:8453",
                "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
                "eip155:43114",
                "eip155:56",
                "eip155:196"
              ]
            },
            "responses": {
              "200": {
                "description": "Successful response"
              },
              "402": {
                "description": "Payment Required \u2014 USDC on Base, Solana, Avalanche, BNB, or OKX"
              }
            }
          }
        },
        "/api/games/news": {
          "get": {
            "operationId": "api_games_news",
            "summary": "Game news and patch notes",
            "tags": [
              "games"
            ],
            "x-payment-info": {
              "price": {
                "mode": "fixed",
                "currency": "USD",
                "amount": "NaN"
              },
              "protocols": [
                {
                  "x402": {}
                }
              ],
              "networks": [
                "eip155:8453",
                "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
                "eip155:43114",
                "eip155:56",
                "eip155:196"
              ]
            },
            "responses": {
              "200": {
                "description": "Successful response"
              },
              "402": {
                "description": "Payment Required \u2014 USDC on Base, Solana, Avalanche, BNB, or OKX"
              }
            }
          }
        },
        "/api/games/release": {
          "get": {
            "operationId": "api_games_release",
            "summary": "Game release info and dates",
            "tags": [
              "games"
            ],
            "x-payment-info": {
              "price": {
                "mode": "fixed",
                "currency": "USD",
                "amount": "NaN"
              },
              "protocols": [
                {
                  "x402": {}
                }
              ],
              "networks": [
                "eip155:8453",
                "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
                "eip155:43114",
                "eip155:56",
                "eip155:196"
              ]
            },
            "responses": {
              "200": {
                "description": "Successful response"
              },
              "402": {
                "description": "Payment Required \u2014 USDC on Base, Solana, Avalanche, BNB, or OKX"
              }
            }
          }
        }
      }
    }
network: solana
accepts:
  - eip155:8453
  - solana:mainnet
pricing:
  per_request: 0.001
---

## Game Intelligence Suite

Pay-per-request game intelligence. Search game libraries, compare prices across stores, track upcoming releases.

### Spend-aware usage

Use search with specific game names rather than broad queries. Cache game IDs for repeat lookups.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/games/search` | Game search across multiple platforms |\n| `GET /api/games/cheapest` | Cheapest game price finder |\n| `GET /api/games/news` | Game news and patch notes |\n| `GET /api/games/release` | Game release info and dates |\n\n