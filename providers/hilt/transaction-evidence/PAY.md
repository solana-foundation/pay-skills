---
name: transaction-evidence
title: "Hilt Solana Transaction Evidence"
description: "Pay-per-request normalized evidence for finalized Solana transactions, including signers, invoked programs, SOL and token balance changes, parsed transfers, fees, timestamps, status and explicit ambiguity warnings."
use_case: "Use for inspecting a finalized Solana transaction, normalizing payment evidence, reconciling transfer facts, identifying signers and programs, or comparing exact SOL and token balance changes without operating a transaction parser."
category: data
service_url: https://www.hilt.so
version: v1
openapi:
  path: openapi.json
---

Hilt Solana Transaction Evidence turns one finalized mainnet transaction signature into a compact machine-readable evidence record.

The endpoint costs 0.05 USDC per request through standard x402 V2 `exact` settlement on Solana. The buyer needs no Hilt account or API key. Send a fresh `request_id` for each new paid lookup and reuse it only when retrying that same operation.

The response reports public-chain facts. It does not certify that a wallet, token, transaction, counterparty, or payment is universally safe, legitimate, or legally compliant. Apply expected-recipient, expected-asset, expected-amount, business-context, and risk policies separately.

## Spend-aware usage

- Reuse a result for the same finalized signature instead of paying for repeated lookups.
- Use a fresh `request_id` for a genuinely new lookup; preserve it only across retries of that lookup.
- Inspect `status` and `warnings` before treating balance changes as a completed payment.
- Prefer the normalized balance and transfer arrays over making additional RPC calls when they already answer the task.
