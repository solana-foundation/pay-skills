---
name: token-security
title: "Token Security Risk Analysis"
description: "Pay-per-request token security analysis. AI-powered risk assessment detects scams before you trade."
use_case: "Analyze token contracts for rugpull risk, honeypots, and malicious patterns before trading. Returns risk score (0-100), flags, and detailed analysis."
category: security
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "Token Security Risk Analysis",
        "version": "1.0.0",
        "description": "Pay-per-request token security analysis. AI-powered risk assessment detects scams before you trade."
      },
      "servers": [
        {
          "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
          "description": "GenTech x402 Gateway"
        }
      ],
      "paths": {
        "/api/token/risk": {
          "get": {
            "operationId": "api_token_risk",
            "summary": "AI-powered token risk assessment",
            "tags": [
              "token"
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

## Token Security Risk Analysis

Pay-per-request token security analysis. AI-powered risk assessment detects scams before you trade.

### Spend-aware usage

Cache results for the same token address (risk scores don't change frequently). Skip analysis for well-known tokens.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/token/risk` | AI-powered token risk assessment 
