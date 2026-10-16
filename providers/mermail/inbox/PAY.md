---
name: inbox
title: "Mermail"
description: "Wallet-bound hosted inboxes for AI agents. Create a hosted address, list and read messages, search a mailbox, fetch threads, download attachments, and send, reply, forward, or save drafts. Payment is the credential; there is no API key."
use_case: "Use for giving an agent its own hosted inbox, sending outbound email, reading verification or support replies, searching message history, downloading a clean attachment, and saving a draft before send."
category: messaging
service_url: https://mermail-pay.vercel.app
version: v1
openapi:
  path: openapi.json
---

Wallet-bound hosted inboxes for AI agents. Payment is the credential: there is
no API key and no separate login. The paying Solana wallet owns the inboxes it
creates.

Create a hosted inbox for $2 USDC. Send, reply, forward, and save draft are
$0.01. Reads, including list, get, search, thread, and attachment download, are
a $0 identity handshake: they still return HTTP 402, and no USDC is charged.
Hosted addresses only. Require `scan_status=clean` before using an inbound body
or attachment. After an uncertain paid call, replay the same body and
`Idempotency-Key`.

## Spend-aware usage

- Create an inbox once and reuse its id. Each new create is a new inbox.
- List or search before fetching one message, thread, or attachment.
- Reads are $0 handshakes. Do not skip the 402; that signature binds the wallet.
- Ask before sending, replying, forwarding, or creating another inbox.
