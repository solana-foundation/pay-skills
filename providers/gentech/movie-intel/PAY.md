---
name: movie-intel
title: "Movie Intelligence — Search, Details & Trailers"
description: "Comprehensive movie search covering pricing, cast and crew details, studio info, genre classification, and YouTube trailer links across major digital retailers."
use_case: "Use when an agent needs to search movies, find where to watch cheapest, get cast/crew details, check movie metadata, or retrieve trailer links."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — Movie Intelligence — Search, Details & Trailers

Comprehensive movie search covering pricing, cast and crew details, studio info, genre classification, and YouTube trailer links across major digital retailers.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/movies/search` | Movie Intelligence — Search, Details & Trailers — primary endpoint |
