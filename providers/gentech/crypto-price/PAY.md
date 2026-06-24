---
name: crypto-price
title: GenTech Labs — Crypto Price API
category: finance
version: 1.0.0
description: >
  Real-time cryptocurrency price quotes and OHLC history for 100+ pairs.
  Pyth-backed data across crypto, FX, commodities, and global stocks via x402 USDC on Base.
use_case: >
  Use for real-time crypto prices, OHLC charts, and market data.
  Supports 12 global stock markets and 100+ crypto pairs.
service_url: https://prices.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Crypto Price API", "version": "1.0.0" }, "paths": { "/v1/price/{symbol}": { "get": { "summary": "Get real-time price", "parameters": [{"name": "symbol", "in": "path", "required": true}], "responses": {"200": {"description": "Price data"}} } }, "/v1/history/{symbol}": { "get": { "summary": "Get OHLC history", "responses": {"200": {"description": "OHLC data"}} } } } }
network: base
currency: USDC
---

Real-time cryptocurrency price quotes and OHLC history for 100+ pairs. Pyth-backed data across crypto, FX, commodities, and global stocks.

## Endpoints

- `GET /v1/price/{symbol}` — Real-time price quote ($0.001)
- `GET /v1/history/{symbol}` — OHLC bars ($0.001)
- `GET /v1/list` — List available symbols ($0.0001)

All endpoints accept USDC on Base via x402 micropayments.
