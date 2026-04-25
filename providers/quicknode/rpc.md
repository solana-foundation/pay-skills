---
name: rpc
title: "QuickNode"
description: "Pay-per-request JSON-RPC access to 140+ blockchain networks including Solana mainnet, devnet, and testnet with dynamic pricing and automatic load balancing"
use_case: "Use when you need to query blockchain state, submit transactions, fetch account data, or interact with any of 140+ supported networks via standard JSON-RPC without managing node infrastructure"
category: compute
service_url: https://x402.quicknode.com
endpoints:
  - method: POST
    path: "rpc"
    resource: blockchain
    description: "Execute a JSON-RPC request against any of 140+ supported blockchain networks, supporting all standard RPC methods for reading state and submitting transactions"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Pay-per-request JSON-RPC access to 140+ blockchain networks including
Solana mainnet, devnet, and testnet. SIWX auth + x402 payment. Dynamic pricing.
Supports all standard RPC methods across EVM, Solana, Bitcoin, and more.
