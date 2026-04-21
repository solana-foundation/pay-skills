---
category: maps
description: Pollen counts, forecasts, and heatmaps for allergy apps.
endpoints:
- description: Returns up to 5 days of daily pollen information in more than 65 countries, up to 1km resolution.
  method: GET
  path: v1/forecast:lookup
  resource: forecast
- description: Returns a byte array containing the data of the tile PNG image.
  method: GET
  path: v1/mapTypes/{mapType}/heatmapTiles/{zoom}/{x}/{y}
  resource: mapTypes.heatmapTiles
name: pollen
service_url: https://pollen.googleapis.com/
title: Pollen API
version: v1
---
