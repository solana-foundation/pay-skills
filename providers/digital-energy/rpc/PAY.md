---
category: compute
description: "Solana mainnet JSON-RPC over HTTP served from a validator operator's own bare-metal node. Returns standard Solana RPC results for account data, balances, token accounts, transactions, blocks, slots, blockhashes and transaction submission."
use_case: "Use for Solana mainnet RPC reads and writes: wallet balances, account data, SPL token accounts by owner, recent transaction lookups, slot and blockhash queries, and sending signed transactions, paid per request with no API key."
endpoints:
- description: Send Solana JSON-RPC requests to mainnet, single or batched up to 15 calls, for 0.005 USDC per HTTP request
  method: POST
  path: /
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.005
      unit: requests
  resource: rpc
name: rpc
service_url: https://agents.digital-energy.io
title: Digital Energy Solana RPC
version: v1
---

## Usage Notes

Send standard Solana JSON-RPC as POST requests to https://agents.digital-energy.io/. Each HTTP request costs 0.005 USDC, paid on Solana mainnet. A JSON-RPC batch of up to 15 calls is one HTTP request and one payment.

Served by Digital Energy's own validator-operated RPC node, not resold from another provider.

Not available through this endpoint (returns -32601): getProgramAccounts, getSupply, getLargestAccounts, getTokenLargestAccounts, batches of 16 or more calls, and request bodies over 30 KB. HTTP only; WebSocket subscriptions are not supported. Transaction history covers about the last eight hours.

## Spend-Aware Usage

- Batch related reads into one request (up to 15 calls) to pay once.
- Use getMultipleAccounts instead of separate getAccountInfo calls.
- Ask the user before spending on their behalf.
