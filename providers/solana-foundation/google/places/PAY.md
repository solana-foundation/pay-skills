---
category: maps
description: "Search and inspect Google Places worldwide. Find businesses and points of interest, run nearby or text search, autocomplete addresses, retrieve place details, ratings, reviews, hours, photos, contact info, websites, and location metadata."
use_case: "Use for restaurant and business search, hotel and POI lookup, local discovery, address autocomplete, nearby search, ratings and review lookup, opening-hours checks, store locators, lead generation, and place metadata enrichment."
openapi:
  url: https://places.google.gateway-402.com/openapi.json
name: places
sandbox_service_url: https://places.google-sandbox.gateway-402.com
service_url: https://places.google.gateway-402.com
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
