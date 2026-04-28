---
category: maps
description: "Search and inspect Google Places worldwide. Find businesses and points of interest, run nearby or text search, autocomplete addresses, retrieve place details, ratings, reviews, hours, photos, contact info, websites, and location metadata."
use_case: "Use for restaurant and business search, hotel and POI lookup, local discovery, address autocomplete, nearby search, ratings and review lookup, opening-hours checks, store locators, lead generation, and place metadata enrichment."
endpoints:
- description: Get details for a place by resource name, including fields requested for location, contact, hours, ratings, or photos.
  method: GET
  path: v1/places/{placesId}
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: requests
  resource: places
- description: Search for places near a geographic location using radius, type, ranking, and field mask controls.
  method: POST
  path: v1/places:searchNearby
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: requests
  resource: places
- description: Search for places using a text query such as a business name, address, or category, returning matching place details.
  method: POST
  path: v1/places:searchText
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: requests
  resource: places
- description: Return place and address autocomplete predictions for partial user input and optional location biasing.
  method: POST
  path: v1/places:autocomplete
  resource: places
- description: Retrieve place photo media by photo resource name, with optional sizing controls for display or storage.
  method: GET
  path: v1/places/{placesId}/photos/{photosId}/media
  resource: places.photos
name: places
sandbox_service_url: https://sandbox-pay-google-places-123883807128.us-central1.run.app
service_url: https://production-pay-google-places-123883807128.us-central1.run.app
title: Places API (New)
version: v1
---

## Spend-aware usage

- Use `v1/places:searchText` for natural-language requests such as "best vegan
  restaurant near me". Include location bias, radius, price level, open-now, or
  category filters when the user provides them.
- Use `v1/places:autocomplete` only for interactive partial-input UX. Do not use
  autocomplete for a one-shot recommendation.
- Request place photos only if the user needs images. For text answers, avoid
  extra photo media calls.
- Use field masks or response filters when available so the first call returns
  only the fields needed for the answer.
