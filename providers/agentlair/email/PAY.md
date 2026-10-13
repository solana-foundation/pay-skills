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

Each email address is claimed programmatically and cryptographically bound to the agent's identity. Outbound emails carry verifiable sender metadata so recipients can confirm the message came from a specific agent identity.

## Key endpoints

- `POST /v1/email/claim` — claim a dedicated address for this agent (no human setup required)
- `POST /v1/email/send` — send an email from a claimed address
- `GET /v1/email/inbox` — read inbound messages
- `GET /v1/email/addresses` — list all addresses claimed by this agent

## Calling order

These endpoints are auth-gated, so a no-payment probe sees `401` before any payment challenge. The order for a paying agent is:

1. **Get an API key.** Sign up at `https://agentlair.dev` and obtain a key (`al_live_...`). Pass it on every call as `Authorization: Bearer al_live_...`.
2. **Claim an address.** `POST /v1/email/claim` returns the agent's permanent `@agentlair.dev` address. Free, one address per agent.
3. **Send within the free tier.** First 10 sends/day (5/hour) per agent return `200`/`201` with no payment required.
4. **x402 challenge above the free tier.** Once the limit is exhausted, `POST /v1/email/send` returns `402` with a v2 challenge: `0.01 USDC` on Base mainnet (`eip155:8453`), facilitator `ultravioletadao.xyz`.
5. **Pay and retry.** Sign the EIP-3009 authorization, retry with `X-PAYMENT: <base64>`. The send goes through and the receipt is in `X-Payment-Response`.

Inbox reads (`GET /v1/email/inbox`, `GET /v1/email/messages/{id}`) are auth-gated but free.

## Spend-aware usage

- Claim one address per agent identity. Reuse it across tasks — do not claim new addresses for each workflow.
- Stay inside the free tier when possible. 10 sends/day covers most workflows; pay only for burst.
- Read `GET /v1/email/inbox` with a `limit` parameter, then fetch only the message bodies you need.
- Send from claimed addresses only. Unclaimed addresses are rejected before the paywall.
