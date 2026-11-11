---
name: scan
title: "MyTollBooth Scan"
description: "Transaction security scanning and anomaly detection with per-call x402 pricing on Solana for on-chain activity verification."
use_case: "Scan transactions for security anomalies and threat flags"
category: security
reason: "Scan transaction for security anomalies"
service_url: https://scan-api-production.up.railway.app
openapi:
  path: openapi.json
---

MyTollBooth — scan-api. x402 v2 protocol, USDC on Base.

## Spend-aware usage

- TODO: list patterns that minimize paid calls (e.g. prefer narrow lookups
  over broad searches; reuse identifiers; cap result limits).
