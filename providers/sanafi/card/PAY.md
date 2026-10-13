---
name: card
title: "Sanafi Card"
description: "Get a crypto card for your user, agent-driven. Verify an email OTP to auto-create an account and get an API key (free), then pay a one-time 10 USDC via x402 to create the card and complete KYC. Also exposes live token prices."
use_case: "Use to create or get a crypto card for a user, onboard a user to a Sanafi card, complete card KYC, check card balance and spending power, list card transactions, top up a card with USDC, and look up live Solana token prices."
category: finance
service_url: https://api.sana.bot
openapi:
  path: openapi.json
---

Agent-driven Sanafi card onboarding + operations, plus public token-price info.
Account and API keys are free (email-OTP gated); the only payment is a one-time
10 USDC card-creation fee over x402.

## Flow

1. `POST /card/register/otp` `{ email }` — Sanafi emails a one-time code.
2. `POST /card/register/verify` `{ email, otp, wallet }` — verify the code →
   auto-creates the account (if new) and returns a one-time **`api_key`** the
   agent must save. A user may hold up to **3** keys (one per agent).
3. `POST /card/create` *(API key)* — **x402-gated**: with no payment it returns
   HTTP **402** with a Solana USDC challenge for the 10 USDC card fee. The agent
   pays — including the challenge **`memo`** as an on-chain SPL memo (this binds
   the payment to the account; a payment without the matching memo is rejected) —
   and replays with the proof in `X-Payment`. On success Sanafi starts KYC and
   returns a **`kyc_link`** to share with the user.
4. `GET /card/status` *(API key)* — poll the onboarding state machine. States:
   `registered` (account exists, no card yet — call `/card/create`) →
   `kyc_pending` → `issuing` → `card_active`. A terminal **`failed`** means KYC
   was rejected or issuance failed; the 10 USDC fee is refunded and the user can
   restart from `/card/create` — `failed` is **not** a permanent block.
5. `GET /card`, `/card/balance`, `/card/transactions` *(API key)* — read the card
   once active. `POST /card/deposit` `{ amount }` *(API key)* moves USDC from the
   user's Sanafi **custodial wallet** onto the card's deposit address (this is
   **not** x402 — it spends the user's own funds, requires agent-signing to be
   enabled on the account, and is bounded by the key's spend limit) and returns
   the broadcast Solana tx **`signature`**.

`GET /assets` is public (no key, no payment) — live token prices.

## Spend-aware usage

- Account + keys are free; the only charge is the one-time 10 USDC card fee.
- The `api_key` is shown once — persist it; it is the durable credential for all
  later calls and for recovery after a restart.
- `POST /card/create` is idempotent per account — safe to retry without paying or
  starting KYC twice.
- Poll `GET /card/status` instead of re-calling `/card/create`.
- If `/card/status` returns **`failed`**, KYC/issuance didn't pass — the card fee
  is refunded; surface the outcome to the user, who can retry `/card/create`.
- `POST /card/deposit` spends the user's own custodial USDC (not x402) — confirm
  the user intends to fund the card, and read back the returned `signature`.
- A second agent for the same user: verify another email OTP to get its own key
  (up to 3) — don't re-create the account.
