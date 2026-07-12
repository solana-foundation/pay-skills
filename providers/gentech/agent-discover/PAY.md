---
name: agent-discover
title: "Agent Discovery & Reconnaissance"
description: "Pay-per-request agent discovery. Find agents by capability, verify registrations, and assess reputation."
use_case: "Discover and scan AI agents across marketplaces and on-chain. Get agent profiles, reputation scores, and capability verification."
category: ai_ml
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
        "openapi": "3.1.0",
        "info": {
            "title": "Agent Discovery & Reconnaissance",
            "version": "1.0.0",
            "description": "Pay-per-request agent discovery. Find agents by capability, verify registrations, and assess reputation."
        },
        "servers": [
            {
                "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
                "description": "GenTech x402 Gateway"
            }
        ],
        "paths": {
            "/api/agentscan": {
                "get": {
                    "operationId": "api_agentscan",
                    "summary": "AgentScan \u2014 AI-powered agent reconnaissance",
                    "tags": [
                        "agentscan"
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
                            "description": "Search query for agent discovery"
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

## Agent Discovery & Reconnaissance

Pay-per-request agent discovery. Find agents by capability, verify registrations, and assess reputation.

### Spend-aware usage

Prefer targeted searches over broad scans.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/agentscan` | AgentScan — AI-powered agent reconnaissance 
