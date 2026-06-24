---
name: gentechlabs-deal-tracker
title: GenTech Labs — Deal Tracker API
category: shopping
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://deals.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Deal Tracker API", "version": "1.0.0" }, "paths": { "/v1/games/search": { "get": { "summary": "Search games", "responses": {"200": {"description": "Game deals"}} } }, "/v1/movies/search": { "get": { "summary": "Search movies", "responses": {"200": {"description": "Movie deals"}} } } } }
  Compare game prices across 35+ stores and movie streaming across 40+ platforms. Find the cheapest deal.
  Real-time price tracking for games and movies across 40+ stores and streaming platforms.
  Returns current prices, cheapest store, price history, and streaming availability via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/games/search
    description: Search games across 35+ stores by title, returns best price
    price_usd: 0.01
    request: { q: "string" }
    response: { results: [{ title, store, price, url }] }
  - method: GET
    path: /v1/games/cheapest
    description: Get cheapest price for a specific game
    price_usd: 0.005
    request: { title: "string" }
    response: { title, cheapest_price, store, all_prices: [{ store, price }] }
  - method: GET
    path: /v1/movies/providers
    description: Get streaming/buy/rent availability across 40+ platforms
    price_usd: 0.005
    request: { title: "string" }
    response: { title, streaming, buy, rent }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Deal Tracker API

Real-time deal tracking for games and movies.

## Endpoints

- `GET /v1/games/search` — Search games across 35+ stores ($0.01)
- `GET /v1/games/cheapest` — Cheapest price for a game ($0.005)
- `GET /v1/movies/providers` — Streaming/buy/rent availability ($0.005)

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
