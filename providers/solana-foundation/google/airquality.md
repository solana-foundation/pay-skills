---
category: maps
description: Real-time and historical air quality data for any location. Returns AQI, pollutant concentrations (PM2.5, PM10, O3, NO2, SO2, CO), health recommendations, and heatmap tiles. Covers global locations.
endpoints:
- description: The Current Conditions endpoint provides hourly air quality information in more than 100 countries, up to a 500 x 500 me
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
- description: Returns air quality history for a specific location for a given time range.
  method: POST
  path: v1/history:lookup
  resource: history
- description: Returns air quality forecast for a specific location for a given time range.
  method: POST
  path: v1/forecast:lookup
  resource: forecast
- description: Returns a bytes array containing the data of the tile PNG image.
  method: GET
  path: v1/mapTypes/{mapType}/heatmapTiles/{zoom}/{x}/{y}
  resource: mapTypes.heatmapTiles
name: airquality
sandbox_service_url: https://sandbox-pay-google-airquality-123883807128.us-central1.run.app
service_url: https://production-pay-google-airquality-123883807128.us-central1.run.app
title: Air Quality API
use_case: checking air pollution levels, health risk assessments, environmental monitoring, outdoor activity planning
version: v1
---
