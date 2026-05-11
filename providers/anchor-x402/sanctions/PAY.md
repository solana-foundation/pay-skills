---
name: sanctions
title: "anchor-x402: wallet compliance"
description: "OFAC sanctions screening, bundled wallet intelligence (balances + activity + identity + sanctions in one call across Base, Ethereum, Solana), and async multi-step wallet due-diligence with signed reports and dual-chain anchor proofs."
use_case: "Use for OFAC sanctions screening, KYB pre-flight, AML compliance gates, counterparty due-diligence reports, wallet risk scoring, on-chain identity lookups, and signed investigative reports for institutional review."
category: identity
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

Three wallet-compliance endpoints on Base + Solana mainnet. Pay-per-call USDC via x402 v2, no API keys.

- `GET /v1/screen?wallet=...` — $0.001 — OFAC SDN sanctions + AML screening, returns sanctions_match boolean, flagged programs (Tornado Cash, Lazarus, Hydra, Garantex, etc.), inferred chain, low/medium/high risk verdict.
- `GET /v1/intel/wallet?wallet=...` — $0.005 — Unified wallet intelligence bundle: native + USDC balances across Base + Ethereum + Solana, transaction count, has-history flag, reverse ENS / SNS, sanctions verdict. Replaces 8-10 separate RPC + API hits with one call.
- `POST /v1/investigate { address }` — $7.77, async 5-10 min — Agent-driven multi-step wallet due diligence. Returns `{job_id, status_url}`; poll status until `DELIVERED`. Deliverable is a signed markdown report + JSON sidecar with on-chain anchor proof on Base + Solana.

## Spend-aware usage

- Escalate cheaply: `screen` ($0.001) for a yes/no sanctions check first. Only call `intel` ($0.005) when you also need balances / identity / tx history. Only call `investigate` ($7.77) when the user explicitly asks for a full due-diligence report or for regulated OTC / compliance contexts.
- `intel` already includes sanctions verdict — don't call `screen` separately when you're already paying for `intel`.
- `investigate` is async. Set user expectations ("ETA 5-10 min"); poll `status_url` every 30s.
- The signed report from `investigate` carries a dual-chain Merkle anchor on Base + Solana. Anyone can verify the receipt by reading the chain — no contact with anchor-x402 required.
