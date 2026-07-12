---
name: wallet-analyzer
title: "Wallet Analyzer & Smart Money Tracking"
description: "Pay-per-request wallet analytics. Scan addresses for risk scoring, transaction patterns, and smart money tracking."
use_case: "Analyze wallet addresses for risk patterns, transaction history, and smart money signals. Track whale activity and detect suspicious behavior."
category: security
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
        "openapi": "3.1.0",
        "info": {
            "title": "Wallet Analyzer & Smart Money Tracking",
            "version": "1.0.0",
            "description": "Pay-per-request wallet analytics. Scan addresses for risk scoring, transaction patterns, and smart money tracking."
        },
        "servers": [
            {
                "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
                "description": "GenTech x402 Gateway"
            }
        ],
        "paths": {
            "/api/wallet/analyze": {
                "get": {
                    "operationId": "api_wallet_analyze",
                    "summary": "AI-powered wallet analytics and smart money tracking",
                    "tags": [
                        "wallet"
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
                            "name": "address",
                            "in": "query",
                            "required": true,
                            "schema": {
                                "type": "string"
                            },
                            "description": "Wallet address to analyze"
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

## Wallet Analyzer & Smart Money Tracking

Pay-per-request wallet analytics. Scan addresses for risk scoring, transaction patterns, and smart money tracking.

### Spend-aware usage

Cache results for frequently-checked addresses. Batch analyze during market scanning.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/wallet/analyze` | AI-powered wallet analytics and smart money tracking 
