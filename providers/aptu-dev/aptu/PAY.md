---
name: aptu
title: "aptu.dev"
description: "Machine-payable x402 API for autonomous agents: verify payment flows with a paid echo, score resumes against an ATS rubric, audit any domain's agent readiness, pre-flight a resource's x402 conformance, generate readiness-fix artifacts, and gate BTC entries on a spot-vs-MA7 regime check."
use_case: "Use for smoke-testing an agent's x402 payment flow, scoring resumes 0-4 on an ATS rubric, auditing a domain's readiness for agents (robots, llms.txt, x402 manifest, A2A card), pre-flighting a resource's x402 conformance before listing, generating agent-surface artifacts for a domain, and checking BTC bull/bear regime before entries."
category: devtools
service_url: https://aptu.dev
version: v1
openapi:
  path: openapi.json
---

aptu.dev is machine-payable API infrastructure for autonomous agents. All paid endpoints speak x402 v2: an unpaid request returns 402 with a PAYMENT-REQUIRED header; sign the exact-scheme authorization and retry with a PAYMENT-SIGNATURE header; a settled response carries PAYMENT-RESPONSE with the settlement receipt. USDC payment accepted on Base mainnet and Solana mainnet.

Endpoints (fixed USD pricing):

- POST /v1/echo ($0.01): echoes a JSON message back; the cheapest way to verify an agent's end-to-end payment flow.
- POST /v1/resume-eval ($0.005): scores a resume 0-4 against an ATS rubric covering impact, parseability, executive framing, and contact info.
- POST /v1/agent-readiness ($0.05): audits a domain's agent readiness across origin headers, robots.txt, llms.txt, sitemap, feed, agents.txt, skill.md, JSON-LD, mcp.json, A2A card, x402 manifest, and OpenAPI x-payment-info.
- GET /v1/btc-regime ($0.003): spot BTC vs a 7-day moving-average gate; returns bull/bear, MA7, deviation percent, and a favor-entry or block-entry action.
- POST /v1/x402-preflight ($0.05): seller-side x402 conformance pre-flight for a deployed resource URL; graded 0-100 report with per-failure remedies.
- POST /v1/readiness-fix ($0.05): re-probes a domain and returns nine ready-to-host agent-surface artifacts (llms.txt, robots.txt, sitemap.xml, agents.txt, skill.md, and more) from probe facts.

Free discovery surfaces (no payment): /.well-known/x402, /v1/catalog, /v1/openapi.json, /v1/self-check, and GET /v1/x401-probe.

## Spend-aware usage

- Start with POST /v1/echo at $0.01 to validate signing and retry logic before spending on higher-priced endpoints.
- Use GET /v1/x401-probe (free) to confirm challenge handling without any charge.
- Batch domain checks: /v1/agent-readiness returns the full audit in one call, so no need to fetch robots.txt, llms.txt, and sitemap separately.
- Pass your own 7 daily closes to /v1/btc-regime to skip the Kraken fetch and get a deterministic, reproducible regime result.
