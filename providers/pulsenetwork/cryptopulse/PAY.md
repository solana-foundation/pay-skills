---
name: cryptopulse
title: "CryptoPulse"
description: "Global crypto intelligence: DeFi yield/APY on Ethereum, Base, Arbitrum and Solana (live DeFiLlama TVL and APY), wallet-security and custody guidance, threat intelligence, exchange comparison, crypto-tax for 20+ countries, plus onboarding and banking."
use_case: "Use for DeFi yield discovery by chain and risk, crypto wallet-security and custody decisions, exchange selection, crypto-tax questions across 20+ countries, scam/threat intelligence, and beginner crypto onboarding and banking guidance."
category: finance
service_url: https://cryptopulse.theaslangroupllc.com
openapi:
  path: openapi.json
---

CryptoPulse is a global crypto-intelligence API spanning 11 endpoints, powered
by CoinGecko, DeFiLlama, the Fear & Greed Index and Tavily. Highlights:

- `GET /api/yield?chain=&risk=` — DeFi yield/APY across Ethereum, Base,
  Arbitrum and Solana with live DeFiLlama TVL + APY. ~$0.10.
- `GET /api/security?token=&address=&chain=` — pre-trade on-chain risk scan
  (honeypot/rug/tax + sanctioned-address screening via GoPlus, 7 EVM chains),
  plus a self-custody framework via `value_tier`/`setup`. ~$0.10.
- `GET /api/threats` — current crypto threat/scam intelligence.
- Plus `strategy`, `exchange`, `tax` (20+ countries), `onboard`, `spend`,
  `banking`, `merchant`, and `research-brief`.

Every endpoint is x402-gated and the 402 advertises USDC on **both Solana
mainnet and Base** — pay with either.

## Spend-aware usage

- Pass the narrowest scope you have: a specific `chain` and `risk` for yield,
  a specific country for tax — broad queries cost the same but return more to
  filter.
- Results are intelligence summaries, not realtime quotes; cache within a
  session rather than re-calling the same endpoint with identical params.
- `/api/threats` and `/api/yield` change slowly intraday — one call per task
  is enough.
