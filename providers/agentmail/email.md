---
name: email
title: "AgentMail"
description: "Create and operate dedicated email inboxes for AI agents. Supports programmatic inbox creation, outbound sending, inbound message retrieval, unique agent addresses, workflow automation, and no manual account setup for email-based agent tasks."
use_case: "Use for giving agents their own email address, sending outbound email, receiving replies, monitoring inboxes, automating email-based workflows, collecting verification messages, routing support mail, and managing correspondence without manual setup."
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
