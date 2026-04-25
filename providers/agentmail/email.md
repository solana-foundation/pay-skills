---
name: email
title: "AgentMail"
description: "Agentic email infrastructure for AI agents — programmatically create dedicated inboxes, send outbound messages, and retrieve incoming email on demand"
use_case: "Use when an AI agent needs its own email address to send or receive messages, manage inbound correspondence, or automate email-based workflows without manual account setup"
category: messaging
service_url: https://x402.api.agentmail.to
endpoints:
  - method: POST
    path: "inbox/create"
    resource: inboxes
    description: "Create a new dedicated email inbox for an AI agent, returning a unique email address that can send and receive messages"
  - method: POST
    path: "send"
    resource: messages
    description: "Send an outbound email from an agent inbox, supporting recipients, subject, body, and standard email fields"
  - method: POST
    path: "inbox/messages"
    resource: messages
    description: "Retrieve and list all messages in an agent inbox, including sender, subject, body, and metadata for each email received"
---

Agentic email service. Create inboxes, send and receive email for AI agents.
Each inbox gets a unique address that can send and receive messages immediately.
