---
name: games-intel
title: "Game Intelligence Suite"
description: "Pay-per-request game intelligence. Search game libraries, compare prices across stores, track upcoming releases."
use_case: "Search games across platforms, find cheapest prices, track releases, and stay updated with gaming news and patch notes."
category: media
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
                            "amount": "0.001"
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
                    },
                    "parameters": [
                        {
                            "name": "q",
                            "in": "query",
                            "required": true,
                            "schema": {
                                "type": "string"
                            },
                            "description": "Game title search query"
                        }
                    ]
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
                            "amount": "0.001"
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
                    },
                    "parameters": [
                        {
                            "name": "q",
                            "in": "query",
                            "required": true,
                            "schema": {
                                "type": "string"
                            },
                            "description": "Game title to find cheapest price for"
                        }
                    ]
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
                            "amount": "0.001"
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
                    },
                    "parameters": [
                        {
                            "name": "q",
                            "in": "query",
                            "required": true,
                            "schema": {
                                "type": "string"
                            },
                            "description": "Search query for gaming news and patch notes"
                        }
                    ]
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
                            "amount": "0.001"
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
                    },
                    "parameters": [
                        {
                            "name": "q",
                            "in": "query",
                            "required": true,
                            "schema": {
                                "type": "string"
                            },
                            "description": "Game title to look up release info"
                        }
                    ]
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
| `GET /api/games/search` | Game search across multiple platforms | `GET /api/games/cheapest` | Cheapest game price finder | `GET /api/games/news` | Game news and patch notes | `GET /api/games/release` | Game release info and dates 
