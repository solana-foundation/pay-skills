---
name: agent-discovery
title: "GenTech Labs — Agent Discovery API"
description: "Find AI agents by capability, chain, and protocol. The search engine for the agent economy via x402 USDC on Base."
use_case: "Use when an agent needs to discover other agents, find service providers, or search for capabilities across the agent economy."
category: ai_ml
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Agent Discovery API

Find AI agents by capability, chain, and protocol. The search engine for the agent economy via x402 USDC on Base.

## Endpoints

- `GET /v1/agent/search` — Search for agents by capability ($0.005)
- `GET /v1/agent/{agent_id}` — Get agent details and reputation ($0.005)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
