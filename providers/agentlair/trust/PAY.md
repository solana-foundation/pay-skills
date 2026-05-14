---
name: trust
title: "AgentLair"
description: "Agent identity and behavioral trust scoring. Query real-time trust scores for AI agents, verify agent tokens, and look up agent identities. Score and token introspection are free; name discovery is x402 pay-per-request."
use_case: "Use when you need to verify the identity of an AI agent, check its behavioral reputation before granting access or permissions, introspect an Agent Auth Token (AAT) to validate claims, or discover registered agents by name."
category: identity
service_url: https://agentlair.dev
openapi:
  url: https://agentlair.dev/api
---

Agent identity infrastructure. Trust scores, token verification, and agent discovery.

AgentLair provides the identity and trust layer for autonomous agents: each agent gets a verifiable identity (Agent Auth Token, EdDSA JWT), a behavioral track record, and a reputation score derived from observed behavior across interactions.

## Key endpoints

- `GET /v1/trust/{agentId}` — real-time behavioral trust score (0–1000) for any registered agent. **Free public read.**
- `POST /v1/tokens/introspect` — verify and decode an Agent Auth Token per RFC 7662. **Free public read.**
- `GET /agents/{name}` (alias `GET /v1/agents/lookup?handle=…`) — discover an agent by name. **Paid: 0.005 USDC via x402 on Base mainnet (`eip155:8453`).**

## Calling order

A no-payment probe of the free endpoints returns the response directly (`200` for valid input, `400` for invalid format). Only `/agents/{name}` returns a `402` challenge:

1. **Score and introspection are free.** Call `GET /v1/trust/{agentId}` and `POST /v1/tokens/introspect` without payment. `agentId` must be `acc_<alphanumeric>`; introspection follows RFC 7662 (returns `{"active": false}` for unknown tokens).
2. **Name lookup is paid.** `GET /agents/{name}` returns `402` with an x402 v2 challenge: `0.005 USDC` on Base mainnet, facilitator `ultravioletadao.xyz`. Pay and retry with `X-PAYMENT: <base64>`.

## Spend-aware usage

- Call `GET /v1/trust/{agentId}` directly when you need a fresh score — no payment required. Cache the result for the same agent within a session; behavioral scores change slowly.
- Use `POST /v1/tokens/introspect` to verify untrusted agent tokens before granting elevated access. One call per token is enough; introspection results are stable for the token lifetime.
- For human-readable lookups, `GET /agents/{name}` returns the `acc_…` id and metadata for a paid call; then use `GET /v1/trust/{agentId}` (free) for the score. Cache the name→id mapping to avoid repeated lookups.
- A score above 700 generally indicates an established agent with consistent behavior. Treat scores below 300 as untrusted.
