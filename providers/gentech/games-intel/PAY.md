---
name: games-intel
title: "Game Intelligence — Search, Prices & News"
description: "Multi-platform game search engine with price comparison, release schedules, and patch note aggregation. Covers Steam, Epic, GOG, PlayStation, Xbox, and Nintendo stores."
use_case: "Use when an agent needs to search games across stores, compare prices, find deals, check release dates, or get the latest game news and patch notes."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — Game Intelligence — Search, Prices & News

Multi-platform game search engine with price comparison, release schedules, and patch note aggregation. Covers Steam, Epic, GOG, PlayStation, Xbox, and Nintendo stores.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/games/search` | Game Intelligence — Search, Prices & News — primary endpoint |
