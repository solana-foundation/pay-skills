---
name: market-intel
title: "Market Intelligence"
description: "Pay-per-request market intelligence. Compare prices, find deals, and make informed purchasing decisions."
use_case: "Search and compare prices across games and entertainment. Find the cheapest option for any title or product."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
        "openapi": "3.1.0",
        "info": {
            "title": "Market Intelligence",
            "version": "1.0.0",
            "description": "Pay-per-request market intelligence. Compare prices, find deals, and make informed purchasing decisions."
        },
        "servers": [
            {
                "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
                "description": "GenTech x402 Gateway"
            }
        ],
        "paths": {
            "/api/intel/search": {
                "get": {
                    "operationId": "api_intel_search",
                    "summary": "Unified search across games + movies",
                    "tags": [
                        "intel"
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
                            "description": "Product search query across games and movies"
                        }
                    ]
                }
            },
            "/api/intel/cheapest": {
                "get": {
                    "operationId": "api_intel_cheapest",
                    "summary": "Cheapest across all categories",
                    "tags": [
                        "intel"
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
                            "description": "Product name to find cheapest option"
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

## Market Intelligence

Pay-per-request market intelligence. Compare prices, find deals, and make informed purchasing decisions.

### Spend-aware usage

Narrow searches by specific product name for fastest results.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/intel/search` | Unified search across games + movies | `GET /api/intel/cheapest` | Cheapest across all categories 
