---
category: maps
description: "Look up current, historical, and forecast air quality for global coordinates. Returns AQI, pollutant concentrations (PM2.5, PM10, O3, NO2, SO2, CO), health recommendations, local indexes, and heatmap tiles for maps."
openapi:
  path: openapi.json
name: airquality
service_url: https://airquality.google.gateway-402.com
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
