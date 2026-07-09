---
name: nft-search
title: "NFT Search & Collection Data"
description: "Pay-per-request NFT search. Search collections, get real-time pricing, floor data, and collection analytics."
use_case: "Search NFT collections across marketplaces, get floor prices, collection stats, and metadata for any NFT."
category: nft
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "NFT Search & Collection Data",
        "version": "1.0.0",
        "description": "Pay-per-request NFT search. Search collections, get real-time pricing, floor data, and collection analytics."
      },
      "servers": [
        {
          "url": "https://gentech-x402-gateway.jordanjones0902.workers.dev",
          "description": "GenTech x402 Gateway"
        }
      ],
      "paths": {
        "/api/nft/search": {
          "get": {
            "operationId": "api_nft_search",
            "summary": "NFT search and collection data",
            "tags": [
              "nft"
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

## NFT Search & Collection Data

Pay-per-request NFT search. Search collections, get real-time pricing, floor data, and collection analytics.

### Spend-aware usage

Use collection slugs for precise lookups. Cache floor prices within your session.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/nft/search` | NFT search and collection data |\n\n