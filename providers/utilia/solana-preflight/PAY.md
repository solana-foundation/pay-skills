---
name: solana-preflight
title: "Utilia Solana Preflight"
description: "Live Solana priority-fee quantiles, unsigned transaction simulation, confirmed-failure diagnosis, token mint-risk evidence, and PDF-to-Markdown results."
use_case: "Use immediately before building or submitting Solana transactions, when choosing compute-unit price, validating an unsigned transaction, diagnosing a failed signature, or screening a token mint."
category: devtools
service_url: https://api.utilia.ink
version: v1
openapi:
  path: openapi.json
---

Utilia is a read-only preflight and post-transaction evidence service for
autonomous Solana agents. No account, subscription, or API key is required.
Paid routes use x402 v2 exact USDC payments on Solana mainnet.

The lowest-cost recurring signal is `GET /v1/fees/priority` at $0.002 per call.
It returns timestamped low, medium, high, and urgent micro-lamport quantiles,
optionally localized to writable accounts. Simulation costs $0.008; transaction
diagnosis costs $0.004; token-risk inspection costs $0.006; PDF-to-Markdown
conversion costs $0.005.

## Spend-aware usage

- Poll priority fees no more often than the transaction builder needs; twelve
  minutes gives five observations per hour and costs $0.01.
- Localize fee estimates only to the writable accounts in the transaction,
  capped at 20 addresses.
- Simulate once after the transaction is fully built and before requesting a
  signature; rebuild only when the returned blockhash or classification demands it.
- Diagnose a confirmed signature once and reuse the structured classification
  instead of repeatedly fetching the same transaction.
- Cache token-risk evidence until mint authority, freeze authority, supply, or
  holder distribution materially changes.
