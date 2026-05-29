---
name: rpc
title: "Venum RPC"
description: "Cost-efficient Solana mainnet JSON-RPC at $0.0001 per call in USDC via Solana MPP sessions. Drop-in for any web3.js Connection URL. No signup, no API key. All JSON-RPC methods dispatched through a single POST."
use_case: "Use for Solana JSON-RPC calls (getAccountInfo, getBalance, getProgramAccounts, getTransaction, sendTransaction), pay-as-you-go reads without API key management, and short-burst dApp backends paying micro-cents per call."
category: compute
service_url: https://pay.rpc.venum.dev
version: v1
openapi:
  path: openapi.json
---

Pay-per-call Solana mainnet JSON-RPC. The endpoint accepts any standard Solana
JSON-RPC method via `POST /` and returns the cluster response verbatim — drop
the URL into any web3.js `Connection` constructor or `solana` CLI `--url` flag.

Pricing is flat: **$0.0001 per request**, regardless of method or response
size. The 402 challenge opens a Solana MPP session with a `$25` cap and a `1h`
TTL, so a client signs once and the gateway debits against the session until
the cap or TTL is reached.

## Spend-aware usage

- Cache method results client-side when the answer is stable —
  `getLatestBlockhash` for batching, `getSlot` for clock reads, mint metadata
  via `getAccountInfo` for token lists. RPC pricing assumes stateless retrieval
  on the gateway side, so any in-flight de-dupe is straight savings.
- Prefer commitment `processed` over `finalized` when the application can
  tolerate optimistic state — same price per call but ~10× fresher data.
- Reuse one MPP session for the full hour. Opening a new session per call
  burns the same micro-cents but spends extra TX setup time.
- For very high-volume reads (mass `getMultipleAccounts` over thousands of
  pubkeys), prefer one batched call with 100 pubkeys per request over 100
  single-pubkey calls — same on-chain work, 100× less RPC overhead.
- `sendTransaction` is a single call regardless of tx size; the price doesn't
  scale with the transaction's compute units.
