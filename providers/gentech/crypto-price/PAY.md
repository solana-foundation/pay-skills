---
name: crypto-price
title: "GenTech Labs — Crypto Price API"
description: "Real-time crypto prices, OHLC history, DEX pairs across 12 global stock markets. Pyth-backed data via x402 USDC on Base."
use_case: "Use when an agent needs real-time cryptocurrency prices, historical OHLC data, or cross-market stock comparisons."
category: finance
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Crypto Price API

Real-time crypto prices, OHLC history, DEX pairs across 12 global stock markets. Pyth-backed data via x402 USDC on Base.

## Endpoints

- `GET /v1/price/{symbol}` — Get real-time price for any crypto asset ($0.0)
- `GET /v1/history/{symbol}` — Get OHLC price history ($0.001)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
