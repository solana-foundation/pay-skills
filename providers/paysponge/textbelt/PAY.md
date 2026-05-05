---
name: textbelt
title: "Textbelt SMS API"
description: "Send outbound SMS to supported-country phone numbers and check delivery status through PaySponge's x402-wrapped Textbelt service. Supports optional sender metadata, reply webhooks, and webhook data passthrough."
use_case: "Use for transactional SMS, alerts, reminders, verification messages, simple outbound texting, and delivery-status polling when an agent needs pay-per-request messaging without managing a separate Textbelt account."
category: messaging
service_url: https://api.paysponge.com/x402/purchase/svc_d6kszbre4qwg5n4n4
openapi:
  path: openapi.json
---

Textbelt SMS through PaySponge with x402 payments.

The current service exposes one free status route and one paid send route.
`GET /status/{textId}` returns delivery state at 0 USDC. `POST /text` sends an
SMS message for $0.02 per request.

Number formatting follows Textbelt's documented rules: U.S. and Canada
recipients can use a 10-digit phone number with area code and no country code.
Other countries should use E.164 format: `+` prefix, 1-3 digit country code,
then the subscriber number.

The published spec models the PaySponge wrapper as JSON input with `phone` and
`message` required, plus optional `sender`, `replyWebhookUrl`, and `webhookData`.
Callers do not pass a separate upstream Textbelt API key; billing happens
through x402 on the wrapper.

## Spend-aware usage

- Use `GET /status/{textId}` to poll a prior send instead of resubmitting
  `POST /text`.
- Keep each paid call to one confirmed recipient and one final message body.
  This service does not provide batch send in a single request.
- Include `sender` and any required opt-out language when the workflow is
  business or recurring messaging so the first paid send is compliant.
- Use `replyWebhookUrl` only when the caller actually needs inbound replies;
  otherwise keep the body minimal.
