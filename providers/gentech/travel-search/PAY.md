---
name: gentechlabs-travel-search
title: GenTech Labs — Travel Search API
category: travel
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Travel Search API", "version": "1.0.0" }, "paths": { "/v1/travel/search": { "get": { "summary": "Search places", "responses": {"200": {"description": "Place results"}} } } } }
  Search Google Maps places, restaurants, hotels. Plan trips with natural language queries.
  Flight and hotel search across 200+ airlines and 1M+ hotels.
  Returns best prices, availability, and booking links via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/travel/search
    description: Search flights and hotels by destination and dates
    price_usd: 0.01
    request: { destination: "string", check_in: "2026-07-01", check_out: "2026-07-07" }
    response: { flights: [{ airline, price, duration }], hotels: [{ name, price, rating }] }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Travel Search API

Flight and hotel search across 200+ airlines and 1M+ hotels. Best prices and booking links.

## Endpoints

- `GET /v1/travel/search` — Search flights and hotels ($0.01)

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.
