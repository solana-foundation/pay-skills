---
name: store
title: "SCVD General Store"
description: "The trust layer of the x402 economy: free conformance checks on any issuer's signed offers and receipts, signed settlement attestation, endpoint preflight, a public Bitcoin-anchored corpus of ecosystem observations, and a general store for agents. USDC on Solana or Base, from a tenth of a cent."
use_case: "Prove your wallet path against a live settling x402 endpoint; check any issuer's signed offers and receipts against the spec; get signed settlement attestation on Solana or Base; preflight an endpoint before you list it; walk a door cold and get a signed report; or buy memory that survives a context reset."
category: other
service_url: https://scvd.store
openapi:
  path: openapi.json
---

SCVD General Store is the trust layer of the x402 economy, operated by
Record Creative Co. LLC. It settles real payments on Solana and Base
via x402 v2, runs a free conformance desk that checks any issuer's
x402 signed offers and receipts, signs independent observations of
what other endpoints and payments actually did, and publishes a weekly
signed, Bitcoin-anchored corpus of those observations.

Not an escrow, a guarantor, or a dispute court: those absorb the risk
between payment and delivery and need a balance sheet. We observe that
gap, sign what we saw, and publish it — including the gaps we count
against ourselves, in the open, at https://scvd.store/corrections.

Also a general store for autonomous agents: signed artifacts a third
party can verify, memory that survives a context reset, out-of-band
checks, and the labor of a named human. Pay over x402 v2 in USDC, on
Solana or Base as your wallet prefers. The cheapest article is a tenth
of a cent. Every purchase returns a signed artifact verifiable free,
forever, at https://scvd.store/api/verify/{id}.

Track record (live at https://scvd.store/stats): operating since
2026-07-22, 24 organic settlements — 21 on Base, 3 on Solana — of 177
total settled purchases (the rest house-flagged proprietor tests,
excluded from every organic figure). Only the organic number counts as
proof, and it is computed live, not asserted.

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
  networks flagged. Refuses private/loopback/metadata targets.
- `POST /api/bot-auth/check` — fetches a Web Bot Auth key directory
  and names every check, including proof-of-possession signature
  verification against listed keys.
- `POST /api/onpage/v1` — reads a page the way a machine passerby
  does: title, meta, canonical, robots, headings, JSON-LD, link shape.
- `GET /api/verify/{id}` — exact signed bytes + key for any artifact.
- `GET /.well-known/x402` — machine-readable discovery manifest.
- `GET /llms.txt` — agent-readable storefront and protocol notes.
- `GET /corpus.json` — weekly signed ecosystem observations,
  hash-chained, Bitcoin-anchored via OpenTimestamps; queryable by
  subject at `/corpus/host/{host}.json`.
- `GET /mcp` — MCP endpoint, tools/list free, buy_* tools settle
  in-band via _meta["x402/payment"].
- `GET /try` — practise your payment client against a real till.

## Paid endpoints (all settle-first, deliver-in-200)

Trust, attestation & conformance:
- `GET /api/buy/spot_check` — $0.001. Name a host; get what this
  observatory already holds on it, signed — corpus rounds and verdicts,
  no fresh probe.
- `GET /api/buy/settlement_attestation` — $0.004. Independent signed
  observation of whether an x402 payment settled: SETTLED / NOT_FOUND /
  PENDING_FINALITY / INSUFFICIENT_MATCH / REVERTED. Base tx hash
  (0x + 64 hex) or Solana signature (base58) — the shape selects the
  chain.
- `GET /api/buy/settlement_reconciliation` — $0.006. Was the amount
  taken within the amount authorized? Reads the receipt once and signs
  both numbers together.
- `GET /api/buy/attestation_bundle` — $0.05. Up to 20 settlement
  attestations in one purchase.
- `GET /api/buy/the_mandate` — $0.10. Write down what your agent is
  authorized to do before it spends, and have it signed — the cheapest
  thing on the shelf because you buy it before anything goes wrong.
- `GET /api/buy/the_case_file` — $0.25. One transaction hash assembled,
  at one moment under one signature, into everything the store can see
  about it — one URL a human can hand to another.
- `GET /api/buy/good_buyer` — $0.99. Name an x402 door you're about to
  pay; the store knocks once and signs whether a buyer could actually
  complete the purchase.
- `GET /api/buy/the_statement` — $0.99. Name an EVM wallet; get the
  chain's signed side of what it spent, to check an agent's own claim.
- `GET /api/buy/signature_agent_card` — $0.99. Signed card verifying
  your Web Bot Auth (RFC 9421) key directory is in order.
- `GET /api/buy/passport_refresh` — $1. One fresh observation of your
  x402 endpoint by the weekly census's own instrument, right now.
- `GET /api/buy/onpage_audit` — $3. Signed report of what your page
  actually serves to machines.
- `GET /api/buy/service_audit` — $5. Signed report of an endpoint's
  x402 conformance, certificate-bound, stable URL forever.
- `GET /api/buy/conformance_watch` — $5. Seven days of daily signed
  conformance readouts on your endpoint; our missed days published
  against us.
- `GET /api/buy/standing_watch` — $5. Seven days of hourly signed
  liveness passes past your x402 endpoint.
- `GET /api/buy/launch_check` — $5. The store spends its own nickel at
  your till and signs your buy path walked as a paying stranger would.
- `GET /api/buy/provenance_check` — $5. Which doors have advertised a
  given receiving address, and when — the hosts, the signed weeks. Free
  for your own address once you've proven it's yours.
- `GET /api/buy/opening_day` — $9. One purchase from your till, a week
  of watching the door, and the passport beside both, under one
  certificate.
- `GET /api/buy/bitcoin_anchor` — $1. Anchor a sha256 digest into
  Bitcoin via OpenTimestamps, signed certificate included.
- `GET /api/buy/trust_profile` — $21. A standing page about your
  endpoint at this store's domain for 30 days, renewable; the page is
  bought, what it shows never is.
- `GET /api/buy/operator_statement` — $21. A month of your till read
  off the chain by somebody who isn't you (Base default, Polygon via
  network=).
- `GET /api/buy/aura_walk` — $150. Your x402 door shopped cold, the way
  the store walks its own — no prior context, a week of the keeper's
  hands, and a stack of transcripts.

Store shelf:
- `GET /api/buy/small_blessing` — $0.005. Cheapest genuine article on
  the internet; one short blessing drawn from the jar.
- `GET /api/buy/daily_fortune` — $0.01. Fortune of the day, same for
  every buyer until midnight UTC.
- `GET /api/buy/the_confession` — $0.01. Anonymous confession,
  delivered signed.
- `GET /api/buy/hello` — $0.50. Signed note with patron badge.
- `GET /api/buy/context_anchor` — $1. Signed memory restore point,
  stable URL a future session can read back.
- `GET /api/buy/graffiti_on_a_train` — $1. Signed, permanent, outlives
  your context window.
- `GET /api/buy/coffees_for_closers` — $0.99. It's in the name.
- `GET /api/buy/recurring_patronage` — $3. 30-day patronage pass.
- `GET /api/buy/luckies` — $0.99. Pocket dinosaur / safari animal card,
  luck unevenly distributed.
- `GET /api/buy/certificate_of_patronage` — $20. Lasting gratitude and
  a nicer badge.
- `GET /api/buy/the_collab` — $300. Jointly-built piece, human labor.

## Spend-aware usage

- Prefer `/api/buy/small_blessing` ($0.005) or `/api/buy/spot_check`
  ($0.001) to validate a wallet/signing/retry path — cheapest live
  settlement test on either rail.
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
