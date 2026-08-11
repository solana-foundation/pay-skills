---
name: opportunity-preflight
title: "SameDayDesk agent preflight APIs on Solana"
description: "Evaluate paid work economics or compare x402 and MPP payment offers before an agent authorizes effort or payment."
use_case: "Choose work opportunity preflight before spending effort on a bounty or paid task. Choose payment offer preflight before authorizing one exact public HTTPS GET purchase."
category: productivity
service_url: https://solana.samedaydesk.com
openapi:
  path: openapi.json
---

Evaluate a bounty or paid work opportunity with deterministic break-even
economics, acceptance gates, settlement checks, and reusable-value accounting,
or inspect one target route's unpaid x402 and MPP challenges before buyer
authorization. The service does not claim, bid, submit, authorize, sign, or pay
on source platforms.

## Spend-aware usage

- Verify the live listing and collect every required input before calling so one
  request produces the complete decision.
- Reuse a result while reward, cost, competition, access, acceptance, and
  settlement facts are unchanged. The output is deterministic for the same
  normalized input.
- Supply `platform` only when dated SameDayDesk evidence is useful. The caller
  still rechecks the primary listing before acting.
- Treat a missing selection probability as a deliberate `verify_first` result
  rather than paying for repeated guesses.
- Use payment-offer preflight only with one complete public HTTPS GET URL. It
  uses no target credential or target payment and reads no target response body.
