---
name: x402
title: "Clawd — x402.wtf Paid AI Agent Platform on Solana"
description: "x402.wtf paid AI agent platform and Solana DeFi API hub. Private Claude operator sessions, premium agent routing, wallet intelligence, stock data, Pump.fun analytics, 124-agent catalog. USDC or $CLAWD accepted. Holders get tiered discounts."
use_case: "Use for private Claude operator sessions, specialized DeFi/trading agent routing, Solana wallet intelligence briefs, realtime stock fundamentals, and Pump.fun token intelligence. $CLAWD holders get discounted access. Start with GET /api/x402/catalog."
category: ai_ml
service_url: https://x402.wtf
version: v1
openapi:
  path: openapi.json
---

Official Clawd API platform at [x402.wtf](https://x402.wtf). Payments via x402 USDC on Solana mainnet or $CLAWD token. All paid routes return HTTP 402 with a Solana x402 payment challenge; use the [`@pump-fun/x402`](https://www.npmjs.com/package/@pump-fun/x402) SDK or any x402-compatible client to auto-handle payment.

## $CLAWD Token

$CLAWD is the native utility token of the Clawd platform — powering fee discounts, unlimited agent access, and on-chain commitment schemes across the ecosystem.

- **Mint**: [`8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump`](https://jup.ag/swap/SOL-8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump) (SPL token on Solana mainnet, launched on Pump.fun)
- **Buy**: [Jupiter swap](https://jup.ag/swap/SOL-8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump) — SOL → CLAWD in one click
- **Holder tier**: any wallet holding $CLAWD unlocks unlimited agent sessions, priority scraping, Phoenix perps data, and Imperial trading signals

| Balance | Access |
| --- | --- |
| 0 CLAWD | Pay-per-request via USDC x402 |
| ≥ 1,000 CLAWD | Equivalent access to `/api/x402/agent/chat` ($0.69420) |
| Any CLAWD | Clawd Holder badge · unlimited agent sessions · early features |

Check live CLAWD overlay prices and tiers at `/api/x402/catalog` before any paid request.

## Endpoint Pricing

| Endpoint | Price | Description |
| --- | --- | --- |
| `POST /api/x402/clawd` | $1.50 USDC | Private Clawd operator session — SSE stream |
| `POST /api/x402/agent/chat` | $0.69420 USDC | Premium agent chat — SSE stream |
| `POST /api/x402/agents/chat` | $0.25 USDC | Bundled Solana/DeFi agent routing |
| `POST /api/store/agents/wallet-brief` | $0.10 USDC | Solana wallet intelligence brief |
| `POST /api/x402/stocks/data` | $0.15 USDC | Realtime stock fundamentals |
| `POST /api/x402/backroom-pump/data` | $4.20 USDC | Pump.fun token intelligence |
| `POST /api/x402/backroom-pump/analyze` | $4.20 USDC | AI analysis over Pump.fun data |
| Free endpoints | — | Catalog, agents list, DexScreener, DEX token data |

## Agent Catalog

124 production AI agents across 11 categories at `/api/agents`. Route to any by `agentId` via `/api/x402/agents/chat`.

| Category | Count | Examples |
| --- | --- | --- |
| DeFi | 60 | Liquidity analyzer, yield optimizer, risk monitor |
| Payments | 25 | x402 facilitator, CLAWD payment agent, invoice agent |
| Trading | 8 | Phoenix perps trader, TWAP executor, grid strategy |
| Analytics | 11 | Wallet brief, DEX scanner, PnL reporter |
| Security | 8 | Rug detector, audit assistant, phishing scanner |
| NFT | 2 | Metaplex minter, collection appraiser |
| Dev Tools | 3 | Solana program auditor, IDL parser, Anchor helper |
| Other | 7 | Research, governance, education, infrastructure |

Use `/api/x402/agents/catalog` to get agentIds for routing via `/api/x402/agents/chat`.

## Companion Services

| Service | URL | Description |
| --- | --- | --- |
| Backroom API | `https://backroom-3d.fly.dev` | FastAPI multi-agent server: Firecrawl, monitors, Phoenix perps, loop agents. API key via `/v1/machines/handshake`. |
| Gacha API | `https://gacha.solanaclawd.com` | Provably fair AI agent gacha + Phoenix perps proxy. See `clawd/lobster-gacha`. |
| x402 SDK | `npm install @pump-fun/x402` | Drop-in client for auto-handling 402 → sign → retry on any Solana keypair. |

## Spend-Aware Usage

- Call `GET /api/x402/catalog` (free) first — returns live prices and CLAWD discount tiers
- Use `POST /api/store/agents/wallet-brief` ($0.10) for cheapest live wallet data
- Use `POST /api/x402/stocks/data` ($0.15) for a single stock fundamentals call
- Use `POST /api/x402/agents/chat` ($0.25) with a specific `agentId` for specialized Solana/DeFi tasks
- Use `POST /api/x402/agent/chat` ($0.69420) for iterative multi-turn sessions, or hold 1,000 CLAWD for equivalent access
- Use `POST /api/x402/clawd` ($1.50) for autonomous multi-step operator-grade execution
- Use `POST /api/x402/backroom-pump/*` ($4.20) only for deep Pump.fun intelligence — most expensive tier
- All `/api/dexscreener/*` and `/api/dex/token-data` endpoints are free
