---
name: calls
title: "StablePhone"
description: "Pay-per-call AI phone calls with no API keys or accounts"
category: messaging
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
    description: "Extend a phone number by 30 days"
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
    description: "Check if a phone number has iMessage/FaceTime"
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
