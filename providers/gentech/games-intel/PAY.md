---
name: games-intel
title: "Game Intel — Multi-Store Search, News & Releases"
description: "Search game prices across stores, find cheapest deals, get gaming news and release dates. Supports Steam, Epic, GOG, PlayStation, Xbox, Nintendo."
use_case: "Use when an agent needs to find game prices, compare store deals, check release dates, or get gaming industry news."
category: shopping
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: openapi.json
pricing:
  per_request: 0.001
---

# GenTech Labs — Game Intel

Multi-store game search with price comparison, news aggregation, and release date tracking.

## Endpoints

| Endpoint | Description | Price |
|----------|-------------|-------|
| `GET /api/games/search` | Game search across multiple platforms | $0.005 |
| `GET /api/games/cheapest` | Find cheapest game price across stores | $0.005 |
| `GET /api/games/news` | Gaming news and patch notes | $0.001 |
| `GET /api/games/release` | Release dates and game info | $0.001 |
