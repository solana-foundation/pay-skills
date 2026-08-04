---
name: ledger-summary
title: "anchor-x402: x402 spend accounting (summary)"
description: "x402 spend accounting for any Base wallet — total USDC spent and a per-service breakdown, reconstructed from on-chain settlement data. Synchronous, $0.01 USDC per call."
use_case: "Use for agent budget tracking, per-service cost attribution, x402 spend dashboards, expense reconciliation, and answering 'how much has this wallet spent on x402, and where' without indexing the chain yourself."
category: finance
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`POST /v1/ledger/summary` (body: `{wallet, days?}`) — pay $0.01 USDC,
get back a spend summary reconstructed from Base settlement data: total
USDC spent over the window plus a per-service (per-endpoint) breakdown.
Synchronous, with a bounded lookback — for longer ranges use the async
`POST /v1/ledger/report`.

## Spend-aware usage

- Poll on a schedule (daily / weekly) rather than per-transaction — the
  summary reconstructs from chain data, so it is most useful as a
  periodic rollup.
- Use the per-service breakdown to attribute agent spend to the tools
  that drove it, and to catch a runaway loop early.
- For a signed, anchored artifact you can hand to a third party (audit,
  reimbursement), use `POST /v1/ledger/report` instead.
