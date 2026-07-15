---
name: nft-search
title: "NFT Search — Collection & Asset Data"
description: "Multi-chain NFT search engine. Search collections and individual assets across Ethereum, Solana, Polygon, and other major NFT ecosystems with collection metadata and floor prices."
use_case: "Use when an agent needs to search NFT collections, get floor prices, find asset data across chains, or research NFT collection metadata and trading activity."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — NFT Search — Collection & Asset Data

Multi-chain NFT search engine. Search collections and individual assets across Ethereum, Solana, Polygon, and other major NFT ecosystems with collection metadata and floor prices.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/nft/search` | NFT Search — Collection & Asset Data — primary endpoint |
