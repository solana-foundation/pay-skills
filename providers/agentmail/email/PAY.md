---
name: email
title: "AgentMail"
description: "Create and operate dedicated email inboxes for AI agents. Supports programmatic inbox creation, outbound sending, inbound message retrieval, unique agent addresses, workflow automation, and no manual account setup for email-based agent tasks."
use_case: "Use for giving agents their own email address, sending outbound email, receiving replies, monitoring inboxes, automating email-based workflows, collecting verification messages, routing support mail, and managing correspondence without manual setup."
category: messaging
service_url: https://x402.api.agentmail.to
openapi:
  path: openapi.json
---

Agentic email service. Create inboxes, send and receive email for AI agents.
Each inbox gets a unique address that can send and receive messages immediately.

## Spend-aware usage

- Use `v0/inboxes/{inbox_id}/messages` directly when the user already has an
  inbox identifier or address. Do not create a new inbox just to check existing
  mail.
- Create an inbox once, then reuse it for send and receive workflows. Ask before
  creating multiple inboxes or long-running polling loops.
- For "check my mail" style requests, make one message-list call first and only
  fetch or summarize individual messages if the returned list is not enough.
