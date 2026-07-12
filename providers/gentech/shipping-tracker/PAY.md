---
name: shipping-tracker
title: "Multi-Carrier Shipping Tracker"
description: "Pay-per-request shipping tracking. Track packages across 4 major carriers with real-time status, location, and ETA."
use_case: "Track packages across UPS, FedEx, USPS, and DHL with real-time status updates, location data, and delivery estimates."
category: other
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
        "openapi": "3.1.0",
        "info": {
            "title": "Multi-Carrier Shipping Tracker",
            "version": "1.0.0",
            "description": "Pay-per-request shipping tracking. Track packages across 4 major carriers with real-time status, location, and ETA."
        },
        "servers": [
            {
                "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
                "description": "GenTech x402 Gateway"
            }
        ],
        "paths": {
            "/api/shipping/track": {
                "get": {
                    "operationId": "api_shipping_track",
                    "summary": "Multi-carrier shipping tracker",
                    "tags": [
                        "shipping"
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
                            "name": "tracking",
                            "in": "query",
                            "required": true,
                            "schema": {
                                "type": "string"
                            },
                            "description": "Tracking number to look up"
                        },
                        {
                            "name": "carrier",
                            "in": "query",
                            "required": false,
                            "schema": {
                                "type": "string",
                                "enum": [
                                    "ups",
                                    "fedex",
                                    "usps",
                                    "dhl",
                                    "auto"
                                ]
                            },
                            "description": "Carrier code (auto-detect by default)"
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

## Multi-Carrier Shipping Tracker

Pay-per-request shipping tracking. Track packages across 4 major carriers with real-time status, location, and ETA.

### Spend-aware usage

Use the auto-detect endpoint for carrier-agnostic tracking numbers.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/shipping/track` | Multi-carrier shipping tracker 
