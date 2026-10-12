---
name: nodit
title: "Nodit"
description: "On-chain access via x402 across Ethereum, Solana, Bitcoin, Base, Aptos, Sui, and more: raw JSON-RPC plus indexed Web3 data — native and token balances, transfers, holders, NFT and asset metadata, transactions, blocks, events, gas, ENS, and stats."
use_case: "Use for on-chain reads: raw JSON-RPC calls, wallet and token balances, transfer and transaction history, token and NFT holders, asset and NFT metadata, block/event queries, gas, ENS resolution, and stats across EVM, Solana, Bitcoin, Aptos, and Sui."
category: data
service_url: https://x402.nodit.io
version: v1
openapi:
  path: openapi.json
---

Nodit gives agents two layers of on-chain access through one x402 payment
proxy: the **Node API** for raw JSON-RPC straight to the chain, and the
**Web3 Data API** for the same on-chain history already indexed — token
balances, transfers, holders, NFT and asset metadata, and activity stats.
Read current state or query historical data in a single call, with no node
to run and no indexing or ETL pipeline of your own — the data is already
parsed, indexed, and queryable. Coverage spans EVM chains, Solana, Bitcoin,
Aptos, Sui, XRPL, Tron, and more. Most endpoints are `POST` and take
`{chain}/{network}` path parameters plus a JSON body.

## Payment

Paid calls settle as on-chain micropayments via the x402 (HTTP 402 Payment
Required) protocol. Two modes share the same data surface:

- **Pay-Per-Use** (`/pay-per-use/**`): settle each request on-chain — no
  pre-funding, no authentication, no onboarding. An unpaid request returns
  a `402` challenge; the agent signs and replays. From 0.001 USDC per
  request. This is the mode agents should use.
- **Credit** (`/credit/**`): top up USDC once, then deduct off-chain per
  call. Sign in with your wallet (SIWX) for a 1-hour JWT. Suited to
  high-frequency, predictable workloads that pre-fund rather than signing
  per request.

## Spend-aware usage

- Prefer indexed Web3 Data API reads over raw JSON-RPC when an indexed
  answer exists — one call instead of many round-trips.
- Use narrow, account- or id-scoped reads (`getNativeBalanceByAccount`,
  `getTokenContractMetadataByContracts`) over broad range or search
  endpoints when you already hold the identifier.
- Cap `getTokenTransfersByAccount` / `getTransactionsByAccount` paging to
  the smallest window that answers the task; avoid full-history pulls.
- Reuse `{chain}/{network}` and resolved addresses/ids across calls.
- For repeated high-volume access, Credit mode avoids a per-call signature
  round-trip.
