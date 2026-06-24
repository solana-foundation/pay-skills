---
name: gentechlabs-agent-discovery
title: GenTech Labs — Agent Discovery API
category: ai-agents
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Agent Discovery API", "version": "1.0.0" }, "paths": { "/v1/agent/search": { "get": { "summary": "Search agents", "responses": {"200": {"description": "Agent list"}} } } } }
  Find AI agents by capability, chain, protocol. The search engine for the agent economy.
  Search and discover AI agents across the agent economy.
  Find agents by capabilities, domains, and reputation via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/agent/search
    description: Search for agents by capability or domain
    price_usd: 0.001
    request: { query: "defi", domain: "finance" }
    response: { agents: [{ agent_id, name, capabilities, reputation, domains }] }
  - method: GET
    path: /v1/agent/{agent_id}
    description: Get detailed info about a specific agent
    price_usd: 0.001
    request: { agent_id: "string" }
    response: { agent_id, name, capabilities, domains, endpoints, reputation }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Agent Discovery API

Search and discover AI agents across the agent economy. Find agents by capabilities and reputation.

## Endpoints

- `GET /v1/agent/search` — Search for agents ($0.001)
- `GET /v1/agent/{agent_id}` — Get agent details ($0.001)

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.
