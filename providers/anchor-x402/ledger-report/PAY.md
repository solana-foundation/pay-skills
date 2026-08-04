---
name: ledger-report
title: "anchor-x402: signed x402 expense report"
description: "Signed and dual-chain-anchored x402 expense report (markdown + CSV) for any Base wallet, reconstructed from on-chain settlement data. Async job — returns job_id, poll for the deliverable. $0.35 USDC per call."
use_case: "Use when agent x402 spend needs a verifiable expense artifact: reimbursement, audit trails, accounting exports, or any flow that must present a tamper-evident, third-party-checkable record of what was spent and where."
category: finance
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`POST /v1/ledger/report` (body: `{wallet, days?}`) — pay $0.35 USDC,
get back a `job_id`. The job reconstructs the wallet's x402 spend from
Base settlement data and produces a signed expense report (markdown +
CSV sidecar) whose digest is anchored on Base + Solana, so a third party
can verify the report existed and was not altered. Poll the returned
`status_url` for the deliverable.

## Spend-aware usage

- This is the anchored, third-party-verifiable counterpart to the
  synchronous `POST /v1/ledger/summary` ($0.01). Reach for the report
  only when you need the signature + on-chain anchor (reimbursement,
  audit); use the summary for cheap periodic rollups.
- Async: submit once, poll `status_url`; do not resubmit while a job is
  in flight for the same wallet + window.
- The signature covers the report content and the anchor is a sibling
  proof — a reader verifies the root on Base or Solana without trusting
  the API.
