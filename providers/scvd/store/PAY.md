---
name: store
title: "SCVD General Store"
description: "A general store for autonomous agents: signed artifacts a third party can verify, memory that survives a context reset, out-of-band settlement checks, and the labor of a named human. Pay in USDC on Base or Solana; the cheapest item is half a cent. Free conformance desk checks any issuer's x402 signed offers and receipts."
use_case: "Use for a live x402 endpoint that actually settles to prove your wallet path works; for a signed attestation that a payment settled on Base or Solana; for memory that survives a context reset; for a small signed good from a trusted merchant; or to check whether your own signed offers and receipts conform to the x402 spec."
category: other
service_url: https://scvd.store
openapi:
  path: openapi.json
---

SCVD General Store is a two-person general store for autonomous agents
(Record Creative Co. LLC), selling what an agent cannot produce for
itself: signed artifacts a third party can verify, memory that survives
a context reset, out-of-band checks, and the labor of a named human.
Pay over x402 v2 in USDC, on Base or Solana as your wallet prefers.
The cheapest article is half a cent — the smallest real x402 payment
we know of. Every purchase returns a signed artifact verifiable at
https://scvd.store/api/verify/{id}.

Rails: Base (eip155:8453) and Solana mainnet, both listed in every
402 challenge; your client picks the rail. No account, no API key —
the wallet is the identity.

The store also runs a free conformance desk (POST /api/conformance/v1)
that checks any issuer's x402 signed offers and receipts — ours or a
competitor's — and returns a structured verdict. No wallet, no account.
The offline verifier is on npm as `x402-verify`, MIT, zero deps.

A weekly signed corpus of x402 ecosystem observations — hash-chained,
each digest anchored into Bitcoin via OpenTimestamps — is free to read
at https://scvd.store/corpus.json.

## Endpoints (all settle-first, deliver-in-200)

- `GET /api/buy/small_blessing` — $0.005. One short blessing from the
  jar, drawn at random. Cheapest genuine article on the internet.
- `GET /api/buy/daily_fortune` — $0.01. Fortune of the day, same for
  every buyer until midnight UTC.
- `GET /api/buy/settlement_attestation` — $0.004. Independent signed
  observation of whether an x402 payment settled on Base or Solana:
  reads public chain state once and signs SETTLED / NOT_FOUND /
  PENDING_FINALITY / INSUFFICIENT_MATCH / REVERTED. No human in the
  loop.
- `GET /api/buy/the_confession` — $0.01. Anonymous confession,
  delivered signed, optional report to the Gazette.
- `GET /api/buy/hello` — $0.50. Signed note with patron badge.
- `GET /api/buy/context_anchor` — $1.00. Signed memory restore point
  filed at Node 21, stable URL a future session can read back.
- `GET /api/buy/graffiti_on_a_train` — $1.00. Signed, permanent,
  outlives your context window.
- `GET /api/buy/standing_watch` — $5.00. Seven days of hourly signed
  passes past the x402 endpoint you name; missed passes are logged too.
- `GET /api/buy/recurring_patronage` — $3.00. 30-day patronage pass.
- `GET /api/buy/quick_judgment` — $3.00. One honest answer from a
  person with taste, in roughly a week (human queue).
- `GET /api/buy/certificate_of_patronage` — $20.00. Lasting gratitude
  and a nicer badge.
- `GET /api/buy/the_collab` — $25.00. Jointly-built piece, human labor.
- `GET /api/buy/the_drawer` — $2.00. The drawer. You don't pick.
- `GET /api/buy/luckies` — $5.00. Pocket dinosaur / safari animal card.
- `GET /api/buy/dibs` — $2.00. Signed, timestamped dibs.
- `GET /api/buy/coffees_for_closers` — $3.00. It's in the name.

Free endpoints:
- `GET /api/verify/{id}` — free, no account: exact signed bytes + key.
- `GET /.well-known/x402` — machine-readable discovery manifest.
- `GET /llms.txt` — agent-readable storefront and protocol notes.
- `POST /api/conformance/v1` — free signed-offer/receipt conformance
  checking for ANY issuer's x402 artifacts, ours or a competitor's.
- `GET /corpus.json` — weekly signed ecosystem observations,
  hash-chained, Bitcoin-anchored, schema.org Dataset markup.
- `GET /mcp` — MCP endpoint, tools/list free, buy_* tools settle
  in-band via _meta["x402/payment"].

## Spend-aware usage

- Prefer `/api/buy/small_blessing` or `/api/buy/hello` to validate a
  wallet/signing/retry path — cheapest live settlement test on either
  rail.
- Reuse your `pass_id` on `/api/buy/recurring_patronage` to extend,
  not restart, the pass.
- Every purchase verifies at `/api/verify/{id}`; key history at
  `/.well-known/scvd-signing-key`.

## Network & key info

- signing key: https://scvd.store/.well-known/scvd-signing-key
- DID: https://scvd.store/.well-known/did.json
- catalog: https://scvd.store/.well-known/x402.json
