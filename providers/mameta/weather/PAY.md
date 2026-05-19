---
name: weather
title: "Japan Weather API"
description: "Japanese (JP) weather forecasts and warnings sourced from the Japan Meteorological Agency (JMA). Get area forecasts, a short weather overview, active weather warnings and advisories for a region, and the directory of JMA forecast areas."
use_case: "Use for Japanese weather forecasts, JMA forecast data, checking weather warnings and advisories for a Japanese region, short weather overviews, and resolving JMA area codes for travel, logistics, or event planning in Japan."
category: data
service_url: https://weather.agentic-jp.com
version: v1
endpoints:
  - method: GET
    path: /forecast/:area
    resource: forecast
    description: "Get the JMA weather forecast for a Japanese forecast area"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.003
  - method: GET
    path: /overview/:area
    resource: overview
    description: "Get a short weather overview text for a Japanese forecast area"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.002
  - method: GET
    path: /warnings/:area
    resource: warnings
    description: "Get active JMA weather warnings and advisories for a Japanese region"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: GET
    path: /areas
    resource: areas
    description: "List JMA forecast areas with their codes and names"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: /batch
    resource: batch
    description: "Fetch forecasts or warnings for many Japanese areas in one request (up to 50 items)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.003
---

Pay-per-request Japanese weather forecasts and warnings from the Japan
Meteorological Agency (JMA), shaped for AI agents handling travel, logistics,
and event planning in Japan.

## Spend-aware usage

- Use `GET /areas` ($0.001) to resolve a JMA area code before calling the
  forecast endpoints.
- Use `GET /overview/:area` ($0.002) for a quick text summary; `GET
  /forecast/:area` ($0.003) for the structured forecast; `GET /warnings/:area`
  ($0.005) only when you specifically need active advisories.
- Use `POST /batch` ($0.003/item) to fetch multiple areas in one request
  rather than looping, up to 50 areas per call.
