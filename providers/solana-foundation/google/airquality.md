---
category: maps
description: "Look up current, historical, and forecast air quality for global coordinates. Returns AQI, pollutant concentrations (PM2.5, PM10, O3, NO2, SO2, CO), health recommendations, local indexes, and heatmap tiles for maps."
endpoints:
- description: Look up current hourly air quality for a location, including AQI, pollutants, health advice, and local indexes.
  method: POST
  path: v1/currentConditions:lookup
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: requests
  resource: currentConditions
- description: Retrieve historical air quality for a location and time range, including AQI and pollutant concentration data.
  method: POST
  path: v1/history:lookup
  resource: history
- description: Retrieve forecasted air quality for a location and time range, including AQI and pollutant concentration data.
  method: POST
  path: v1/forecast:lookup
  resource: forecast
- description: Get a PNG heatmap tile for an air quality map type at a specific zoom, x, and y tile coordinate.
  method: GET
  path: v1/mapTypes/{mapType}/heatmapTiles/{zoom}/{x}/{y}
  resource: mapTypes.heatmapTiles
name: airquality
sandbox_service_url: https://sandbox-pay-google-airquality-123883807128.us-central1.run.app
service_url: https://production-pay-google-airquality-123883807128.us-central1.run.app
title: Air Quality API
use_case: "Use for pollution checks, health risk guidance, outdoor activity planning, environmental monitoring, travel decisions, climate dashboards, school or workplace safety alerts, and map overlays showing AQI or pollutant heatmaps."
version: v1
---

## Spend-aware usage

- Use `v1/currentConditions:lookup` for "air quality now" questions. Use
  forecast or history only when the user asks for future or past conditions.
- Send coordinates directly when known. If the user gives a place name, use a
  Places/geocoding provider first only if coordinates are required and missing.
- Heatmap tile endpoints are for map rendering. Do not fetch tiles for a textual
  AQI answer.
