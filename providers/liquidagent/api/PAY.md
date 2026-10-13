---
name: api
title: "Liquid Agent"
description: "x402 money tools for agents: one-signature USDC bridge between Base and Arc via Circle CCTP, live Polymarket price to beat for crypto Up/Down markets, tokenized US stock vaults on Base, USDC gas sponsor, CCTP status."
use_case: "Use for bridging USDC between Base and Arc, the official Polymarket price to beat for BTC/ETH/SOL/XRP 5m or 15m markets, buying tokenized NVDA/META/AAPL/GOOGL from $1, paying gas in USDC, or checking USDC balances and CCTP transfers."
category: finance
service_url: https://api.liquidagent.ai
openapi:
  path: openapi.json
---

Liquid Agent is a set of x402 money tools for AI agents, built by Project Pi Labs. Paid resources return an HTTP 402 challenge; free reads need no payment or key. With the `pay` CLI, the Solana gas sponsor is payable directly in Solana USDC; the other paid endpoints settle in USDC on Base or Polygon over x402. A remote MCP server with the same tools is available at `https://api.liquidagent.ai/mcp` (Streamable HTTP, no auth, 24 tools).

## Paid services

- **Gas sponsor**: pay gas in USDC on Base, Polygon and Solana from $0.03. `POST /v1/gas/solana` accepts USDC on Solana mainnet; `POST /v1/gas` covers Base and Polygon (ERC-4337 / ERC-7677 and EIP-7702).
- **Polymarket price to beat**: the official price to beat for Polymarket crypto Up/Down markets (BTC, ETH, SOL, XRP on 5m and 15m), live during the window, $0.002 per call. `GET /v1/polymarket/{asset}-{interval}`. Paid in USDC on Base or Polygon.
- **Liquid Bridge**: one-signature USDC bridge between Base and Arc via Circle CCTP, exact delivery to the payer, 1% fee, referrers earn 20% on-chain. Proof of delivery at `GET /v1/bridge/proof`.
- **Tokenized stock baskets**: US stock basket vaults on Base (NVDA, META, AAPL, GOOGL) from $1. Write endpoints return unsigned transactions the agent signs and broadcasts; the server holds no key. Signals at `GET /v1/signals`, $0.005.

## Free tools

- USDC balances on 11 CCTP chains: `GET /v1/bridge/balances/{address}`
- Status of any CCTP transfer: `GET /v1/bridge/cctp/{txHash}`
- Bridge quotes, routes and status: `GET /v1/bridge/quote`, `GET /v1/bridge/routes`, `GET /v1/bridge/status/{burnTx}`
- Basket, vault and quote reads: `GET /v1/basket`, `GET /v1/vault/{address}`, `GET /v1/quote`

## Spend-aware usage

- Read the free guides first (`GET /v1/guide`, `GET /v1/bridge/guide`) and use free quote endpoints before any paid call.
- Call a Polymarket price-to-beat endpoint once per window; the price to beat does not change during the window.
- Check USDC balances and CCTP status with the free endpoints instead of polling paid ones.
- Request a gas quote first; the sponsor price is the floor or the quoted amount for your operation, whichever is higher.
