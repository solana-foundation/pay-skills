---
name: tripadvisor
title: "Tripadvisor"
description: "Search Tripadvisor locations and retrieve details, reviews, and photos for hotels, restaurants, and attractions worldwide, including nearby discovery and content lookups for travel, local search, and place-enrichment workflows."
use_case: "Use for hotel and restaurant discovery, attraction lookup, nearby travel search, place-detail enrichment, traveler review retrieval, photo retrieval, and itinerary or recommendation workflows that need Tripadvisor content."
category: maps
service_url: https://tripadvisor.x402.paysponge.com
openapi:
  path: openapi.json
---

Tripadvisor Content API endpoints exposed through PaySponge with x402
payments.

This provider covers location search, nearby search, and per-location content
retrieval for details, reviews, and photos. It is suited to worldwide travel
and local-discovery workflows involving hotels, restaurants, and attractions.

The published spec currently exposes 5 paid `GET` routes at $0.01 per request
and accepts x402 USDC on Solana mainnet, Base, and Avalanche.

Note: the current OpenAPI document is minimal and does not spell out rich query
parameter schemas inline. Agents that need exact request fields or path
construction should inspect the linked spec directly before building calls.

## Spend-aware usage

- Use location search or nearby search first to identify the correct
  `locationId` before paying for details, reviews, or photos on a specific
  place.
- Fetch only the content type needed for the answer. Do not pay for photos or
  reviews when basic location details are sufficient.
- Keep user intent tight by specifying the venue type or area before search so
  the first paid result set is usable.
- Use review and photo lookups only after the user has narrowed the target to a
  specific hotel, restaurant, or attraction.
