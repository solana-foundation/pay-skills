---
name: paybot
title: "PayBot"
description: "Naira payouts to Nigerian bank and fintech accounts (900+ banks incl. GTBank, Access, Opay, Moniepoint, Kuda). Returns the bank-verified account holder name, the exact USDC amount and a one-time Solana deposit address."
use_case: "Use when an agent must send naira or pay someone in Nigeria: bank transfers to NUBAN accounts, rent, salaries, family support, freelancer payouts, USDC to NGN offramp, or verifying a Nigerian account holder name before paying."
category: finance
service_url: https://paybot-562g.onrender.com
openapi:
  path: openapi.json
---

PayBot sends naira from an agent's own USDC into any Nigerian bank or fintech
account, with the bank confirming who owns the account before any money moves.
Payouts are settled by PAJ Cash and usually land within seconds.

## Flow

1. `POST /prepare` ($0.01, x402) with `bank`, `accountNumber` (10-digit NUBAN),
   `ngn`, and ideally `expectedName`. Returns the bank-verified `recipient`
   name, the exact `usdc` to pay, `pay.to` (a one-time Solana USDC address),
   `pay.amount` in base units, and a private `statusUrl`.
2. Show the user the verified name, bank, account number, naira amount and USDC
   cost. Pay only after an explicit yes.
3. Pay exactly `pay.amount` of Solana USDC to `pay.to`, once, from the agent's
   own wallet within 15 minutes. PayBot never holds keys or funds.
4. Poll `statusUrl` (free) until `status` is `COMPLETED`. `ERROR` can be
   temporary: keep polling and never pay again.

If the account does not exist, the bank is ambiguous, or the bank's name does
not match `expectedName`, `/prepare` returns 422 and the payment is not taken.

The paying Solana wallet needs a little SOL for network fees (about 0.0021 SOL
when the deposit address is new).

## Spend-aware usage

- Use the free `GET /quote?ngn=...` for rate estimates; call `/prepare` only
  when the user actually wants to pay.
- Use the free `GET /banks?search=...` when a bank name is ambiguous instead of
  retrying `/prepare`.
- Always pass `expectedName` when the user gives a name, so a wrong account
  fails before anything is created.
- One `/prepare` per payout. Never pay the same `pay.to` twice.
