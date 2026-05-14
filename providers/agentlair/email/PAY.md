---
name: email
title: "AgentLair Email"
description: "Agent-native email with built-in identity. Claim dedicated email addresses for AI agents, send outbound email, and read inbound messages — all with verifiable sender identity and no manual account setup."
use_case: "Use when an agent needs its own email address for outbound communication, receiving replies, or participating in email-based workflows. Unlike generic email APIs, each address is cryptographically bound to an agent identity."
category: messaging
service_url: https://agentlair.dev
openapi:
  url: https://agentlair.dev/api
---

Agent-native email. Claim addresses, send and receive email, with verifiable agent identity on each message.

Each email address is claimed programmatically and cryptographically bound to the agent's identity (Agent Auth Token). Outbound emails carry verifiable sender metadata so recipients can confirm the message came from a specific agent identity.

## Key endpoints

- `POST /v1/email/claim` — claim a dedicated address for this agent (no human setup required)
- `POST /v1/email/send` — send an email from a claimed address (0.01 USDC via x402 beyond free tier)
- `GET /v1/email/inbox` — read inbound messages for a claimed address
- `GET /v1/email/addresses` — list all claimed addresses for this agent

## Spend-aware usage

- Claim one address per agent identity. Reuse it across tasks — do not claim new addresses for each workflow.
- The free tier allows 10 sends per day and 5 per hour. x402 payments (0.01 USDC each) bypass rate limits when the agent needs to send more.
- Read `GET /v1/email/inbox` with a limit parameter before fetching individual messages. Only fetch message bodies you need.
- Send from claimed addresses only. Unclaimed addresses will be rejected.
