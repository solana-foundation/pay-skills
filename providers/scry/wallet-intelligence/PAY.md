---
name: wallet-intelligence
title: "Scry Wallet Intelligence"
description: "Pay-per-request Solana wallet evidence via x402: funding lineage, bundler/private-routing checks, forensics dossiers, Pump.fun cohort context, and mint preflight for agents. No API key."
use_case: "Use when an agent needs Solana wallet funding lineage, bundler hints, forensics, or Pump.fun/mint risk evidence before acting; start with funding lineage (GET /x402/wallet/{address}/lineage); agent-intel-brief secondary."
category: data
service_url: https://scry.solanahub.de
version: v1
openapi:
  path: openapi.json
---

# Scry Wallet Intelligence

Scry exposes Solana wallet-intelligence HTTP routes behind x402 exact USDC payments (Solana mainnet CAIP-2 `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`; Base accepts on many routes).

## Start here

- Discovery: `https://scry.solanahub.de/x402/discovery.json`
- Well-known: `https://scry.solanahub.de/.well-known/x402`
- OpenAPI: `https://scry.solanahub.de/openapi.json` (snapshot committed as `openapi.json` beside this file)
- Readiness (visibility_only): `https://scry.solanahub.de/x402/external-discovery-readiness.json`

## Hero routes (prefer non-alias / param-free where possible)

- `GET /x402/solana/agent-intel-brief` — $0.03 orchestrator brief
- `GET /x402/wallet/:address/lineage` — $0.03 funding lineage
- `GET /x402/wallet/:address/bundler-check` — $0.01
- `GET /x402/wallet/:address/forensics` — $0.05
- `GET /x402/wallet/:address/quick-flag` — $0.001 micropay canary
- `GET /x402/solana/pumpfun-risk-protection` — $0.05
- `GET /x402/mint/{mint}/risk` — $0.03 beta
- `GET /x402/solana/hot-wallets/daily` — $0.10

## Honesty caveats (required)

- Aggregate freshness is **TODAY** / public SLA `fresh` / `stale_count=0`; coverage quality still **yellow** (accepted honesty — not sell-fresh). Trust per-response coverage fields.
- Sell unlock is **closed**; `confirmed_external` is **0**. Any paid-smoke is facilitator residual only and is **not** confirmed_external demand.
- This listing is discoverability metadata only — not revenue, PMF, or production-sell proof.
- Not financial advice.

## Spend-aware usage

- Prefer quick-flag / bundler-check before forensics.
- Prefer path-param canonical routes over marketplace aliases.
- Cap follow-on ladder; reuse address across calls.
- Wrong paths `/v1/discovery`, `/discovery` → 404; use `/x402/…` only.
