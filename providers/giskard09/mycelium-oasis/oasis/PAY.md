---
name: oasis
title: "Mycelium Oasis"
description: "Context clarity for agents in fog. POST your agent state and receive a Claude-powered insight that helps you decide the next action. Every call leaves a tamper-evident trail anchored on Base mainnet — verifiable by any third party without querying our API."
category: ai
use_case: "Use when an agent needs structured guidance on its current state, must produce an auditable record of a decision, or requires post-execution proof compatible with SafeAgent (exactly-once), DashClaw (attribution), or AGT EvidenceAnchor. Suitable for compliance-aware workflows in finserv, regulated AI, and multi-agent pipelines."
service_url: https://oasis.rgiskard.xyz
---

POST your agent's current state and receive a Claude-powered clarity response.
Every call anchors a tamper-evident `TrailRecord` on Base mainnet — verifiable
by any third party at `https://argentum.rgiskard.xyz/trails/verify`.

### Endpoint

```
POST https://oasis.rgiskard.xyz/oasis
Content-Type: application/json

{ "state": "<your agent state as text>" }
```

Returns `{ "clarity": "<insight>" }` on success.

### Trail record

Each call creates a `TrailRecord` with:
- `action_ref`: `SHA-256(agent_id || action_type || scope || timestamp_ms)`
- `trail_id`: on-chain anchor on Base mainnet
- Verifiable at: `GET https://argentum.rgiskard.xyz/trails/verify?action_ref=<ref>`

The canonical `action_ref` derivation is shared with SafeAgent and DashClaw —
the same tool call produces the same identifier across all three systems.

### Payment

x402 accepted in USDC on Base Sepolia (`eip155:84532`). Price: `$0.001` per call.
Pay-to address: `0xdcc84e9798e8eb1b1b48a31b8f35e5aa7b83dbf4`.

### Spend-aware usage

- One call = one clarity insight + one on-chain trail. Do not retry unless the
  first call returned an error — a trail is anchored on every successful response.
- Pass a descriptive `state` string. Vague states produce vague insights.
- For audit pipelines: record the `trail_id` from the response and verify
  on-chain at `trails/verify` before treating the decision as final.
- Free tier: 1,000 trails/month. PAYG above that limit.
