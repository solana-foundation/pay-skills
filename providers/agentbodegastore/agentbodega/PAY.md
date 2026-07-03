---
name: agentbodega
title: "AgentBodega"
description: "Pay-per-call utility APIs for agents: official status checks, launch and agent-readiness audits, x402 inspection, domain checks, signed artifacts, directory packaging, and receipts."
use_case: "Use when an agent needs a cheap preflight check before retrying, deploying, buying another API call, auditing launch readiness, inspecting x402 metadata, or creating a short-lived artifact with a receipt."
category: devtools
service_url: https://agentbodega.store
openapi:
  path: openapi.json
---

AgentBodega is a small paid utility shelf for agents. The cheap calls are meant
to answer the question an agent usually has right before it wastes more money or
time: is the upstream service down, is this site agent-ready, does this payable
endpoint expose a real x402 challenge, or is this domain actually ready to
launch?

The status routes use official status sources where possible. The launch and
agent-readiness routes inspect public metadata, OpenAPI, MCP cards, Agent
Skills, auth docs, x402 discovery, link headers, markdown access, DNS, HTTPS,
SPF, DMARC, MX, and DKIM hints. Responses include receipts so a caller can trace
what was paid for and what was returned.

## Spend-aware usage

- Start with a direct status alias such as `/api/status/openai`,
  `/api/status/github`, or `/api/status/cloudflare` when you only need one
  service. Those calls are usually the cheapest useful check.
- Use `/api/status/bundle` or `/api/status/stack` when the user is debugging a
  deploy path and wants one answer across several dependencies.
- Use `/api/audit/agent-launch` only when you need the full launch/readiness
  report. The focused checks are cheaper when you already know whether the
  problem is discovery, protocol metadata, or commerce.
- Cache a receipt and result inside the agent session instead of repeating the
  same check during a retry loop.
- Read `/.well-known/x402` and `/api/directory` before spending. They show the
  live endpoint list, prices, payment rails, and example request bodies.
