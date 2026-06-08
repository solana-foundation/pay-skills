---
name: gnosis-card-x402
title: "Gnosis Pay Card via x402"
description: "Pay USDC on Solana or Base to top up a Gnosis Pay Safe, or pay a one-time fee to get a fully managed Gnosis Pay virtual card (KYC, Safe deployment, card issuance). Funds bridge to Gnosis Chain in ~1–3 minutes via Relay.link."
use_case: "Use to fund a Gnosis Pay Safe from a Solana or Base wallet without manual bridging, or to onboard a user to a Gnosis Pay virtual card. Agents can quote, pay, and poll status in a single agentic loop."
category: payments
service_url: https://card.hfsp.cloud
openapi:
  path: openapi.json
---

gnosis-card-x402 bridges USDC from Solana or Base to Gnosis Chain via x402 payment — no manual bridging, no CEX, no custody.

Payment is accepted on **Solana mainnet** (primary) and **Base mainnet**. The chain is detected from the `X-Payment-Chain` header or from the tx hash format.

## Products

### 1. Safe Top-Up (variable amount)

Top up any Gnosis Pay Safe directly from a Solana or Base wallet.

- **Minimum:** $1 USDC
- **Maximum:** $10,000 USDC
- **Service fee:** 0.5% of bridged amount
- **Bridge fee:** ~$0.03–$0.10 flat (Relay.link)
- **Destination tokens:** USDC (native Circle), EURe, GBPe
- **Estimated time:** 1–3 minutes

### 2. Managed Onboarding (fixed fee)

Full Gnosis Pay account setup: SIWE authentication, Sumsub KYC, Gnosis Safe deployment, and virtual card issuance.

- **Fee:** configurable (typically $5–$25 USDC one-time)
- **Requirements:** EVM wallet + government ID for KYC
- **Card:** Visa virtual card, usable at 80M+ merchants

## Spend-aware usage

- Always call `GET /api/card/topup/quote` before paying — it returns exact amounts, fees, and the `payTo` address.
- Pass `sourceChain=base` to pay from Base instead of Solana.
- After POST /api/card/topup, poll `GET /api/card/topup/:orderId` until `status === "fulfilled"`.
- One Solana tx signature covers exactly one top-up; replay is rejected with 409.
