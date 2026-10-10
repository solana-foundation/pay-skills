---
name: data
title: "Vextorium"
description: "Pay-per-call on-chain and financial data: gas prices, transaction status, wallet and token lookups, ENS, Uniswap v3 quotes, Chainlink prices, Aave liquidations, ECB FX rates, IBAN checks, and local-AI summaries and sentiment."
use_case: "Use for wallet balances, transaction status, gas fees, ERC-20 token info, ENS resolution, swap quotes, crypto prices, DeFi liquidation monitoring, EUR exchange rates, IBAN validation, and quick text summaries or sentiment scoring."
category: finance
service_url: https://api.vextorium.com
version: v1
openapi:
  path: openapi.json
---

Vextorium serves 20 small, focused data endpoints for agents. On-chain data is read directly from Base, Ethereum, Arbitrum, Optimism and Polygon nodes, with prices from Chainlink oracles and quotes from Uniswap v3; FX rates come from the European Central Bank. Text tools run on a local Qwen2.5-7B model. Every endpoint is `POST` with a JSON body and returns JSON. Payment is per call in USDC over x402, on Solana or Base.

Requests that fail (invalid input, not found, upstream source down) return 4xx/5xx and are not charged. A human-readable catalog is at https://api.vextorium.com/ and a machine-readable one at https://api.vextorium.com/catalog.json.

## Spend-aware usage

- Use the narrowest endpoint: `saldos-wallet-pago` for balances, `analizar-wallet-pago` only when you also need account type, activity count or ENS.
- Use `precio-oraculo-pago` (cheaper) for ETH, BTC or USDC prices; `precio-cripto-pago` adds EUR and Uniswap-based prices for other Base tokens.
- `liquidaciones-pago` reports `cobertura_por_red`; check it before relying on long windows.
- Send only the fields you need; defaults are sensible (network defaults to `base`).
