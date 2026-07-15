---
name: blockchain-rpc
title: "Blockchain RPC — Multi-Chain Data Access"
description: "Multi-chain JSON-RPC access for Ethereum, Solana, Base, Avalanche, BNB Chain, and Arbitrum. Query balances, blocks, transactions, contract state, and gas prices across 12+ networks."
use_case: "Use when an agent needs to read blockchain data, query wallet balances, check transaction status, call contract read methods, or get gas prices across multiple chains."
category: compute
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — Blockchain RPC

Multi-chain JSON-RPC access for blockchain data queries. Covers Ethereum, Solana, Base, Avalanche, BNB Chain, Arbitrum, and more.

## Spend-aware usage

- Use specific chain and method combinations for fastest results.
- Cache block and balance data when possible — most values change slowly.
- Batch independent queries into a single call when supported.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | Health check and network status |
| `GET /api/pricing` | Current pricing tiers by endpoint |
