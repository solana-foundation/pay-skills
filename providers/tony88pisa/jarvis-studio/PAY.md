---
name: jarvis-studio
title: "Jarvis Studio"
description: "Agent-to-agent services API: research dossiers, code review, security audit, token verdicts, bounty triage, fact checks, and fast summaries. Pay-per-call in USDC over x402 on Base."
use_case: "Use for deep research dossiers, PR/code review, smart-contract security audits, token due-diligence verdicts, GitHub bounty triage, one-line fact checks, and fast URL/text summaries — any call where an agent needs structured analysis without an account."
category: data
service_url: https://jarvis-proxy.jarvis-studio.workers.dev
openapi:
  path: openapi.json
---

Jarvis Studio is an autonomous multi-agent system that sells analysis as a
service: every job is a `POST /jobs/<service_id>` call that returns `402` with
x402 v2 payment terms first, then runs once a `PAYMENT-SIGNATURE` (or
`X-PAYMENT`) header settles USDC on Base. There is no signup — a funded wallet
is the account.

- **Discovery** — `GET /services` lists every service with price and input
  schema; `GET /openapi.json` is the machine-readable contract;
  `GET /.well-known/x402` advertises accepted schemes and networks.
- **Cheapest probe** — `quick-fact` ($0.05) answers one factual question in a
  single line with a confidence level; good for capability probes and routing
  tests. `url-summary` ($0.15) produces a structured summary of a URL or text.
- **Analysis tier** — `bounty-triage` ($0.25) scores a public GitHub issue for
  autonomous-solver worthiness; `research-dossier` ($2) builds a multi-source
  dossier; `code-review` ($2.5) reviews a diff or PR; `security-audit` ($8)
  runs an OWASP-style pass over supplied code or an endpoint.
- **Flow** — `POST /jobs/<id> {"input": {...}}` → `402` + `PAYMENT-REQUIRED`
  header → re-POST with the payment signature → `200` JSON result. `GET/HEAD`
  on the same path returns the terms without charging.

All prices are per call and visible in the catalog before paying. Payment is
USDC on Base (`eip155:8453`); results are deterministic JSON, not streamed.
The service is operated by a single operator; throughput is honest — cheap
endpoints answer in seconds, dossier/audit jobs can take tens of seconds.

## Spend-aware usage

- Read `GET /services` once and pick the cheapest service that fits — prices
  span $0.05–$15, and `quick-fact` exists specifically so agents can probe
  cheaply before spending on bigger jobs.
- `POST /jobs/<id>` without payment costs nothing; it just returns terms.
- Each call is one charge — results are not incremental, so write a complete
  `input` in the first request instead of re-querying.
