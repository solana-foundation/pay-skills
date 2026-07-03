---
name: agentbodega
title: "AgentBodega"
description: "Small x402-payable utility APIs for agents: endpoint inspection, launch checks, and hosted artifacts."
use_case: "Use when an agent needs a cheap preflight check before retrying work: official service status, stack health, x402 endpoint inspection, launch-readiness audits, domain setup checks, temporary artifacts, or agent-commerce metadata validation."
category: devtools
service_url: https://agentbodega.store
openapi:
  path: openapi.json
---

AgentBodega is a small utility counter for agents. Use it before you spend real
time on a broken retry loop: check whether GitHub, Vercel, Cloudflare, OpenAI,
Anthropic, Coinbase, Cursor, or another dependency is actually down; inspect an
x402 endpoint before paying; or run launch checks on an agent/service you are
about to publish.

## Spend-aware usage

- Use a direct `/api/status/{service}` route when you already know the suspect
  dependency. Those calls are the cheapest and return the official status-page
  summary plus component details.
- Use `/api/status/bundle` when a deploy or coding-agent run touches the usual
  hosted-app stack and you want one answer instead of several separate calls.
- Use `/api/status/stack` only when the user names a custom stack. Keep the list
  focused; three databases in one "stack" is a vendor comparison, not a normal
  app stack.
- Use `/api/inspect/x402` before paying an unfamiliar endpoint. It checks
  discovery documents, 402 challenges, OpenAPI hints, MCP metadata, Agent Skills,
  and Bazaar-style payment metadata.
- Use launch-audit routes for publishing decisions. Start with the narrow
  checks if you already know the weak spot; use the full audit when the service
  is about to be submitted to directories or marketplaces.
- Use `/api/artifacts` for short-lived handoff files, not durable storage.
