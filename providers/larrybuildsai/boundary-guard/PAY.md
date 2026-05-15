---
name: boundary-guard
title: "Boundary Guard x402"
description: "Revenue-safety checks for x402 sellers and agent builders: scan paid APIs before listing, probe unpaid 402 challenges, and attach receipts to risky agent actions."
use_case: "Use before listing or routing to a paid x402 API, after deploys that may break payment metadata, or when an agent needs a receipt around a risky write, send, publish, or pay workflow."
category: devtools
service_url: https://x402-resource-scanner.vercel.app
version: "0.1.0"
openapi:
 path: openapi.json
---

# Boundary Guard x402

> Revenue-safety checks for x402 sellers and agent builders. Scan a paid API before listing it, probe the unpaid 402 challenge before buyers hit it, and attach receipts to agent actions that need a clean audit trail.

## Agent Summary

- **FQN:** `larrybuildsai/boundary-guard`
- **Category:** `devtools`
- **Operator:** `larrybuildsai`
- **Origin:** `larrybuildsai`
- **Version:** `0.1.0`
- **REST endpoints:** `4`
- **MCP tools:** `5`
- **REST pricing:** `$0.05–$10.00/request`
- **HTML page:** https://x402-resource-scanner.vercel.app/
- **Agent docs:** https://x402-resource-scanner.vercel.app/llms.txt

## Service URLs

- **Gateway:** https://x402-resource-scanner.vercel.app
- **Live OpenAPI:** https://x402-resource-scanner.vercel.app/openapi.json
- **x402 Manifest:** https://x402-resource-scanner.vercel.app/.well-known/x402
- **MCP Discovery:** https://x402-resource-scanner.vercel.app/.well-known/mcp.json
- **MCP Endpoint:** https://x402-resource-scanner.vercel.app/mcp
- **Agent Skill:** https://x402-resource-scanner.vercel.app/skill.md

## Registry Scope

This pay-skills listing uses the co-located `openapi.json` sidecar as the canonical registry surface. It intentionally focuses on paid buyer routes that the registry should inspect and route to.

The live OpenAPI and discovery files are broader product surfaces. They also advertise documentation, discovery, MCP metadata, and additional product routes such as the launch-pack generator. That broader live discovery is intentional and should not be read as drift from this pay-skills sidecar.

## Why Buyers Use It

Paid APIs fail in boring ways that still cost money: a listing is missing a price, an endpoint stops returning a parseable `402`, the network or asset metadata is wrong, or an agent cannot tell what was checked before it spent time on a paid workflow.

Boundary Guard x402 gives sellers and agent builders a cheap preflight layer before the handoff breaks. It does not try to replace the payment flow or claim downstream settlement. It checks the public surfaces that help buyers trust the flow before they call it.

Use it when you need to:

- Find listing gaps before submitting a paid API to a marketplace.
- Catch broken `402` metadata before agents and buyers bounce.
- Verify expected network, asset, and price metadata before launch.
- Give support, ops, or buyers a receipt that shows what was checked.
- Prove the boundary of a workflow without claiming more than the tool observed.

## REST Endpoints

### Preflight a Listing

`GET /v1/x402/scan?url={providerUrl}` — **$0.25/request**

Scans public x402 and OpenAPI metadata for a target service. Returns resource counts, price surfaces, listing gaps, issue flags, a readiness score, and next steps.

Best for sellers preparing a pay.sh, xpay, CDP Bazaar, Agentic.Market, or marketplace submission. Run it before listing, after deploys, and before sending buyers to a paid endpoint.

### Check the Paid Path Before Buyers Do

`POST /v1/x402/health/probe` — **$0.50/request**

Sends an unpaid request to a public paid endpoint and checks the conversion-critical part of the flow: does the endpoint return HTTP `402`, can the payment requirements be parsed, and do network, asset, and price match what the seller expected?

This is a seller health check for the unpaid challenge. It does not sign a payment, spend buyer funds, or prove the paid action completed.

The probe is intentionally limited to safe challenge reads by default. Use `target` or `url` in the JSON body, with `method` set to `GET`, `HEAD`, or `OPTIONS`. POST target probes are disabled by default and require a separately scoped opt-in; sellers should not expect POST paid-path probes from this listing.

### Check Agent-Tool Readiness

`POST /v1/x402/agent-tools/readiness` — **$1 quick / $5 deep / $10 report**

Checks whether an x402 or agent-facing paid tool is ready for marketplace listing, buyer routing, and paid-path monitoring. Quick checks metadata and listing surfaces, deep adds paid-path guidance when supplied, and report returns launch and report guidance.

Best for sellers who want an agent-readable readiness score before submitting to pay.sh, xpay, CDP Bazaar, Agentic.Market, or another paid-tool marketplace.

Example body:

```json
{
  "target": "https://seller.example/v1/paid",
  "method": "GET",
  "expected": {
    "network": "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    "asset": "USDC",
    "priceUsd": "0.25"
  }
}
```

### Create an Action Receipt

`POST /v1/receipts/check` — **$0.05/request**

Creates a deterministic receipt from submitted request metadata, policy outcome, result summary, optional payment metadata, and next-step guidance.

Use it when an agent needs a compact record of what it was about to do, what policy said, what happened, and what remains unproven.

Send hashes, IDs, safe summaries, and policy labels. Do not send secrets, bearer tokens, cookies, private keys, raw customer data, or payment signatures.

## MCP Tools

Boundary Guard also exposes a Streamable HTTP MCP endpoint at `/mcp`.

### Boundary Guard Check

Suggested xpay price: **$0.03/call**

Create a Boundary Guard pre-action checkpoint receipt for an agent request, policy decision, and result summary.

### Scan x402 Resource

Suggested xpay price: **$0.10/call**

Read-only scan of public x402 and OpenAPI metadata, with optional comparison to a marketplace listing for staleness.

### Probe x402 Paid Path

Suggested xpay price: **$0.50/call**

Probe a public x402 endpoint without payment, parse the 402 challenge, compare expected network, asset, and price, and return a deterministic health receipt.

### Check Agent Tool Readiness

Suggested xpay price: **$1.00/call** (quick) / **$5.00/call** (deep) / **$10.00/call** (report)

Check whether an x402 or agent-facing tool is ready for agent routing, marketplace listing, and paid-path monitoring.

### Generate Trust Receipt

Suggested xpay price: **$0.05/call**

Generate a deterministic trust receipt from arbitrary request, policy, result, and payment evidence.