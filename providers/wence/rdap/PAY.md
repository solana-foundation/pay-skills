---
name: rdap
title: "MyTollBooth RDAP"
description: "Domain registration data lookup and ownership verification via RDAP protocol with per-call x402 pricing on Solana."
use_case: "Look up domain registration record and ownership data"
category: data
reason: "Look up domain registration record"
service_url: https://rdap-api-production.up.railway.app
openapi:
  path: openapi.json
---

MyTollBooth — rdap-api. x402 v2 protocol, USDC on Base.

## Spend-aware usage

- TODO: list patterns that minimize paid calls (e.g. prefer narrow lookups
  over broad searches; reuse identifiers; cap result limits).
