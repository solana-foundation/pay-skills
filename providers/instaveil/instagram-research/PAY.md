---
name: instagram-research
title: "InstaVeil Instagram Research"
description: "InstaVeil public Instagram research API returns profile metadata, current public Story snapshots, creator intelligence, two-account comparisons and Lens analysis as JSON, with per-call Solana USDC payments."
use_case: "Use for Instagram creator vetting, public profile enrichment, current Story research, campaign preparation and competitor comparisons. Select one narrow paid endpoint after checking its input schema and price; private accounts are unsupported."
category: media
service_url: https://instaveil.com
openapi:
  path: openapi.json
---

Public Instagram research for agents. All five paid routes use POST with a JSON
body. Discovery at https://instaveil.com/api/x402/catalog and the MCP discovery
tools at https://instaveil.com/mcp are free. Results require buyer-authorized
x402 v2 payment in USDC on Solana mainnet.

## Routes and prices

- POST /api/x402/profile-snapshot: 0.01 USDC; public profile metadata and recent media.
- POST /api/x402/story-snapshot: 0.05 USDC; currently available public Stories.
- POST /api/x402/profile-intelligence: 0.15 USDC; creator research and computed public signals.
- POST /api/x402/creator-compare: 0.29 USDC; compare two or three public creators.
- POST /api/x402/veil-lens: 0.75 USDC; Lens analysis of public profile data.

Read the committed OpenAPI request schemas before choosing parameters. An unpaid
POST returns HTTP 402 and the payment challenge; GET is not the paid method.
A successful paid response includes a PAYMENT-RESPONSE settlement receipt.
Catalog compatibility checks do not prove a successful paid delivery or a sale.

## Spend-aware usage

- Choose the cheapest endpoint that answers the buyer's actual question.
- Inspect free discovery and request schemas before signing any payment.
- Reuse a current result for repeated questions; do not assume historical
  or private Story access, deleted media recovery, or guaranteed availability.
- Creator intelligence and Lens outputs include computed analysis, not
  first-party Instagram audience analytics or verified ownership claims.
- Do not pay repeatedly for an upstream-unavailable result. Check status and
  retry only when appropriate.
