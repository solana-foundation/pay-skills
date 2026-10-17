---
name: rpc
title: "Ankr"
description: "Pay-per-call JSON-RPC for 120+ blockchain networks. Each chain is its own path (e.g. eth, solana, polygon, monad_mainnet). USDC over x402 on Monad or MPP on Solana; no signup, no API key."
use_case: "Use for blockchain JSON-RPC, account and contract state reads, transaction submission, EVM RPC, Solana RPC, multi-chain dapps, block and transaction lookups, and testnet access with pay-per-call billing."
category: compute
service_url: https://x402.rpc.ankr.com
openapi:
  path: openapi.json
---

Pay-per-call JSON-RPC on Ankr's node network for 120+ chains. Each chain is
its own path: `POST https://x402.rpc.ankr.com/<chain>` with one JSON-RPC 2.0
request, e.g. `/eth`, `/solana`, `/polygon`, `/monad_mainnet`.

A call costs $0.001. Identity methods such as `eth_chainId`, `net_version` and
`web3_clientVersion` are free. The current price list is at
`GET https://x402.rpc.ankr.com/pricing`.

An unpaid call answers 402 with both challenges: x402 v2 (USDC on Monad,
`exact` per call or a `batch-settlement` channel) and MPP (USDC on Solana,
`charge`). Pay either one and repeat the call.

## Spend-aware usage

- Call the chain path directly. Path names are listed in the OpenAPI document.
- Use the free identity methods to check you are on the right chain before
  paying for reads.
- For many calls in a row on x402, open a `batch-settlement` channel instead
  of settling every call on chain.
- Prefer one targeted read (a block, a receipt, a balance) over polling; ask
  before loops.
