---
name: calls
title: "StablePhone"
description: "Make AI-powered outbound phone calls, buy dedicated phone numbers, extend number leases, and look up iMessage or FaceTime capability. Supports call IDs, caller ID continuity, global phone workflows, and pay-per-call voice automation."
category: messaging
use_case: "Use for AI phone calls, outbound voice tasks, call automation, dedicated caller ID numbers, renewing phone number leases, checking iMessage or FaceTime availability, appointment calls, reminders, surveys, support outreach, and phone-based agent workflows."
service_url: https://stablephone.dev
endpoints:
  - method: POST
    path: "api/call"
    resource: calls
    description: "Make an AI-powered outbound phone call by providing a number and task, returning a call ID for status tracking"
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
    description: "Buy a dedicated phone number for outbound caller ID so future AI calls use a stable originating number"
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

## Spend-aware usage

- Use `api/lookup` first only when the user needs iMessage/FaceTime capability
  or phone-number validation. Skip it when the user already requested a normal
  phone call to a known number.
- Before starting a call, confirm the phone number, call objective, maximum
  duration, and whether voicemail is acceptable.
- Buying or renewing numbers is a $15 persistent resource decision. Ask before
  calling number purchase or renewal endpoints.
- If a call returns DNC or another policy block, stop and report it. Do not retry
  with variants of the same number.
