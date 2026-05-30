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
by summing the per-method token weight (standard methods = 42,
`getProgramAccounts` = 4200, `getTokenLargestAccounts` = 2400,
`getMultipleAccounts` = 420 per pubkey) and multiplying by the base token price
of `$0.000001` ($1 per 1,000,000 tokens). Every charge is floored to a minimum
of `1000` atomic USDC = `$0.001` (the Coinbase CDP facilitator minimum
settlement amount), so any request whose summed weight is below 1000 tokens is
billed `$0.001`. The first request returns `402 Payment Required` with an x402
challenge; the same body retried with `X-Payment` settles through the Coinbase
CDP x402 facilitator, then forwards to the upstream Solana RPC and returns the
real JSON-RPC response. Duplicate payment signatures are rejected by a Durable
Object settlement cache. Public probes are exposed at `GET /health`,
`GET /pricing` (full weight + USD table), and `GET /.well-known/x402`.

## Spend-aware usage

- Every request is floored to a `$0.001` minimum charge (1000 atomic USDC), so
  there is no benefit to splitting cheap calls — bill is `max(summed weight,
  1000)` tokens × `$0.000001`.
- Most standard JSON-RPC methods carry a 42-token weight that floors to
  `$0.001` each: `getBalance`, `getAccountInfo`, `getSlot`, `getBlockHeight`,
  `getEpochInfo`, `getLatestBlockhash`, `getFeeForMessage`,
  `getTransactionCount`, `getTransaction`, `getSignatureStatuses`,
  `getSignaturesForAddress`, `getBlock`, `getSupply`, `getTokenAccountBalance`,
  `sendTransaction`, and `simulateTransaction`. Prefer these whenever they
  answer the task.
- `getMultipleAccounts` is priced dynamically at 420 tokens per pubkey in
  `params[0]`; up to 2 pubkeys stays at the `$0.001` floor, and it only exceeds
  the floor past ~3 pubkeys. Request only the accounts you need.
- `getTokenLargestAccounts` costs 2400 tokens (`$0.0024`, above the floor);
  reach for it only when you need the full holder ranking.
- `getProgramAccounts` is the most expensive at 4200 tokens (`$0.0042`, above
  the floor). Always pass `dataSlice` and `filters` to keep scans tight.
- Batch read-only calls in a single JSON-RPC array (up to 100 per request) to
  amortize HTTPS overhead and the `$0.001` floor. The price is `max(summed
  token weight, 1000)` of every method in the batch.
- Unknown methods fall back to the 42-token default, floored to `$0.001`. Use
  the live `GET /pricing` endpoint to confirm exact pricing before integrating
  new methods.
- Reuse blockhashes and account snapshots across calls instead of re-fetching
  per operation.
