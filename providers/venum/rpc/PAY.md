---
name: rpc
title: "Venum RPC"
description: "Cost-efficient Solana mainnet JSON-RPC at $0.0001 per call in USDC. Two modes: x402 per-call (no signup) and SIWX→JWT session (24h pre-paid). Drop-in for any web3.js Connection URL."
use_case: "Use for Solana JSON-RPC calls (getAccountInfo, getBalance, getProgramAccounts, getTransaction, sendTransaction), pay-as-you-go reads without API key management, sessions for high-volume agents, short-burst dApp backends paying micro-cents per call."
category: compute
service_url: https://pay.rpc.venum.dev
version: v1
openapi:
  path: openapi.json
---

Pay-per-call Solana mainnet JSON-RPC at **$0.0001 per request**, regardless of
method or response size. Drop the URL into any web3.js `Connection` constructor
or `solana` CLI `--url` flag.

Two complementary modes — the agent picks based on its workload:

### x402 per-call (default, no signup)

POST `/` with a standard JSON-RPC body. The gateway responds with `402 Payment
Required` carrying a Solana payment challenge in the `www-authenticate` header.
The client signs a USDC transfer to the recipient and retries with the proof —
the call succeeds, the cluster response is forwarded back verbatim. Best for
agents doing tens of calls per task; no setup, no balance, customer pays both
the $0.0001 USDC and the ~5000-lamport SOL signature fee.

### SIWX → JWT session (high-volume)

POST `/auth` with a CAIP-122 SIWX message + ed25519 signature; receive a
**24-hour JWT** (vs the 1-hour TTL most providers ship). Pre-fund with a USDC
transfer to the recipient using memo `venum-prepay:<your-base58-pubkey>`. Reuse
the JWT via `Authorization: Bearer <token>` on every subsequent POST `/`. No
per-call SOL signature, no per-call x402 round-trip — pure JSON-RPC at the line
rate of the upstream node.

`GET /balance` returns the remaining pre-pay balance and top-up instructions
so a long-running agent can preempt 402s and refill before exhaustion.

### Free reads

`getHealth` and `getVersion` are free in both modes — liveness/identity probes
shouldn't burn micro-USDC.

## Spend-aware usage

- For repeat callers, **prefer the SIWX→JWT session** — one signing event for
  the whole 24h window.
- Cache method results client-side when the answer is stable —
  `getLatestBlockhash` for batching, `getSlot` for clock reads, mint metadata
  via `getAccountInfo` for token lists. The gateway has no per-method cache,
  so any in-flight de-dupe is straight savings.
- Prefer commitment `processed` over `finalized` when the application can
  tolerate optimistic state — same price per call, ~10× fresher data.
- For very high-volume reads (mass `getMultipleAccounts` over thousands of
  pubkeys), prefer one batched call with 100 pubkeys per request over 100
  single-pubkey calls — same on-chain work, 100× less RPC overhead.
- `sendTransaction` is a single call regardless of tx size; the price doesn't
  scale with compute units.
- Use `GET /balance` to detect impending exhaustion before the gateway issues
  402; top up the same wallet (`venum-prepay:<pubkey>` memo) to extend the
  session without re-auth.
- Start with a small top-up (\$1 = 10,000 calls) and refill as needed —
  there's no over-fund recovery in v1, so size the deposit to the workload.
