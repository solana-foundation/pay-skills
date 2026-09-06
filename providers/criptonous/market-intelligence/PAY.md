---
name: market-intelligence
title: "CriptoNous Market Intelligence (x402)"
description: "CriptoNous x402 crypto market intelligence — whale flow, wallet intel, sentiment pulse, regime timing, oracle signals, multi-source confluence. Pay-per-query USDC on Solana+Base; AccessPass receipts. NFA analysis only."
use_case: "Use for crypto whale-flow reads, smart-money wallet intel, narrative/sentiment pulse, regime timing, structured oracle signals, and multi-source confluence. Prefer hermes.pulse ($0.02) as first paid probe."
category: finance
service_url: https://app.criptonous.com
version: "1.18.3"
openapi:
  path: openapi.json
---

[CriptoNous](https://criptonous.com) pay-per-query crypto **market intelligence** over HTTP 402 (x402). Agents discover the catalog via `/.well-known/x402`, pay USDC once per SKU, receive an AccessPass + HMAC receipt, then consume structured intelligence (NFA — analysis/context only; never trade execution or custody).

Two payment rails are advertised in every `402` challenge when Base is enabled:

- **Solana mainnet** — USDC SPL (Dexter / PayAI / Templo facilitators)
- **Base mainnet** (`eip155:8453`) — USDC EIP-3009 when `X402_BASE_ENABLED=1`

Cheapest probe: `GET /x402/resource/hermes.pulse` → **$0.02 USDC**.

Machine discovery:

- Manifest: `https://app.criptonous.com/.well-known/x402`
- Skill: `https://app.criptonous.com/skill.md`
- OpenAPI: `https://app.criptonous.com/openapi.json`
- Agent guide: `https://app.criptonous.com/x402/docs/agent-guide`
- x402scan: `https://www.x402scan.com/server/88641313-12a2-42d5-b50c-6e2b75c1c5c8`

Contact: `oraculo@criptonous.app`

## Pricing ladder (featured)

| Price | SKU | Role |
|-------|-----|------|
| $0.01 | `temple.catalog` | Machine catalog of paid SKUs |
| $0.02 | `hermes.pulse` | Sentiment/narrative pulse (first paid call) |
| $0.05 | `poseidon.flow` | On-chain whale / smart-money flow |
| $0.12 | `swarm.pulse` | Multi-source confluence snapshot |
| $0.25 | `delfos.signal` | Structured oracle signal (pack ceiling) |
| $9.00 | `session.24h` | 12 metered reads of SKUs ≤ $1.00 (spendingCap 12 USDC; up to $12 catalog value) |

Full table lives in live OpenAPI + `GET /.well-known/x402`.

## Spend-aware usage

- **Start with `hermes.pulse` ($0.02)** before buying confluence or oracle SKUs — validates wallet + facilitator path with minimal spend.
- **`session.24h` ($9)** unlocks 12 consumes of SKUs ≤ **$1.00** with spendingCap **12 USDC** (up to **$12** catalog value). Prefer it for multi-read days / less signing friction. For a single probe, buy `hermes.pulse` ($0.02) — do not open a $9 pack for one call.
- **Call `temple.catalog` once** to refresh prices/tags; do not re-buy catalog every turn.
- **Pass `?symbol=SOL` (or similar)** only when the SKU is symbol-scoped; omit for pantheon/session packs.
- **NFA boundary:** responses are intelligence/context. Never treat payloads as trade tickets, custody instructions, or guaranteed returns.

## Payment flow (agents)

1. `GET /x402/resource/{sku}` → HTTP 402 + `PAYMENT-REQUIRED`
2. Pay via facilitator → retry with `PAYMENT-SIGNATURE` (or Templo tribute + `X-PAYMENT`)
3. Receive AccessPass → consume intelligence via MCP / documented consume path
