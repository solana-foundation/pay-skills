---
name: calls
title: "StablePhone"
description: "Make AI-powered outbound phone calls, buy dedicated phone numbers, extend number leases, and look up iMessage or FaceTime capability. Supports call IDs, caller ID continuity, global phone workflows, and pay-per-call voice automation."
category: messaging
use_case: "Use for AI phone calls, outbound voice tasks, call automation, dedicated caller ID numbers, renewing phone number leases, checking iMessage or FaceTime availability, appointment calls, reminders, surveys, support outreach, and phone-based agent workflows."
service_url: https://stablephone.dev
openapi:
  path: openapi.json
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
