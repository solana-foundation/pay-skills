---
name: movie-intel
title: "Movie Intelligence Suite"
description: "Pay-per-request movie intelligence. Search, compare prices, get details, and watch trailers."
use_case: "Search movies, find cheapest rental/buy prices, get detailed info (cast, studio, genres), and watch trailers across streaming platforms."
category: entertainment
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "Movie Intelligence Suite",
        "version": "1.0.0",
        "description": "Pay-per-request movie intelligence. Search, compare prices, get details, and watch trailers."
      },
      "servers": [
        {
          "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
          "description": "GenTech x402 Gateway"
        }
      ],
      "paths": {
        "/api/movies/search": {
          "get": {
            "operationId": "api_movies_search",
            "summary": "Movie search",
            "tags": [
              "movies"
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
        "/api/movies/cheapest": {
          "get": {
            "operationId": "api_movies_cheapest",
            "summary": "Cheapest movie watch option",
            "tags": [
              "movies"
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
        "/api/movies/details": {
          "get": {
            "operationId": "api_movies_details",
            "summary": "Movie details (cast, studio, genres)",
            "tags": [
              "movies"
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
        "/api/movies/trailers": {
          "get": {
            "operationId": "api_movies_trailers",
            "summary": "Movie trailers (YouTube)",
            "tags": [
              "movies"
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

## Movie Intelligence Suite

Pay-per-request movie intelligence. Search, compare prices, get details, and watch trailers.

### Spend-aware usage

Search by exact title for best results. Use movie IDs for repeat lookups.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/movies/search` | Movie search |\n| `GET /api/movies/cheapest` | Cheapest movie watch option |\n| `GET /api/movies/details` | Movie details (cast, studio, genres) |\n| `GET /api/movies/trailers` | Movie trailers (YouTube) |\n\n