---
name: x402rent
title: "x402rent"
description: "Pay-per-call Solana empty-ATA rent recovery. Returns an unsigned transaction that closes every empty Associated Token Account owned by a wallet, reclaiming ~0.002 SOL per account. Wallet signs and submits — no key custody."
use_case: "Use to reclaim SOL rent locked in empty token accounts after trading. Returns an unsigned tx the wallet signs itself; service never touches keys. Ideal post-trade housekeeping for agent traders."
category: other
service_url: https://x402rent.vercel.app
openapi:
  url: https://x402rent.vercel.app/openapi.json
---

Pay-per-call Solana empty-ATA rent recovery for AI agents and trading bots.

Given a wallet, returns an **unsigned** Solana transaction that closes every
empty SPL Token Program account owned by that wallet, reclaiming ~0.002 SOL
(~$0.40 at common SOL prices) of rent per closed account. The wallet itself
is fee payer AND rent recipient; the service holds no private keys.

## What you get back

```json
{
  "n_empty_atas_found": 47,
  "n_in_returned_tx": 25,
  "sol_recoverable": 0.050982,
  "tx_base64": "<unsigned base64 tx>",
  "recent_blockhash": "...",
  "fee_payer": "<wallet>",
  "rent_recipient": "<wallet>"
}
```

Sign and submit `tx_base64` via your Solana client. Up to 25 closes per
returned tx (Solana 1232-byte tx-size limit); call again to drain remainder
if `n_empty_atas_found > n_in_returned_tx`.

## Scope and limits

- SPL Token Program (legacy) accounts only — Token-2022 not in v0
- Max 25 closes per returned tx; multi-call for full drain on heavy wallets
- Wallet must sign the returned transaction; service never holds keys

## Spend-aware usage

- Call once per wallet at maintenance intervals (post-session, end-of-day, or when the bot's SOL balance falls below a threshold) — not on a polling loop.
- When `n_empty_atas_found == 0`, skip future calls until the agent has accumulated new dust positions worth closing.
- For wallets with many empty ATAs, call repeatedly until `n_empty_atas_found == 0` — each call returns up to 25 closes.
- Each call costs $0.05 USDC and recovers `n_in_returned_tx × ~0.002 SOL`. Net positive when ≥ 1 account is closed at common SOL prices.

## Pricing

- `GET /close-empty-atas?wallet=<pubkey>` — $0.05 USDC on Solana mainnet via PayAI facilitator (gasless for buyers — PayAI sponsors gas).
