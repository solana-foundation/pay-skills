---
name: trust
title: "AgentLair"
description: "Agent identity and behavioral trust scoring. Query real-time trust scores for AI agents, verify agent tokens, and look up agent identities without an account or API key."
use_case: "Use when you need to verify the identity of an AI agent, check its behavioral reputation before granting access or permissions, introspect an Agent Auth Token (AAT) to validate claims, or discover registered agents by name."
category: identity
service_url: https://agentlair.dev
openapi:
  url: https://agentlair.dev/api
---

Agent identity infrastructure. Trust scores, token verification, and agent discovery — all pay-per-request via x402 on Base.

AgentLair provides the identity and trust layer for autonomous agents: each agent gets a verifiable identity (Agent Auth Token, EdDSA JWT), a behavioral track record, and a reputation score derived from observed behavior across interactions.

## Key endpoints

- `GET /v1/trust/{agentId}` — real-time behavioral trust score (0–1000) for any registered agent
- `POST /v1/tokens/introspect` — verify and decode an Agent Auth Token per RFC 7662
- `GET /agents/{name}` — discover an agent by name, returns identity metadata

## Spend-aware usage

- Call `GET /v1/trust/{agentId}` when you need a fresh score. Cache the result for the same agent within a session — behavioral scores change slowly.
- Use `POST /v1/tokens/introspect` to verify untrusted agent tokens before granting elevated access. One call per token is enough; introspection results are stable for the token lifetime.
- Prefer `GET /agents/{name}` for human-readable lookups; use `GET /v1/trust/{agentId}` with the returned `agent_id` for follow-up score queries.
- A score above 700 generally indicates an established agent with consistent behavior. Treat scores below 300 as untrusted.
