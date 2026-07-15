---
name: agent-discover
title: "AgentScan — AI Agent Reconnaissance"
description: "AgentScan performs AI-powered reconnaissance of on-chain agents, businesses, and identity profiles. Returns agent type, revenue, location, contact data, and social presence."
use_case: "Use when an agent needs to research another agent's on-chain identity, verify business registration, find contact information, or perform competitive intelligence."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — AgentScan — AI Agent Reconnaissance

AgentScan performs AI-powered reconnaissance of on-chain agents, businesses, and identity profiles. Returns agent type, revenue, location, contact data, and social presence.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/agentscan` | AgentScan — AI Agent Reconnaissance — primary endpoint |
