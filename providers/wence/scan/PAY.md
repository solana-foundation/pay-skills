---
name: scan
title: "MyTollBooth Scan"
description: "URL security scanning — check if a link is malicious, phishing, or compromised. Per-call x402 pricing on Solana."
use_case: "Scan a URL for security threats before an agent visits it"
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
