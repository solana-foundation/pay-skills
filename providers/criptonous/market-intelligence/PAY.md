---
name: market-intelligence
title: "CriptoNous Market Intelligence (x402)"
description: "CriptoNous x402 crypto market intelligence - on-chain flow, wallet intel, sentiment pulse, regime timing, oracle readings, multi-source confluence. Pay-per-query USDC on Solana (plus Base); AccessPass receipts. NFA analysis only."
use_case: "Use for crypto on-chain flow reads, wallet intel, narrative/sentiment pulse, regime timing, structured oracle readings, and multi-source confluence. Prefer hermes.pulse ($0.02) as first paid probe."
category: finance
service_url: https://app.criptonous.com
version: "1.18.40"
openapi:
    path: openapi.json
---

CriptoNous sells pay-per-query crypto **market intelligence** over HTTP 402 (x402). Agents discover the catalog via `/.well-known/x402`, pay USDC once per SKU, receive an AccessPass plus an HMAC receipt, then consume structured intelligence. NFA: analysis and context only - never trade execution, custody, or guaranteed returns.

Every `402` challenge advertises **Solana mainnet USDC** (SPL, primary rail) and **Base mainnet USDC** (`eip155:8453`, EIP-3009). Other EVM rails may appear in the challenge; Solana is always present.

Cheapest probe: `GET /x402/resource/hermes.pulse` - **$0.02 USDC**.

Machine discovery:

- Manifest: `https://app.criptonous.com/.well-known/x402`
- Skill: `https://app.criptonous.com/skill.md`
- OpenAPI: `https://app.criptonous.com/openapi.json`
- Agent guide: `https://app.criptonous.com/x402/docs/agent-guide`
- llms.txt: `https://app.criptonous.com/llms.txt`
- Pricing text: `https://app.criptonous.com/x402/pricing`
- x402-list: `https://x402-list.com/services/criptonous-market-intelligence`
- x402scan: `https://www.x402scan.com/server/88641313-12a2-42d5-b50c-6e2b75c1c5c8`

Contact: `oraculo@criptonous.app`

## Pricing ladder

| Price | SKU | Role |
|-------|-----|------|
| $0.01 | `temple.catalog` | Machine catalog of paid SKUs |
| $0.02 | `hermes.pulse` | Sentiment/narrative pulse (first paid call) |
| $0.03 | `dionisio.heat` | Social/meme heat snapshot |
| $0.04 | `hermes.wire` | News/agora wire pulse |
| $0.05 | `kairos.regime` | Market regime / timing context |
| $0.05 | `poseidon.flow` | On-chain DEX flow: accumulation vs distribution |
| $0.08 | `kairos.panic` | Panic/squeeze score |
| $0.10 | `delfos.reading` | Oracle reading + conviction |
| $0.12 | `swarm.pulse` | Multi-source confluence snapshot |
| $0.15 | `temis.crystal` | Risk-control evidence / deliberation |
| $0.25 | `delfos.signal` | Structured oracle reading (machine format) |
| $0.35 | `oracle.seal` | Oracle + risk-control sealed reading |
| $0.50 | `pantheon.brief` | Multi-agent brief (1-3 symbols) |
| $1.00 | `pantheon.confluence` | Multi-agent consensus snapshot |
| $1.50 | `poseidon.dna` | Wallet DNA / clustering |
| $2.50 | `temis.audit` | Anti-rug / contract risk analysis (not a legal audit) |
| $6.00 | `pantheon.war_council` | Full deliberative session |
| $9.00 | `session.24h` | 24h AccessPass: 12 metered reads of SKUs priced up to $1.00 |
| $15.00 | `pantheon.deep_report` | One-shot deep report |

The live OpenAPI and `GET /.well-known/x402` are canonical if this pack lags.

## Spend-aware usage

- **Start with `hermes.pulse` ($0.02)** before buying confluence or oracle SKUs - it validates the wallet and facilitator path with minimal spend.
- **Smoke kit ($0.19 total, three separate pays):** `hermes.pulse` $0.02 + `poseidon.flow` $0.05 + `swarm.pulse` $0.12.
- **`session.24h` ($9):** one signature covers 12 reads of SKUs priced up to $1.00 (spending cap 12 USDC). It only saves money when your 12 reads average more than $0.75 each; for cheaper SKUs, pay per call. For a single probe, buy `hermes.pulse` - never open a $9 pack for one call.
- **Call `temple.catalog` once** to refresh prices and tags; do not re-buy it every turn.
- **Pass `?symbol=SOL` (or similar)** only when the SKU is symbol-scoped; omit it for pantheon and session packs.
- **NFA boundary:** payloads are intelligence and context. Never treat them as trade tickets, custody instructions, or promises of returns.

## Payment flow (agents)

1. `GET /x402/resource/{sku}` - HTTP 402 with a `PAYMENT-REQUIRED` challenge.
2. Pay through a facilitator, then retry with `PAYMENT-SIGNATURE`.
3. Receive the AccessPass and receipt, then consume the intelligence payload.
