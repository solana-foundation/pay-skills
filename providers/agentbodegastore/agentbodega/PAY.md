---
name: agentbodega
title: "AgentBodega"
description: "Pay-per-call APIs for agents across status monitoring, web search, public data, social research, media conversion, real-estate intelligence, agent readiness, and payment discovery. Pay with USDC on Solana mainnet or Base through x402."
use_case: "Use when an agent needs a bounded, machine-readable result without opening an account or integrating another vendor API. Inspect the catalog first, select the narrowest route that solves the task, and pay only for that call."
category: devtools
service_url: https://agentbodega.store
openapi:
  path: openapi.json
---

AgentBodega is a catalog of paid, machine-readable tools built for autonomous
agents. Its 71 paid offerings cover focused checks, searches, conversions, and
reports. Each offering publishes its accepted inputs, required fields, output
schema, current price, and example request before payment, so a caller can make
a spend-aware decision without guessing the contract.

Paid endpoints use x402 v2 and accept USDC on either:

- **Solana mainnet**: SPL USDC mint
  `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`.
- **Base mainnet**: USDC contract
  `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`.

Call a paid endpoint without a payment signature to receive its HTTP `402`
challenge. Read the `PAYMENT-REQUIRED` header, choose one advertised rail, sign
the exact requirement, and retry with `PAYMENT-SIGNATURE`. Successful paid
responses include a settlement receipt. The lowest-priced checks currently
start at **$0.005 USDC per successful call**.

The catalog includes official service and cloud health checks; public web,
market, social, and real-estate research; media and document conversion; domain
and username availability; launch and agent-readiness audits; x402 inspection;
and packaged reports. Full metadata is available from `/api/directory`, while
`/.well-known/x402` exposes the live payment requirements and route examples.

## Spend-aware usage

- Read `/api/directory` and `/.well-known/x402` before spending. They show the
  live route list, current prices, input contracts, output examples, and payment
  rails.
- Start with a direct status alias such as `/api/status/openai`,
  `/api/status/github`, or `/api/status/cloudflare` when you only need one
  service. These are the cheapest useful checks at $0.005 each.
- Use `/api/status/bundle` or `/api/status/stack` when the user is debugging a
  deploy path and wants one answer across several dependencies.
- Use `/api/cloud/status/check` for one cloud provider target, or
  `/api/cloud/status/bundle` and `/api/cloud/status/stack` when the user wants a
  bounded cloud-provider stack check.
- Use `/api/audit/agent-launch` only when you need the full launch/readiness
  report. The focused checks are cheaper when you already know whether the
  problem is discovery, protocol metadata, or commerce.
- Cache a receipt and result inside the agent session instead of repeating the
  same check during a retry loop.
- Set a client-side maximum before signing. A `402` challenge is a quote, not a
  completed charge; settlement occurs only after the signed retry succeeds.
