---
name: movie-intel
title: "Movie Intel — Search, Details, Trailers & Deals"
description: "Find movies, compare streaming/rental prices, get cast/crew details, and find trailers. Covers major streaming and rental platforms."
use_case: "Use when an agent needs to find where to watch a movie, get the best price, check cast/crew info, or find trailers."
category: media
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: openapi.json
pricing:
  per_request: 0.001
---

# GenTech Labs — Movie Intel

Movie search with price comparison, cast/crew details, and trailer links.

## Endpoints

| Endpoint | Description | Price |
|----------|-------------|-------|
| `GET /api/movies/search` | Movie search with price comparison | $0.005 |
| `GET /api/movies/cheapest` | Find cheapest place to watch | $0.005 |
| `GET /api/movies/details` | Cast, crew, studio, genres | $0.001 |
| `GET /api/movies/trailers` | YouTube trailer links | $0.001 |
