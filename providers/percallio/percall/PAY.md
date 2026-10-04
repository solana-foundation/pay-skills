---
name: percall
title: "percall"
description: "Keyless pay-per-call JSON-RPC + early-chain data API for AI agents on Arc (chainId 5042) and Base (chainId 8453). One HTTP 402 + one USDC EIP-3009 authorization, no API key, no account. Per-call priced RPC (light $0.002 / standard $0.003 / heavy $0.005), token model scores (S/T/rug + verdict), live token USD quotes (all chains), new-contract deployment feed, USDC whale flows, token hygiene audits, one-call wallet/token risk reports, and a $5/week prepaid pack. Free tier: 50 calls/day per wallet."
use_case: "Use for keyless on-chain RPC access (block number, eth_call, receipts, logs) on Arc and Base, memecoin model scoring (signal/timing/rug probability), live token USD prices from top pools, new contract deployment discovery, USDC whale flow tracking, and one-call address/token risk reports — all settled per-call in USDC with no API key or account. Agents can also run 50 free calls/day per wallet via the X-From header."
category: crypto_finance
service_url: https://api.percall.io
openapi:
  path: openapi.json
---

Keyless pay-per-call data API for AI agents, built on the x402 protocol (HTTP 402 + USDC EIP-3009).

## Spend-aware usage

- Any request answers with HTTP 402 carrying the exact per-call USDC price. Sign a
  USDC transferWithAuthorization (EIP-712) for that amount and retry with the
  `X-PAYMENT` header. The payer pays no gas.
- Free tier: `X-From: 0x<wallet>` header, 50 calls/day per wallet — do not pay for
  light exploration calls when the free tier still has budget.
- Regulars: sign ONE $5/week pack via `POST /topup` (value 5000000, plan "week");
  every call after is off-chain accounting with zero per-call on-chain ops.

## Endpoints

- `POST /arc/` and `POST /base/` — keyless JSON-RPC (Arc 5042 / Base 8453), priced per
  method: light $0.002, standard $0.003, heavy $0.005, batch capped at $0.05.
- `GET /score?address=0x..&chain=solana|base|bsc|arc` — $0.01 model score for one
  token: S (signal strength) / T (timing) / rug (probability) + verdict
  (strong/watch/neutral/risky) + hours since listing.
- `GET /price?address=0x..&chain=base|bsc|solana|arc` — $0.005 live USD price for any
  token from its top pool: price + 1h/6h/24h change + 24h volume + pool liquidity.
  Chain is auto-detected from the trending universe when omitted.
- `GET /deployments?window=3600` — $0.01 new contract deployment feed (Arc alone:
  ~2,800/day).
- `GET /whales?window=3600` — $0.005 top 20 USDC flow addresses (bridge/DEX/whale).
- `GET /audit?address=0x<token>` — $0.02 token hygiene report with pass/warn/fail verdict.
- `GET /wallet-report?address=0x..` / `GET /token-report?address=0x<token>` — $0.05
  one-call risk/flow profiles that replace ~8 RPC round-trips.
- `GET /meme?chain=solana|base|bsc|arc|all` — $0.01 trending memecoins per chain joined
  with live S/T/rug model scores.

Machine-readable price list: `GET /plans`. Agent docs: https://percall.io/llms.txt
