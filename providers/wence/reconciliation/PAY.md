---
name: reconciliation
title: "MyTollBooth Reconciliation"
description: "Transaction reconciliation and ledger matching across payment rails with per-call x402 pricing on Solana."
use_case: "Reconcile transactions and verify settlement across ledgers"
category: finance
reason: "Reconcile transactions across ledgers"
service_url: https://reconciliation-api-production.up.railway.app
openapi:
  path: openapi.json
---

MyTollBooth — reconciliation-api. x402 v2 protocol, USDC on Base.

## Spend-aware usage

- TODO: list patterns that minimize paid calls (e.g. prefer narrow lookups
  over broad searches; reuse identifiers; cap result limits).
