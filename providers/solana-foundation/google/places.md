---
category: maps
description: Search, details, autocomplete, and nearby search.
endpoints:
- description: Get the details of a place based on its resource name, which is a string in the `places/{place_id}` format.
  method: GET
  path: v1/places/{placesId}
  resource: places
- description: Search for places near locations.
  method: POST
  path: v1/places:searchNearby
  resource: places
- description: Text query based place search.
  method: POST
  path: v1/places:searchText
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
service_url: https://sandbox-pay-google-places-v2c65mhlba-uc.a.run.app
title: Places API (New)
version: v1
---
