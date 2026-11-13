---
name: emailval
title: "emailval — Email Validation"
description: "Validate one email address: syntax + MX records (DNS-over-HTTPS) + disposable-domain check. JSON verdict. x402 pay-per-call, 0.003 USDC on Base."
use_case: "Use to screen lead lists, signup forms or outreach targets before sending: catches syntax errors, domains with no mail exchanger, and known disposable/temp-mail providers in one cheap call."
category: data
service_url: https://x402-emailval.shablony-pro.workers.dev
openapi:
  path: openapi.json
---

`emailval` checks a single email address in three layers — RFC-ish syntax, live MX lookup via Google DNS-over-HTTPS, and a disposable-domain blocklist — and returns one JSON verdict (`valid`, `reason`, `mx`, `disposable`).

Payment: x402 v1 `exact`, USDC on Base, $0.003 per call. Unpaid request → HTTP 402 with `accepts[]`; retry with `X-PAYMENT`. Dexter facilitator settles; no gas for the payer.

Free metadata: `GET /info`, `GET /.well-known/x402`, `GET /openapi.json`, `GET /health`.

## Spend-aware usage

- Validate before adding an address to any outreach pipeline — one $0.003 call is cheaper than a bounced campaign.
- The verdict is per-address; batch lists client-side in a loop rather than expecting a bulk endpoint.
