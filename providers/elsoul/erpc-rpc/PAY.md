---
name: erpc-rpc
title: "ERPC x402 Solana RPC"
description: "Pay-per-request Solana JSON-RPC proxy on Cloudflare Workers, billed per method via x402. Reads balances, accounts, blocks, transactions, signatures, token holdings, program data, and submits or simulates transactions, settled in USDC on Solana mainnet."
use_case: "Use for on-demand Solana mainnet JSON-RPC calls - account and balance reads, transaction history, program account scans, block and slot lookups, fee estimation, transaction simulation, and sendTransaction - paid per request in USDC with no subscription."
category: compute
service_url: https://x402.erpc.global
version: v1
openapi:
  path: openapi.json
---

ERPC x402 Solana RPC is a stablecoin-gated JSON-RPC proxy for Solana mainnet
operated by ELSOUL LABO B.V. The single paid endpoint `POST /v1/solana-mainnet`
accepts standard JSON-RPC 2.0 single or batch requests and prices each request
by summing the per-method weight (e.g. `getBalance` = 1, `getProgramAccounts` =
50, `sendTransaction` = 20) and multiplying by the base token price of
`$0.0001`. The first request returns `402 Payment Required` with an x402
challenge; the same body retried with `X-Payment` settles through the Coinbase
CDP x402 facilitator, then forwards to the upstream Solana RPC and returns the
real JSON-RPC response. Duplicate payment signatures are rejected by a Durable
Object settlement cache. Public probes are exposed at `GET /health`,
`GET /pricing` (full weight + USD table), and `GET /.well-known/x402`.

## Spend-aware usage

- Prefer 1-weight read methods when they answer the task: `getBalance`,
  `getAccountInfo`, `getSlot`, `getBlockHeight`, `getEpochInfo`,
  `getLatestBlockhash`, `getFeeForMessage`, `getTransactionCount`. Each costs
  `$0.0001`.
- Reach for 5-weight reads (`$0.0005`) only when you actually need the wider
  result: `getTransaction`, `getSignatureStatuses`, `getMultipleAccounts`,
  `getSupply`, `getTokenAccountBalance`, `getInflationReward`.
- Cap signature and block enumerations to the minimum range
  (`getSignaturesForAddress`, `getBlock`, `getBlocks`, `getVoteAccounts` =
  10-weight, `$0.001`).
- Avoid 50-weight scans (`$0.005`) unless filters are tight:
  `getProgramAccounts`, `getTokenAccountsByOwner`,
  `getTokenAccountsByDelegate`, `getClusterNodes`, `getBlockProduction`. Use
  `dataSlice` and `filters` to keep responses small.
- Submission methods are priced separately: `sendTransaction` = 20-weight
  (`$0.002`), `simulateTransaction` = 30-weight (`$0.003`).
- Batch read-only calls in a single JSON-RPC array (up to 100 per request) to
  amortize HTTPS overhead. The price is the summed weight of all methods in the
  batch.
- Unknown methods fall back to a 5-weight default (`$0.0005`). Use the live
  `/pricing` endpoint to confirm pricing before integrating new methods.
- Reuse blockhashes and account snapshots across calls instead of re-fetching
  per operation.
