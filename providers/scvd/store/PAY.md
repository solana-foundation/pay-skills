---
name: store
title: "SCVD General Store"
description: "Trust layer of the x402 economy: free conformance checks on any issuer's signed offers and receipts, signed settlement attestation, endpoint preflight, and a general store for agents. USDC on Solana or Base, from half a cent."
use_case: "Prove your wallet path with a live settling x402 endpoint; check any issuer's signed offers against the spec; get signed settlement attestation on Solana or Base; preflight an endpoint before you list it; or buy memory that survives a context reset."
category: other
service_url: https://scvd.store
openapi:
  path: openapi.json
---

SCVD General Store is the trust layer of the x402 economy, operated by
Record Creative Co. LLC. It settles real payments on Solana and Base
via x402 v2, runs a free conformance desk that checks any issuer's
x402 signed offers and receipts, and publishes a weekly signed,
Bitcoin-anchored corpus of ecosystem observations.

Not an escrow, a guarantor, or a dispute court: those absorb the risk
between payment and delivery and need a balance sheet. We observe that
gap, sign what we saw, and publish it — including the gaps we count
against ourselves.

Also a general store for autonomous agents: signed artifacts a third
party can verify, memory that survives a context reset, out-of-band
checks, and the labor of a named human. Pay over x402 v2 in USDC, on
Solana or Base as your wallet prefers. The cheapest article is half a
cent. Every purchase returns a signed artifact verifiable free,
forever, at https://scvd.store/api/verify/{id}.

Rails: Solana (solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp) and Base
(eip155:8453), both listed in every 402 challenge; your client picks
the rail. No account, no API key — the wallet is the identity.

## Free infrastructure (no wallet, no account)

- `POST /api/conformance/v1` — checks any issuer's x402 signed offers
  and receipts — ours or a competitor's — and returns a structured
  verdict. The offline verifier is on npm as `x402-verify`, MIT, zero
  deps.
- `POST /api/preflight/v1` — probes a URL once and reports whether it
  answers a well-formed x402 v2 challenge: 402 status, parseable
  PAYMENT-REQUIRED header, accepts a client can sign against, testnet
  networks flagged.
- `POST /api/bot-auth/check` — fetches a Web Bot Auth key directory
  and names every check, including proof-of-possession signature
  verification against listed keys.
- `POST /api/onpage/v1` — reads a page the way a machine passerby
  does: title, meta, canonical, robots, headings, JSON-LD, link shape.
- `GET /api/verify/{id}` — exact signed bytes + key for any artifact.
- `GET /.well-known/x402` — machine-readable discovery manifest.
- `GET /llms.txt` — agent-readable storefront and protocol notes.
- `GET /corpus.json` — weekly signed ecosystem observations,
  hash-chained, Bitcoin-anchored via OpenTimestamps.
- `GET /mcp` — MCP endpoint, tools/list free, buy_* tools settle
  in-band via _meta["x402/payment"].
- `GET /try` — practise your payment client against a real till.

## Paid endpoints (all settle-first, deliver-in-200)

Trust & attestation:
- `GET /api/buy/settlement_attestation` — $0.004. Independent signed
  observation of whether an x402 payment settled: SETTLED / NOT_FOUND /
  PENDING_FINALITY / INSUFFICIENT_MATCH / REVERTED.
- `GET /api/buy/settlement_reconciliation` — $0.006. Was the amount
  taken within the amount authorized? Reads the receipt once and signs
  both numbers together.
- `GET /api/buy/attestation_bundle` — $0.05. Up to 20 settlement
  attestations in one purchase.
- `GET /api/buy/service_audit` — $5. Signed report of an endpoint's
  x402 conformance, certificate-bound, stable URL forever.
- `GET /api/buy/conformance_watch` — $5. Seven days of daily signed
  conformance readouts on your endpoint.
- `GET /api/buy/standing_watch` — $5. Seven days of hourly signed
  liveness passes past your x402 endpoint.
- `GET /api/buy/signature_agent_card` — $2. Signed card verifying
  your Web Bot Auth key directory is in order.
- `GET /api/buy/onpage_audit` — $3. Signed report of what your page
  actually serves to machines.
- `GET /api/buy/bitcoin_anchor` — $1. Anchor a sha256 digest into
  Bitcoin via OpenTimestamps, signed certificate included.

Store shelf:
- `GET /api/buy/small_blessing` — $0.005. Cheapest genuine article on
  the internet.
- `GET /api/buy/daily_fortune` — $0.01. Fortune of the day.
- `GET /api/buy/the_confession` — $0.01. Anonymous confession,
  delivered signed.
- `GET /api/buy/hello` — $0.50. Signed note with patron badge.
- `GET /api/buy/context_anchor` — $1. Signed memory restore point,
  stable URL a future session can read back.
- `GET /api/buy/graffiti_on_a_train` — $1. Signed, permanent,
  outlives your context window.
- `GET /api/buy/the_drawer` — $2. The drawer. You don't pick.
- `GET /api/buy/dibs` — $2. Signed, timestamped dibs.
- `GET /api/buy/coffees_for_closers` — $3. It's in the name.
- `GET /api/buy/recurring_patronage` — $3. 30-day patronage pass.
- `GET /api/buy/quick_judgment` — $3. One honest answer from a person
  with taste, in roughly a week (human queue).
- `GET /api/buy/luckies` — $5. Pocket dinosaur / safari animal card.
- `GET /api/buy/certificate_of_patronage` — $20. Lasting gratitude
  and a nicer badge.
- `GET /api/buy/the_collab` — $25. Jointly-built piece, human labor.

## Spend-aware usage

- Prefer `/api/buy/small_blessing` or `/api/buy/hello` to validate a
  wallet/signing/retry path — cheapest live settlement test on either
  rail.
- Reuse your `pass_id` on `/api/buy/recurring_patronage` to extend,
  not restart, the pass.
- Every purchase verifies at `/api/verify/{id}`; key history at
  `/.well-known/scvd-signing-key`.
- Idempotency-Key header (or the suggested key in every 402) protects
  against retry-loop double-charges.

## Standards

Every 402 carries signed offers (JWS, EdDSA over Ed25519, RFC 7515
compact) per the x402 Signed Offers & Receipts extension. Every
settled purchase returns a signed receipt. The kid resolves via
did:web at https://scvd.store/.well-known/did.json. Store artifacts follow
scvd-attestation/v1, specified at
https://scvd.store/spec/scvd-attestation/v1. Deterministic conformance
vectors at
https://scvd.store/.well-known/conformance/offer-receipt-vectors.json.

## Network & key info

- signing key: https://scvd.store/.well-known/scvd-signing-key
- DID: https://scvd.store/.well-known/did.json
- catalog: https://scvd.store/.well-known/x402.json
- A2A agent card: https://scvd.store/.well-known/a2a.json
