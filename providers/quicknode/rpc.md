---
name: rpc
title: "QuickNode"
description: "Pay-per-request JSON-RPC access to 140+ blockchain networks including Solana"
category: compute
service_url: https://x402.quicknode.com
endpoints:
  - method: POST
    path: "rpc"
    resource: blockchain
    description: "JSON-RPC request to any supported blockchain network"
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
No API keys or subscriptions required.
