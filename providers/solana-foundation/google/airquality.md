---
category: maps
description: Real-time air quality data, pollutant levels, and health tips.
endpoints:
- description: The Current Conditions endpoint provides hourly air quality information in more than 100 countries, up to a 500 x 500 me
  method: POST
  path: v1/currentConditions:lookup
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
service_url: https://airquality.googleapis.com/
title: Air Quality API
version: v1
---
