---
name: preflight
title: "Utilia Solana Preflight"
description: "Pay-per-call Solana transaction simulation, failure diagnostics, priority-fee estimates, and token-risk analysis. Structured results over x402 with no account, API key, or subscription."
use_case: "Use when an AI agent needs to simulate a Solana transaction before signing or broadcasting, diagnose a failed signature, choose a priority-fee bid, or check an unfamiliar SPL or Token-2022 mint for authority and concentration risks."
category: devtools
service_url: https://api.utilia.ink
version: v1
openapi:
  path: openapi.json
---

Utilia gives autonomous agents four narrow Solana preflight and diagnostic
operations without requiring an account or API key. Each paid call settles in
USDC on Solana mainnet through x402 v2 and returns structured JSON suitable for
automated decisions.

## Capabilities and pricing

| Operation | Price | Use |
|---|---:|---|
| `GET /v1/fees/priority` | $0.002 | Estimate network-wide or writable-account-local priority fees. |
| `GET /v1/transaction/{signature}` | $0.004 | Explain confirmation, balances, logs, compute use, and failures. |
| `GET /v1/token/{mint}` | $0.006 | Inspect authorities, Token-2022 controls, concentration, and risk flags. |
| `POST /v1/transaction/simulate` | $0.008 | Simulate a serialized transaction with a fresh blockhash before broadcast. |

## Spend-aware usage

- Use the $0.002 fee endpoint only when a transaction is close to broadcast;
  repeat the `account` query parameter for its writable accounts to obtain a
  localized estimate.
- Simulate once after the transaction is fully assembled. Reuse the resulting
  classification instead of repeatedly simulating an unchanged payload.
- Analyze a signature only after it is confirmed or has failed; pass the exact
  signature rather than polling the endpoint.
- Check token risk once per mint and cache the result until the mint, freeze, or
  Token-2022 authority state changes.
