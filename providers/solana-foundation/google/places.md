---
category: maps
description: Search for businesses and points of interest, get place details (hours, ratings, reviews, photos, contact info), autocomplete addresses, and find nearby places. Covers 200M+ places worldwide.
use_case: "finding restaurants, businesses, hotels, POI lookup, getting reviews and ratings, address autocomplete, nearby search"
endpoints:
- description: Get the details of a place based on its resource name, which is a string in the `places/{place_id}` format.
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
- description: Search for places near locations.
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
- description: Search for places using a text query like a business name, address, or category, returning matching results with details
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
- description: Returns predictions for the given input.
  method: POST
  path: v1/places:autocomplete
  resource: places
- description: Get a photo media with a photo reference string.
  method: GET
  path: v1/places/{placesId}/photos/{photosId}/media
  resource: places.photos
name: places
sandbox_service_url: https://sandbox-pay-google-places-123883807128.us-central1.run.app
service_url: https://production-pay-google-places-123883807128.us-central1.run.app
title: Places API (New)
version: v1
---
