---
name: email
title: "StableEmail"
description: "Pay-per-send email delivery with dedicated inboxes, custom subdomains, and message retrieval for AI agents"
category: messaging
use_case: "Use when you need to send emails, create inboxes for receiving mail, or set up custom email subdomains with per-message micropayment billing"
service_url: https://stableemail.dev
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
    description: "Send an outbound email from your dedicated forwarding inbox address with custom sender identity"
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
    description: "Extend a forwarding inbox subscription by 30 days to keep receiving and storing inbound messages"
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
    description: "List all received messages in your forwarding inbox with sender, subject, and timestamp metadata"
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
or create dedicated inboxes with forwarding.
Inboxes retain messages for 90 days.
