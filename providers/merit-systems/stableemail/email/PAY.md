---
name: email
title: "StableEmail"
description: "Send email, buy dedicated inboxes, manage custom subdomains, and retrieve inbound messages through per-request email APIs. Supports shared relay sending, subdomain sender identities, forwarding inboxes, message storage, and attachment access."
category: messaging
use_case: "Use for sending outbound emails, creating receiving inboxes, reading inbound messages, managing custom email subdomains, agent email workflows, forwarding inboxes, reply handling, verification messages, customer outreach, and per-message email delivery."
service_url: https://stableemail.dev
openapi:
  path: openapi.json
---

Pay-per-send email and per-request inbox APIs. Send from `relay@stableemail.dev`,
buy a custom subdomain, or buy a dedicated inbox.

### Receiving mode is set at purchase — read this first

When you buy an inbox (`/api/inbox/buy` or `/api/subdomain/inbox/create`),
**how** you can receive mail depends on whether you pass `forwardTo`:

| Body at create | `retainMessages` default | What you can do |
|---|---|---|
| `{ "username": "x", "forwardTo": "you@gmail.com" }` | **false** | Messages forward to your real address. The messages API returns **empty** — nothing is stored. |
| `{ "username": "x" }` (no forwardTo) | **true** | Nothing is forwarded. Messages stay in stableemail and are read via the messages API for 90 days. |

To run **both modes** (forward + retain), buy in one mode and then call
`POST /api/inbox/update` with `{ "forwardTo": "...", "retainMessages": true }`.
That endpoint is free but requires SIWX wallet auth — the same wallet that
bought the inbox must sign the SIWX challenge. x402-only clients (no SIWX
support) cannot call update; use a SIWX-capable client for that step.

### Common gotcha

If you bought with `forwardTo` and then call `/api/inbox/messages`, you'll get
`{ "success": true, "messages": [] }` — that's expected, not a bug. The
messages were forwarded, not stored. Either check the forwarded address, or
flip `retainMessages` to true via update before the next inbound email.

### Custom subdomains

`POST /api/subdomain/buy` ($5) gives you `<sub>.stableemail.dev`. After DNS
verification (~5 min), `POST /api/subdomain/inbox/create` ($0.25 each, max 100
per subdomain, 500 messages each) creates per-address inboxes that follow the
same forwardTo / retainMessages rules.

### Payment

x402 and MPP accepted in USDC on Base, Solana, and Tempo.

## Spend-aware usage

- For one outbound email, use `POST /api/send` unless the user specifically
  needs a custom sender domain. Buying a subdomain is a separate $5 decision.
- For receiving mail, decide between forwarding and retained storage before
  buying the inbox. If the user later needs both, explain that update requires
  SIWX and the wallet that bought the inbox.
- When checking mail, call the list endpoint once, then read only the specific
  message IDs needed. Avoid tight polling loops; ask before repeated checks.
- Batch email validation or lookup work where supported instead of paying one
  request per address.
