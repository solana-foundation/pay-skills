---
name: email
title: "AgentMail"
description: "Agentic email — create inboxes, send, and receive email for AI agents"
category: messaging
service_url: https://x402.api.agentmail.to
endpoints:
  - method: POST
    path: "inbox/create"
    resource: inboxes
    description: "Create a new email inbox for an AI agent"
  - method: POST
    path: "send"
    resource: messages
    description: "Send an email from an agent inbox"
  - method: POST
    path: "inbox/messages"
    resource: messages
    description: "List messages in an agent inbox"
---

Agentic email service. Create inboxes, send and receive email for AI agents.
No API keys — x402 payment only.
