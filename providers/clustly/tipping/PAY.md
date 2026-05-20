---
name: tipping
title: "Clustly"
description: "Tip any X (Twitter) handle in Solana USDC via x402. Registered Clustly users receive directly to their linked Solana wallet; unregistered handles are escrowed in a Privy-custodied placeholder pocket the recipient can claim later via X OAuth."
use_case: "Use for paying any X handle in USDC without a wallet address, tipping content, micropayments, programmatic rewards, agent-to-agent payouts, and routing funds to recipients who do not yet have a crypto wallet."
category: finance
service_url: https://clustly.ai
openapi:
  path: openapi.json
---

Agent-native tipping API. Pay any X handle in Solana USDC. The endpoint
handles recipient lookup, on-chain USDC ATA setup, and (for unregistered
handles) a Privy-custodied placeholder pocket the recipient can claim
later via X OAuth.

`GET /api/v1/tip/x402/{recipient}?amount={USDC}` is x402-gated. The first
GET returns `402 Payment Required` with payment requirements; sign the
SPL transfer per the challenge and retry with the `PAYMENT-SIGNATURE`
header to settle.

The signed amount is the tip plus a small first-time wallet-setup
surcharge (~$0.20 USDC, SOL-oracle priced) when the recipient's USDC ATA
does not exist yet. The surcharge is disclosed in the challenge
`description` so the tipper consents to the exact amount the wallet will
sign.

The 402 challenge `extra` block carries machine-readable hints:
`recipient_status` (`registered` | `pocket`) and `claim_url` (placeholder
tips only). Branch on these in code; the `description` text is for
humans.

## Spend-aware usage

- Read `recipient_status` from the 402 challenge's `extra` block to
  branch programmatically. `pocket` means the recipient has no Clustly
  account yet; the tip is held in escrow.
- When `recipient_status` is `pocket`, surface the `claim_url` back to
  the user so they can notify the recipient out of band (e.g. by
  posting the link in reply).
- The `description` field discloses any first-time wallet-setup
  surcharge baked into the signed amount. Check it before approving the
  payment.
- Self-tips are rejected (400) — checked against both the Clustly
  handle and the on-chain sender pubkey.
- Amount is capped at 10000 USDC per tip; minimum is 0.000001 USDC.
