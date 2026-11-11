---
name: webhook
title: "MyTollBooth Webhook"
description: "Webhook event delivery and notification dispatch to downstream agent services with per-call x402 pricing on Solana."
use_case: "Deliver webhook events to registered target endpoints"
category: devtools
reason: "Deliver webhook event to downstream service"
service_url: https://webhook-api-production.up.railway.app
openapi:
  path: openapi.json
---

MyTollBooth — webhook-api. x402 v2 protocol, USDC on Base.

## Spend-aware usage

- TODO: list patterns that minimize paid calls (e.g. prefer narrow lookups
  over broad searches; reuse identifiers; cap result limits).
