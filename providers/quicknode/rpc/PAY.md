---
name: rpc
title: "Quicknode"
description: "Pay-per-request JSON-RPC endpoints for 140+ blockchain networks. Each chain is its own path (e.g. solana-mainnet, ethereum-mainnet). Supports SIWX session auth, x402 micropayments, dynamic per-method pricing, and direct node access without infrastructure."
use_case: "Use for blockchain JSON-RPC, querying account or contract state, submitting transactions, Solana RPC, EVM RPC, multi-chain dapps, block and transaction lookups, devnet/testnet access, and scalable chain reads with pay-per-request billing."
category: compute
service_url: https://x402.quicknode.com
openapi:
  path: openapi.json
---

Pay-per-request JSON-RPC access to 140+ blockchain networks. Each chain is its
own path (e.g. `/solana-mainnet`, `/ethereum-mainnet`, `/base-mainnet`). There is
no generic `/rpc` route — call `GET /networks` to enumerate supported slugs.

Per-request micropayments are $0.001 per call (some methods cost more under
dynamic pricing). For high-volume use, exchange a SIWX signature at `/auth` for
a JWT session token and reuse it via `Authorization: Bearer <token>` for one
hour.

x402 USDC accepted on Solana mainnet, Solana devnet, Base, Polygon, and several
other chains.

## Spend-aware usage

- Call the chain-specific path directly, such as `/solana-mainnet`. There is no
  generic `/rpc`; use `/networks` only when the slug is unknown.
- Use JSON-RPC batch requests when the upstream method and gateway accept them.
  Otherwise, keep calls sequential and ask before loops or polling.
- Use RPC for live state, account reads, and transaction submission. For large
  historical aggregates, prefer a data provider such as BigQuery or blockchain
  analytics instead of many paid RPC calls.
- For high-volume sessions, use `/auth` once to obtain a JWT and reuse it for an
  hour instead of signing every request.
