---
name: movie-database
title: "Movie Database API"
description: "Search movies and TV shows by title or IMDb ID. Returns full cast, plot, genre, runtime, box office, and Rotten Tomatoes, Metacritic, and IMDb ratings."
use_case: "Use for movie and TV show lookups, ratings retrieval, cast and plot research, box office data, and building recommendation or review agents."
category: data
service_url: https://orbisapi.com/proxy/movie-database-api-0d6d62
openapi:
  url: https://orbisapi.com/proxy/movie-database-api-0d6d62/openapi.json
---

## Overview

Movie Database API is available on [Orbis](https://orbisapi.com) — a pay-per-call x402 API marketplace on Base and Solana.

No API key or account required. Send an x402 payment header with USDC on Solana or Base and your request goes straight through.

## Pricing

**$0.001 USDC per call** — accepted on Solana (USDC) and Base (USDC).

## Quick start

```bash
# See the 402 challenge
curl https://orbisapi.com/proxy/movie-database-api-0d6d62

# Pay and call with the pay CLI
pay curl https://orbisapi.com/proxy/movie-database-api-0d6d62
```

## Networks

- **Solana** — `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` (USDC)
- **Base** — `eip155:8453` (USDC)
