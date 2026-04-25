---
name: calls
title: "StablePhone"
description: "Pay-per-call AI-powered phone calls, number provisioning, top-up, and caller ID lookup with global coverage"
category: messaging
use_case: "Use when you need to make AI-powered outbound phone calls, purchase dedicated phone numbers for caller ID, or look up phone number capabilities like iMessage and FaceTime"
service_url: https://stablephone.dev
endpoints:
  - method: POST
    path: "api/call"
    resource: calls
    description: "Make an AI phone call — provide number and task, get back a call ID"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.54
  - method: POST
    path: "api/number"
    resource: numbers
    description: "Buy a dedicated phone number for outbound caller ID"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 20.00
  - method: POST
    path: "api/number/topup"
    resource: numbers
    description: "Extend the lease on a dedicated phone number by 30 days to maintain outbound caller ID and continuity"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 15.00
  - method: POST
    path: "api/lookup"
    resource: lookup
    description: "Look up whether a phone number is registered for iMessage or FaceTime to determine messaging capabilities"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05
---

AI phone calls via micropayments. Provide a number and task, get back results.
Returns 403 if the number is on the DNC list — do not retry.
