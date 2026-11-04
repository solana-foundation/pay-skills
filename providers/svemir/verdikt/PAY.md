---
name: verdikt
title: "Svemir Verdict Oracle"
description: "Payment-gated verdict oracle for x402 agents: settles your 0.01 USDC x402 payment natively on Base or Solana mainnet, then returns a verdict on a payment receipt — finality, replay status, payee binding — under a public policy."
use_case: "Use when an agent must confirm an on-chain USDC payment actually settled, is final on L1, was not replayed, and is bound to the expected payee, before releasing files, shipping goods, or granting API access."
category: ai_ml
service_url: https://ubuntu-s-1vcpu-512mb-10gb-fra1.tailefd357.ts.net
version: v0.5
openapi:
  path: openapi.json
---

Self-sovereign x402 gateway: `POST /verdikt` speaks standard x402 `exact`
payments on **two networks** — Base (EIP-3009 TransferWithAuthorization on
native USDC) and Solana (client-signed SPL transfer, server introspects and
settles). The 402 challenge lists both `accepts` entries, so any x402 client
can pay with whichever chain its wallet holds.

Without a POST body the endpoint settles your payment and returns a
self-verdict on the payment itself (`sudNad: samosud`) — the minimal paid call
used for health probing. With a JSON receipt (`{ txHash, from, primalac,
iznos, nonce, ... }`) it judges a **third-party** payment receipt and returns
its status. Every settled call is appended to an on-disk evidence ledger.

## Spend-aware usage

- `GET /verdikt` is free and returns the 402 challenge with current pricing
  and accepted networks; `GET /zdravlje` is a free health probe. Use these
  before paying.
- A paid call with no body costs exactly 0.01 USDC and proves end-to-end
  payment works; send it once, not in a loop.
- Receipt verdicts (`txHash` body) are for judging *someone else's* payment
  proof — one verdict per receipt, results are deterministic per chain state.
- Rate limit is 12 paid attempts per minute per IP.
