---
name: verify
title: "UZPROOF"
description: "Verify a Solana wallet performed a specific on-chain action (swap, hold, stake, LP, mint, NFT) across 15 protocols. Returns a verdict plus a 23-signal anti-sybil score. Gasless x402+MPP, $0.05 USDC per call on mainnet."
use_case: "Use for verifying a Solana wallet performed a specific DeFi action (swap, hold, stake, LP, mint), gating quests by real on-chain usage, anti-sybil scoring before paying token rewards. Call from pay claude with only USDC — no SOL needed."
category: identity
service_url: https://uzproof.com
openapi:
  url: https://uzproof.com/openapi.json
---

# UZPROOF

UZPROOF is the first Proof-of-Use Attestor on the Solana Attestation Service.
Each `/api/verify` call answers a single question: did this wallet actually
perform this on-chain action with these parameters? The answer is a verdict
plus a 23-signal anti-sybil score, billed at $0.05 per verification in USDC
on Solana mainnet.

The premium price is intentional. UZPROOF is the trust layer for protocols
paying out rewards. A sybil farmer probing 1,000 wallets pays $50; 10,000
wallets pays $500. That cost compounds with the on-chain rent of farming
fake wallets — the result is an economic moat: high-value verifications
stay reliable, low-value spam stays uneconomic.

## When to use

- **Reward gating** — before paying out tokens to a quest completer, verify
  the on-chain action actually happened.
- **Airdrop anti-sybil** — filter out wallet farms before snapshot.
- **Trust scoring** — get a multi-signal reputation score on a wallet
  before granting access to a feature.
- **Cross-protocol identity** — confirm a wallet is a real user across
  Jupiter, Marinade, Sanctum, Orca, Raydium, Drift, Drift Vaults, Kamino,
  MarginFi, Meteora, Jito, Tensor, Magic Eden, Metaplex, and SPL Token.

## Spend-aware usage

- Cache verdicts per `(wallet, protocol, action)` for 24 hours on closed
  actions (a completed swap, a hold past its threshold). The verdict is
  stable once the action is closed.
- **Free reads** — use these for the acquisition funnel before reaching
  for paid verify:
  - `GET /api/sas/status` — on-chain SAS attestation status for a wallet
  - `GET /api/tokens/info` — SPL token metadata + supply
  - `GET /api/contracts/detect` — list all known Solana programs, or
    detect a single program with `?programId=…` (POST also available
    for SDKs that prefer JSON body — same response shape)
- For batch reward payouts, dedupe the wallet list first — paying $0.05
  per duplicate wallet is the most common waste.

## Authentication

Three modes:

- **x402 pay-per-call** (default, no account). Send a request without
  payment, receive a `402 Payment Required` with Solana USDC payment
  instructions, settle on-chain (~400 ms), retry with the settlement
  token in the `X-Payment` header.
- **MPP** (opt-in via `Accept: application/x-mpp`). Receive a
  `WWW-Authenticate: solana method="solana" intent="charge" id="..."
  realm="uzproof.com" expires="..." request="<base64url(JCS(challenge))>"`
  challenge. Retry with `Authorization: solana <base64url(JCS(MppCredential))>`.
  Designed for `pay claude` agentic flows.
- **API key**. Use `Authorization: Bearer uz_live_<key>` for higher rate
  limits and included verifications under a monthly subscription. Sign up
  at https://uzproof.com.

## Protocols

UZPROOF is the first verification provider in the pay-skills catalog
that speaks both **x402** and **MPP** (Merchant Payment Protocol —
draft-solana-charge-00) on the same endpoint. Negotiation is via the
`Accept` header.

| Protocol | Trigger | 402 body | Retry header | Gasless |
| --- | --- | --- | --- | --- |
| x402 | default | `{x402Version:2,schemes:[…]}` | `X-Payment` | no |
| MPP  | `Accept: application/x-mpp` | `{challenge,expires,id}` + `WWW-Authenticate: solana …` | `Authorization: solana …` | yes |

**Gasless via MPP feePayer.** When the MPP challenge advertises
`methodDetails.feePayer: true`, the agent submits a partially-signed
`VersionedTransaction` whose feePayer slot is UZPROOF's pubkey
(`methodDetails.feePayerKey`). UZPROOF co-signs as feePayer, broadcasts
to mainnet, confirms, and answers the verify request. The agent only
needs USDC — no SOL on hand. Tx validation enforces a strict
`ALLOWED_TX_PROGRAMS` whitelist (SPL Token v1, Token-2022,
ComputeBudget, ATA program — no SystemProgram, no custom calls).
Per-tx and daily SOL caps protect the feePayer wallet against
sybil-farm abuse.

## Endpoint summary

| Method | Path | Price | Purpose |
| --- | --- | --- | --- |
| POST | /api/verify | $0.05 USDC | Single-action verify + 23-signal score |
| GET | /api/sas/status | free | On-chain SAS attestation read |
| GET | /api/tokens/info | free | SPL token metadata |
| GET | /api/contracts/detect | free | List known programs / detect by `?programId=` |
| POST | /api/contracts/detect | free | Same as GET, for SDKs that prefer JSON body |

Full schema: https://uzproof.com/openapi.json
