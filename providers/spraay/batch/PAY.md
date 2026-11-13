---
name: batch
title: "Spraay Batch Payments"
description: "Native batch payments on Solana — send SOL or any SPL token to thousands of wallets in one non-custodial x402 call. The agent signs the returned transactions; the gateway never holds funds. For airdrops, stablecoin payroll, and agent disbursement."
use_case: "Use when an agent must pay many Solana recipients at once — airdrops, SPL token distributions, stablecoin payroll, revenue splits, or paying a swarm of sub-agents — instead of sending one transfer per recipient."
category: finance
service_url: https://gateway-solana.spraay.app
openapi:
  path: openapi.json
---

Spraay is batch-payment infrastructure for the agent economy. One paid call
fans a single token transfer out to hundreds or thousands of Solana wallets, so
an agent that needs to *pay out* — rather than pay in — does it in one request
instead of N.

While most x402 services are things an agent **buys**, Spraay is the rail an
agent uses to **distribute**: airdrops, stablecoin payroll, marketplace
settlements, revenue splits, and disbursement to fleets of sub-agents. It is the
payout complement to the pay-per-call economy.

- **Native Solana execution.** Sends real SOL and any SPL token directly to
  Solana wallets — not a wrapped or cross-chain abstraction.
- **Non-custodial.** Endpoints return **unsigned, serialized transactions** that
  the agent's own wallet signs and submits. Spraay never holds keys or funds.
  The `sender` you pass is the source of funds and the fee payer.
- **0.3% protocol fee** is included in the returned transaction as a transfer to
  the Spraay treasury. Plus a flat x402 micro-fee per call. No accounts, no keys.

## Endpoints

- `GET /solana/quote` — estimate the cost of a batch by recipient count and
  token before committing. Cheap.
- `POST /solana/batch-send-sol` — build a batch SOL transfer to `recipients[]`,
  funded by `sender`. Returns unsigned transaction(s) to sign and submit.
- `POST /solana/batch-send-token` — same for any SPL token (`mint`).

## Spend-aware usage

- **Batch, don't loop.** Put every recipient into a single batch-send call. One
  paid request replaces one-transfer-per-recipient — that is the entire value of
  this skill, and the larger the list the more it saves.
- **Quote before send.** Call `/solana/quote` to confirm recipient count and
  cost before the priced batch-send call.
- **Submit promptly.** Returned transactions carry a recent blockhash with a
  short validity window — sign and submit them right away rather than holding.
