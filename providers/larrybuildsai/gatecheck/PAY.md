---
name: gatecheck
title: "GateCheck by LarryBuildsAI"
description: "Read-only x402 and MCP seller-readiness checks, unpaid 402 health probes, deterministic trust receipts, agent-tool routeability reports, and marketplace launch-pack artifacts."
use_case: "Use before listing, promoting, or routing paid traffic to an x402 API or remote MCP server when an agent needs public discovery, payment-challenge, and claim-boundary evidence."
category: security
service_url: https://proofbeforepay.vercel.app
version: v1
openapi:
  path: openapi.json
---

GateCheck helps paid API and MCP sellers verify public routeability before buyer
agents spend. It inspects public discovery metadata, tests unpaid x402 challenge
behavior without signing or paying, creates claim-bounded evidence receipts, and
can generate marketplace launch artifacts.

The production API accepts Solana mainnet USDC and Base mainnet USDC. Public MCP
discovery is available at `https://proofbeforepay.vercel.app/gatecheck/mcp`.

## Spend-aware usage

- Start with the $0.50 health probe only when a specific paid route needs an unpaid 402 check.
- Choose the $1 quick readiness tier before the $5 deep or $10 report tiers.
- Generate a $9 launch pack only after readiness evidence shows the service is suitable for distribution.
- Cache reports and receipt hashes; repeat a check only after a deployment or payment-configuration change.

## Safety and claim boundaries

- GateCheck does not sign payments, move funds, access private endpoints, or accept credentialed target URLs.
- Results prove observed public metadata and unpaid challenge behavior only.
- Results do not prove settlement, security certification, marketplace endorsement, customer adoption, or revenue.
