---
name: email
title: "StableEmail"
description: "Pay-per-send email delivery with inboxes and custom subdomains"
category: messaging
service_url: https://stableemail.dev
endpoints:
  - method: POST
    path: "api/send"
    resource: messages
    description: "Send email from relay@stableemail.dev (no setup required)"
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
    description: "Purchase a custom email subdomain on stableemail.dev"
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
    description: "Send email from your custom subdomain"
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
    description: "Create an inbox on your subdomain (max 100 inboxes, 500 msgs each)"
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
    description: "List messages in a subdomain inbox"
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
    description: "Read a single subdomain inbox message with text, HTML, and attachments"
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
    description: "Buy an inbox on stableemail.dev (30 days, with forwarding)"
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
    description: "Send email from your forwarding inbox"
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
    description: "Extend inbox by 30 days"
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
    description: "Extend inbox by 90 days (save 17%)"
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
    description: "Extend inbox by 365 days (save 34%)"
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
    description: "List messages in your inbox"
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
    description: "Read a single inbox message with text, HTML, and attachment URLs"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
---

Pay-per-send email delivery. Send from a shared relay, buy custom subdomains,
or create dedicated inboxes with forwarding. No API keys, no accounts.
Inboxes retain messages for 90 days.
