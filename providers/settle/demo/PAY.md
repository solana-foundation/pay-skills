---
name: demo
title: "Settle - Receipt-Pinned x402 Sandbox"
description: "Solana devnet x402 sandbox with receipt-pinned spends. Three demo endpoints (arxiv abstract fetch, JA->EN translation, ELI12 summarization) exercise a full pay -> spend_via_pact -> on-chain receipt -> deliverable round-trip without touching mainnet funds."
use_case: "Use for testing x402 client integrations on devnet, verifying credential envelopes, exercising spend_via_pact with a funded pact, debugging capability-hash mismatches, and confirming spend signatures and receipt hashes round-trip."
category: devtools
service_url: https://use-settle.vercel.app/api/x402/proxy
openapi:
  path: openapi.json
---

Settle is a Solana payment protocol that wraps x402 with a four-hash kernel
commit (`receipt`, `reason`, `policy_snapshot`, `purpose`) and an on-chain
`agent_card` + `pact` policy gate. This provider exposes three deliverable
endpoints whose **payment flow is real** — every successful call submits a
`spend_via_pact` instruction on Solana devnet that transfers USDC from the
caller's pact vault to a registered merchant ATA, and the receipt is
persisted with a verifiable hash chain.

The deliverable JSON itself is canned (a stable arXiv abstract, a stable
translation, a stable summary) so integrators can compare their client's
behavior against a known-good fixture without paying for real arXiv,
Translate, or LLM calls.

## When to use

- Building an x402 client (the `pay` CLI, a custom MCP server, an agent
  runner) and you need a target that exercises every header
  (`X-Settle-Sig`, `-Ts`, `-Nonce`, `-Capability-Hash`, `-Amount-Lamports`,
  `-Pact-Pubkey`).
- Verifying that your credential envelope round-trips correctly through
  the dual-signature path (authority sig over the canonical envelope,
  agent sig over canonical request bytes).
- Confirming `spend_via_pact` lands on devnet with the expected merchant
  pubkey, capability hash, and policy snapshot, and that the resulting
  receipt is queryable.

A reproducible end-to-end driver that creates a card, opens a pact, and
calls one of these endpoints lives at
[`apps/web/e2e/phantom-qa/test-roundtrip-proxy.mjs`](https://github.com/Pratiikpy/Settle/blob/main/apps/web/e2e/phantom-qa/test-roundtrip-proxy.mjs)
in the Settle repo. Latest passing run on devnet:
[`2R6euT6Hc8NgpdaWQX3CAY1pmTWURKv1vK2s8BTA6Lj8k86NZ5s1i96bAecSp4gkyK79E8yfiXD7WzFQXXEznNbj`](https://solscan.io/tx/2R6euT6Hc8NgpdaWQX3CAY1pmTWURKv1vK2s8BTA6Lj8k86NZ5s1i96bAecSp4gkyK79E8yfiXD7WzFQXXEznNbj?cluster=devnet).

## Capability hashes

The proxy verifies a BLAKE3 hash of the canonical capability spec on every
request. The three demo capabilities are registered with `verified=true`
in the public Settle capability registry at
`https://use-settle.vercel.app/api/capabilities`:

| Endpoint | Capability hash |
|---|---|
| `arxiv-fetch` | `c45734b2b7ccbde7914419c2589e7cedee90e9cd58d792b91b5bd8c8162f7e87` |
| `translate` | `f86d8bb555733e6843b17a94346d71e8ca04d7378dcebff51851603e62530e08` |
| `summarize` | `ab180f449d75d42c5974fc9023c9d388d320dd4a1907fd64eb705fb90ea1dfb3` |

## Spend-aware usage

- Don't loop. Each call costs $0.05 to $0.30 USDC (devnet) and lands a
  real on-chain transaction. One per endpoint is enough for client
  integration testing.
- Pre-create the merchant USDC ATA before your first call; the proxy
  returns Anchor error `3012` (`AccountNotInitialized`) otherwise. The
  three merchant pubkeys are listed in `verified_merchants` and their
  ATAs are pre-funded for the catalog-listed flow. Devnet USDC mint:
  `4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`.
- Use a fresh `X-Settle-Nonce` per request. Nonces are rejected with
  `409 nonce_replay` after first use; they live in the proxy's Upstash
  layer with a 5-minute TTL.
- Receipts are queryable at
  `https://use-settle.vercel.app/api/verify/<receipt_hash>` and link out
  to Solscan via the `spend_signature` field.
- Keep `X-Settle-Purpose` short, plaintext, and honest — its BLAKE3 hash
  is part of the kernel commit and the merchant can pin specific purposes
  in policy.

## Source

The Settle protocol is open source at
[github.com/Pratiikpy/Settle](https://github.com/Pratiikpy/Settle).
The proxy implementation lives in
[`apps/web/app/api/x402/proxy/[merchant]/route.ts`](https://github.com/Pratiikpy/Settle/blob/main/apps/web/app/api/x402/proxy/[merchant]/route.ts).
