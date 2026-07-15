---
name: agent-discover
title: "AgentScan — AI Agent Reconnaissance"
description: "AgentScan performs AI-powered reconnaissance of on-chain agents, businesses, and identity profiles. Returns agent type, revenue, location, contact data, and social presence."
use_case: "Use when an agent needs to research another agent's on-chain identity, verify business registration, find contact information, or perform competitive intelligence."
category: data
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: openapi.json
pricing:
  per_request: 0.100
---

# GenTech Labs — AgentScan — AI Agent Reconnaissance

AgentScan performs AI-powered reconnaissance of on-chain agents, businesses, and identity profiles. Returns agent type, revenue, location, contact data, and social presence.

## Spend-aware usage

- Use this only when you need deep agent intelligence — it's the most expensive endpoint at $0.10.
- For lighter lookups, prefer market-intel or wallet-analyzer first.

## Endpoints

| Endpoint | Description | Price |
|----------|-------------|-------|
| `GET /api/agentscan` | AgentScan — AI Agent Reconnaissance | $0.10 |
