---
name: email
title: "StableEmail"
description: "Send email, buy dedicated inboxes, manage custom subdomains, and retrieve inbound messages through per-request email APIs. Supports shared relay sending, subdomain sender identities, forwarding inboxes, message storage, and attachment access."
category: messaging
use_case: "Use for sending outbound emails, creating receiving inboxes, reading inbound messages, managing custom email subdomains, agent email workflows, forwarding inboxes, reply handling, verification messages, customer outreach, and per-message email delivery."
service_url: https://stableemail.dev
openapi_url: https://stableemail.dev/openapi.json
endpoints:
  - method: POST
    path: "api/send"
    resource: messages
    description: "Send an outbound email from relay@stableemail.dev with configurable recipient, subject, and HTML or plain text body"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/subdomain/buy"
    resource: subdomains
    description: "Purchase a custom email subdomain on stableemail.dev for sending and creating per-address receiving inboxes"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 5.00
  - method: POST
    path: "api/subdomain/send"
    resource: messages
    description: "Send an email from your custom subdomain address with full control over sender name and reply-to headers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: POST
    path: "api/subdomain/inbox/create"
    resource: inboxes
    description: "Create a receiving inbox on your custom subdomain. With forwardTo, messages forward only (no retention); without, retainMessages is auto-enabled"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.25
  - method: POST
    path: "api/subdomain/inbox/messages"
    resource: inboxes
    description: "List messages in a subdomain inbox; returns empty unless the inbox was created without forwardTo, or retainMessages was enabled via update"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: "api/subdomain/inbox/messages/read"
    resource: inboxes
    description: "Read a single subdomain inbox message by id; returns text, HTML, and attachment download URLs valid for one hour"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: "api/inbox/buy"
    resource: inboxes
    description: "Buy a forwarding-or-programmatic inbox on stableemail.dev for 30 days. With forwardTo, retainMessages defaults to false; without, it defaults to true"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 1.00
  - method: POST
    path: "api/inbox/send"
    resource: messages
    description: "Send an outbound email from your dedicated inbox address; payer wallet must be the inbox owner"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: POST
    path: "api/inbox/topup"
    resource: inboxes
    description: "Extend an inbox subscription by 30 days; anyone can top up any inbox by username, no SIWX required"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 1.00
  - method: POST
    path: "api/inbox/topup/quarter"
    resource: inboxes
    description: "Extend an inbox subscription by 90 days at a 17% discount versus monthly top-ups"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 2.50
  - method: POST
    path: "api/inbox/topup/year"
    resource: inboxes
    description: "Extend an inbox subscription by 365 days at a 34% discount versus monthly top-ups"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 8.00
  - method: POST
    path: "api/inbox/messages"
    resource: inboxes
    description: "List messages in your inbox; returns empty when retainMessages is false (the default when forwardTo was set at creation)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: "api/inbox/messages/read"
    resource: inboxes
    description: "Read a single inbox message with text, HTML, and attachment URLs valid for one hour; messages stored 90 days when retainMessages is true"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: "api/inbox/update"
    resource: inboxes
    description: "Update inbox forwardTo and retainMessages settings; SIWX required, only the inbox owner can update, both flags can be true at once"
  - method: GET
    path: "api/inbox/status"
    resource: inboxes
    description: "Get inbox status, expiry, owner wallet, and current forwardTo and retainMessages flags via SIWX wallet auth"
  - method: POST
    path: "api/inbox/cancel"
    resource: inboxes
    description: "Cancel an inbox and receive a pro-rata USDC refund on-chain to the owner wallet; SIWX required"
  - method: POST
    path: "api/subdomain/inbox/update"
    resource: inboxes
    description: "Update a subdomain inbox's forwardTo and retainMessages flags via SIWX; only the subdomain owner may update"
  - method: POST
    path: "api/subdomain/inbox/list"
    resource: inboxes
    description: "List all inboxes on a subdomain with addresses, forward targets, retainMessages flags, and message counts; SIWX required"
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
