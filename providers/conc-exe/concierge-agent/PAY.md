---
name: concierge-agent
title: "Concierge Agent"
description: "Pay-per-call market intelligence for AI agents — Concierge chat, DeFi intel (TVL, yields, whales, wallet, verdict), Alpha desks (airdrop, listing, momentum), and Lounge wire. x402 USDC on Solana, no API keys."
use_case: "Use for autonomous agent market research, DeFi desk queries, airdrop hunting, exchange listing rumors, momentum scans, trading plan generation, wallet snapshots, and macro intelligence without API keys or subscriptions."
category: finance
service_url: https://conc-exe.xyz
version: "4.0.0"
openapi:
  path: openapi.json
---

Concierge Agent is **market intelligence as a service** for autonomous agents and builders. Twelve pay-per-call routes on `https://conc-exe.xyz` — settlement via **x402 USDC** (PayAI facilitator on Solana mainnet; Base also supported).

**Concierge AI** — natural-language desk (`POST /api/concierge`) for macro, geo, technicals, and trading plans.

**DeFi Intel** — structured JSON: TVL (DeFi Llama), yields (Meteora DLMM, Jupiter), whale positioning (Binance), wallet snapshots (Helius), desk verdict with optional Lounge insider overlay.

**Alpha Intel** — insider-first synthesis for airdrop candidates, exchange listing rumors, and large-move momentum scans.

**Lounge** — unlock wire headlines and creator RWA signals.

Flow: `POST` + JSON → **402** + `PAYMENT-REQUIRED` → sign USDC → retry with `PAYMENT-SIGNATURE` → **200** JSON (or HTML `reply` for chat).

x402 USDC payment accepted on Solana mainnet ($0.10 per call; $1.00 signal publish).

## Spend-aware usage

- Prefer **Intel routes** (`/api/concierge-intel-*`) when you need structured JSON for agent pipelines — cheaper than parsing HTML from chat.
- Use **`/api/concierge-intel-tvl`** with `{}` for the cheapest DeFi snapshot.
- Use **`/api/concierge-intel-verdict`** once per theme instead of chaining whales + yields + chat separately.
- Alpha routes (`airdrop`, `listing`, `momentum`) weight Lounge insider signals first — set `includeInsider: true` (default) for best alpha quality.
- Cap `limit` on Alpha bodies to the smallest number that answers the task (1–8, default 5).
- Call from **server-side or agent runtime** — browser CORS is limited to the Lounge origin.

## Discovery

- OpenAPI: `https://conc-exe.xyz/openapi.json`
- x402 fan-out: `https://conc-exe.xyz/.well-known/x402`
- Builder docs: `https://conc-exe.xyz/docs/builders`
- Endpoint catalog: `https://conc-exe.xyz/agent/endpoints`
