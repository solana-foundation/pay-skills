---
name: gnosis-card-x402
title: "Gnosis Pay Safe Top-Up via x402"
description: "Pay any amount of USDC on Solana or Base to top up a Gnosis Pay Safe. Funds arrive on Gnosis Chain in ~1–3 minutes via Relay.link. Service fee 0.5%, no custody."
use_case: "Use to fund a Gnosis Pay Safe from a Solana or Base wallet without manual bridging. An agent can get a quote, pay the exact amount, and poll for confirmation — all in a single agentic loop."
category: payments
service_url: https://card.hfsp.cloud
openapi:
  path: openapi.json
---

gnosis-card-x402 bridges USDC from Solana or Base to Gnosis Chain via x402 payment and Relay.link — no manual bridging, no CEX, no custody.

Payment is accepted on **Solana mainnet** (primary) and **Base mainnet**. The source chain is detected from the `X-Payment-Chain` header or from the tx hash format.

## Product: Safe Top-Up (variable amount)

Top up any Gnosis Pay Safe directly from a Solana or Base wallet.

- **Minimum:** $1 USDC
- **Maximum:** $10,000 USDC  
- **Service fee:** 0.5% of bridged amount
- **Bridge fee:** ~$0.03–$0.10 flat (Relay.link)
- **Destination tokens:** USDC (native Circle), EURe, GBPe
- **Estimated time:** 1–3 minutes

## Spend-aware usage

1. `GET /api/card/topup/quote?amount=50&safeAddress=0x...&currency=USDC&sourceChain=solana` — get exact fees and `payTo` address before committing
2. Send the quoted amount of USDC to the `payTo` address on Solana (or Base)
3. `POST /api/card/topup` with `X-Payment: <tx-sig>` and body `{ amount, safeAddress, currency, sourceChain }` — get `orderId`
4. `GET /api/card/topup/:orderId` — poll until `status === "fulfilled"`

One Solana signature covers exactly one top-up. Replay is rejected with 409.
