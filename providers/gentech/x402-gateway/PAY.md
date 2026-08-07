---
name: x402-gateway
title: "GenTech Labs x402 Gateway"
description: "16 pay-per-call API endpoints for game and movie discovery, wallet analytics, token risk, NFTs, airdrops, shipping tracking, and agent recon. Multi-chain USDC on Base, Solana, Avalanche, BNB, OKX, Algorand."
use_case: "Use for game pricing and discovery, movie search, airdrop eligibility checks, wallet analytics, token risk scoring, NFT data, shipping tracking, and agent reconnaissance. The first x402 gateway with Algorand support."
category: data
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  url: https://gentech-x402-gateway.jordanjones0902.workers.dev/openapi.json
---

GenTech Labs x402 Gateway — 16 pay-per-call API endpoints across 6 chains.

## Pricing

| Endpoint | Price (USDC) | Description |
|----------|-------------|-------------|
| `GET /api/games/search` | $0.005 | Game search across multiple platforms |
| `GET /api/games/cheapest` | $0.005 | Cheapest game price finder |
| `GET /api/games/news` | $0.001 | Game news and patch notes |
| `GET /api/games/release` | $0.001 | Game release info and dates |
| `GET /api/movies/search` | $0.005 | Movie search |
| `GET /api/movies/cheapest` | $0.005 | Cheapest movie watch option |
| `GET /api/movies/details` | $0.001 | Movie details (cast, studio, genres) |
| `GET /api/movies/trailers` | $0.001 | Movie trailers (YouTube) |
| `GET /api/intel/search` | $0.005 | Unified search across games + movies |
| `GET /api/intel/cheapest` | $0.005 | Cheapest across all categories |
| `GET /api/airdrops/check` | $0.010 | Airdrop eligibility checker |
| `GET /api/wallet/analyze` | $0.025 | AI-powered wallet analytics |
| `GET /api/nft/search` | $0.005 | NFT search and collection data |
| `GET /api/token/risk` | $0.010 | AI-powered token risk assessment |
| `GET /api/shipping/track` | $0.005 | Multi-carrier shipping tracker |
| `GET /api/agentscan` | $0.100 | AI-powered agent reconnaissance |

## Supported Networks

All endpoints accept USDC on any of these chains:
- **Base** (eip155:8453) — Coinbase CDP facilitator
- **Solana** (solana:mainnet) — Community facilitator
- **Avalanche** (eip155:43114)
- **BNB Chain** (eip155:56)
- **OKX** (eip155:196)
- **Algorand** (algorand:mainnet) — GoPlausible facilitator

The first x402 gateway with Algorand mainnet support via GoPlausible facilitator.

## Spend-aware usage

- Use `GET /api/intel/search` instead of chaining separate game+movie searches ($0.005 vs $0.01)
- Use `GET /api/games/news` or `GET /api/movies/details` for cheap single-item lookups ($0.001)
- Use `GET /api/token/risk` before `GET /api/wallet/analyze` to avoid unnecessary deep-dives
- The OpenAPI spec at `/openapi.json` lists all endpoints with x-payment-info pricing

## Discovery

- x402 v2 Bazaar: `/.well-known/x402`
- OpenAPI 3.1 spec: `/openapi.json`
- Agent card: `/.well-known/agent.json`
