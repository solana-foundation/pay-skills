---
name: rpc
title: "QuickNode"
description: "Use pay-per-request JSON-RPC endpoints for 140+ blockchain networks, including Solana mainnet, devnet, and testnet. Provides dynamic pricing, automatic load balancing, chain routing, transaction submission, and node access without infrastructure."
use_case: "Use for blockchain JSON-RPC, querying account or contract state, submitting transactions, Solana RPC, EVM RPC, multi-chain dapps, block and transaction lookups, devnet/testnet access, node infrastructure replacement, and scalable chain reads."
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
