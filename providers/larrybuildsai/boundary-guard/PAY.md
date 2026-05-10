---
name: boundary-guard
title: "Boundary Guard x402"
description: "Revenue-safety checks for x402 sellers and agent builders: scan paid APIs before listing, probe unpaid 402 challenges, and attach receipts to risky agent actions."
use_case: "Use before listing or routing to a paid x402 API, after deploys that may break payment metadata, or when an agent needs a receipt around a risky write/send/publish/pay workflow."
category: devtools
service_url: https://x402-resource-scanner.vercel.app
version: "0.1.0"
openapi:
  path: openapi.json
---

# Boundary Guard x402

> Revenue-safety checks for x402 sellers and agent builders. Scan a paid API before listing it, probe the unpaid 402 challenge before buyers hit it, and attach receipts to agent actions that need a clean audit trail.

## Agent summary

- **FQN:** `larrybuildsai/boundary-guard`
- **Category:** `devtools`
- **Operator:** `larrybuildsai`
- **Origin:** `larrybuildsai`
- **Version:** `0.1.0`
- **REST endpoints:** `4`
- **MCP tools:** `5`
- **REST pricing:** `$0.05-$10.00/request`
- **HTML page:** https://x402-resource-scanner.vercel.app/
- **Agent docs:** https://x402-resource-scanner.vercel.app/llms.txt

## Service URLs

- **Gateway:** https://x402-resource-scanner.vercel.app
- **OpenAPI:** https://x402-resource-scanner.vercel.app/openapi.json
- **x402 manifest:** https://x402-resource-scanner.vercel.app/.well-known/x402
- **MCP discovery:** https://x402-resource-scanner.vercel.app/.well-known/mcp.json
- **MCP endpoint:** https://x402-resource-scanner.vercel.app/mcp
- **Agent skill:** https://x402-resource-scanner.vercel.app/skill.md

## Why buyers use it

Paid APIs fail in boring ways that still cost money: a listing is missing a price, an endpoint stops returning a parseable `402`, the network or asset metadata is wrong, or an agent cannot tell what was checked before it spent time on a paid workflow.

Boundary Guard x402 gives sellers and agent builders a cheap preflight layer before the handoff breaks. It does not try to replace the payment flow or claim downstream settlement. It checks the public surfaces that help buyers trust the flow before they call it.

Use it when you need to:

- find listing gaps before submitting a paid API to a marketplace
- catch broken `402` metadata before agents and buyers bounce
- verify expected network, asset, and price metadata before launch
- give support, ops, or buyers a receipt that shows what was checked
- prove the boundary of a workflow without claiming more than the tool observed

## REST endpoints

### Preflight a listing

`GET /v1/x402/scan?url={providerUrl}` — **$0.25/request**

Scans public x402 and OpenAPI metadata for a target service. Returns resource counts, price surfaces, listing gaps, issue flags, a readiness score, and next steps.

Best for sellers preparing a pay.sh, xpay, CDP Bazaar, Agentic.Market, or marketplace submission. Run it before listing, after deploys, and before sending buyers to a paid endpoint.

### Check the paid path before buyers do

`POST /v1/x402/health/probe` — **$0.50/request**

Sends an unpaid request to a public paid endpoint and checks the conversion-critical part of the flow: does the endpoint return HTTP `402`, can the payment requirements be parsed, and do network, asset, and price match what the seller expected?

This is a seller health check for the unpaid challenge. It does not sign a payment, spend buyer funds, or prove the paid action completed.

### Check agent-tool readiness

`POST /v1/x402/agent-tools/readiness` — **$1 quick / $5 deep / $10 report**

Checks whether an x402 or agent-facing paid tool is ready for marketplace listing, buyer routing, and paid-path monitoring. Quick checks metadata and listing surfaces, deep adds paid-path guidance when supplied, and report returns launch/report guidance.

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

### Create an action receipt

`POST /v1/receipts/check` — **$0.05/request**

Creates a deterministic receipt from submitted request metadata, policy outcome, result summary, optional payment metadata, and next-step guidance.

Use it when an agent needs a compact record of what it was about to do, what policy said, what happened, and what remains unproven.

Send hashes, IDs, safe summaries, and policy labels. Do not send secrets, bearer tokens, cookies, private keys, raw customer data, or payment signatures.

## MCP tools

Boundary Guard also exposes a Streamable HTTP MCP endpoint at `/mcp`.

Tools:

- `boundary_guard_check` — suggested xpay price `$0.03/call`
- `scan_x402_resource` — suggested xpay price `$0.10/call`
- `probe_x402_paid_path` — suggested xpay price `$0.50/call`
- `check_agent_tool_readiness` — suggested x402 price `$1-$10/call`, depending on tier
- `generate_trust_receipt` — suggested xpay price `$0.05/call`

Use the MCP endpoint when an agent needs these checks inside a tool workflow instead of a direct REST call.

## Buyer jobs

### Seller launch check

Before announcing a paid API, scan the service and probe the paid path. The goal is simple: buyers should see a clean listing, a parseable `402`, and payment metadata that matches what you meant to charge.

### Ongoing uptime check

After deploys, run the health probe against paid endpoints. A normal uptime monitor can say the URL is alive while the x402 challenge is broken. Boundary Guard checks the part that matters for paid conversion.

### Agent trust checkpoint

Before an agent writes, sends, publishes, or calls another paid tool, attach a receipt. The receipt gives the operator a clean record without pretending it proves downstream work that Boundary Guard did not see.

## Spend-aware usage

- Run one scan before marketplace submission, then re-run only after deploys, pricing changes, manifest changes, or listing edits.
- Use the health probe for targeted endpoint checks, not broad crawling or polling loops.
- Cache receipts by workflow/action ID when the underlying evidence has not changed.
- Prefer hashes, IDs, and short summaries over raw payloads in receipt requests.

## Safety notes

- Direct REST endpoints advertise Solana mainnet USDC and Base USDC x402 accepts.
- Unpaid protected calls return HTTP `402` with payment metadata.
- Health Probe v1 only checks unpaid challenge shape and advertised payment requirements.
- Health probes reject localhost, private, internal, credentialed, redirecting, and DNS-to-non-global targets.
- Health probes allow only unpaid `GET`, `HEAD`, and `OPTIONS` target methods.
- Receipts prove what Boundary Guard received, hashed, and returned. They do not prove downstream real-world execution.
- Privacy-safe analytics avoid raw request bodies, secrets, full URLs, auth headers, payment signatures, cookies, private keys, full IPs, and full user agents.

## Claim boundary

Boundary Guard x402 is a verification layer, not an escrow service and not a payment executor. It helps sellers avoid broken paid-path launches, helps agent builders add evidence to risky workflows, and helps marketplaces see whether a provider is ready to be routed to buyers.
