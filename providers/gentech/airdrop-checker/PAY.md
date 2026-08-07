---
name: airdrop-checker
title: "Airdrop Eligibility Checker"
description: "Pay-per-request airdrop checking. Scan wallet addresses for airdrop eligibility across multiple protocols."
use_case: "Check wallet eligibility for token airdrops across protocols. Scan for claimable drops and historical airdrop participation."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
        "openapi": "3.1.0",
        "info": {
            "title": "Airdrop Eligibility Checker",
            "version": "1.0.0",
            "description": "Pay-per-request airdrop checking. Scan wallet addresses for airdrop eligibility across multiple protocols."
        },
        "servers": [
            {
                "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
                "description": "GenTech x402 Gateway"
            }
        ],
        "paths": {
            "/api/airdrops/check": {
                "get": {
                    "operationId": "api_airdrops_check",
                    "summary": "Airdrop eligibility checker",
                    "tags": [
                        "airdrops"
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
                            "name": "wallet",
                            "in": "query",
                            "required": true,
                            "schema": {
                                "type": "string"
                            },
                            "description": "Wallet address to check for airdrop eligibility"
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

## Airdrop Eligibility Checker

Pay-per-request airdrop checking. Scan wallet addresses for airdrop eligibility across multiple protocols.

### Spend-aware usage

Batch check multiple wallets in sequence during airdrop seasons.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/airdrops/check` | Airdrop eligibility checker 
