---
name: risk
title: "MyTollBooth Risk"
description: "Transaction risk scoring and fraud confidence assessment with per-call x402 pricing on Solana for payment verification."
use_case: "Score transaction risk before executing payment"
category: security
reason: "Score transaction risk before payment"
service_url: https://risk-api-production.up.railway.app
openapi:
  path: openapi.json
---

MyTollBooth — risk-api. x402 v2 protocol, USDC on Base.

## Spend-aware usage

- TODO: list patterns that minimize paid calls (e.g. prefer narrow lookups
  over broad searches; reuse identifiers; cap result limits).
