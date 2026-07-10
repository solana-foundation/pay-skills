---
name: weather-pro
title: "Weather Pro"
description: "Current conditions and 7-day forecasts for supported cities, returning temperature, precipitation, and daily outlooks. Includes a free endpoint to list supported locations and a free health check."
use_case: "Use when an agent needs a simple, low-cost weather forecast for a known city: trip planning, outdoor activity scheduling, daily briefings, or weather-aware reminders. Prefer it over heavier geospatial APIs when a plain textual forecast is enough."
category: data
service_url: https://paysh-video-gateway.vercel.app
openapi:
  path: openapi.json
---

Weather Pro provides current conditions plus a 7-day forecast for supported
cities at $0.01 per forecast request. Reach for it when an agent needs a quick,
inexpensive weather lookup rather than rich geospatial or historical climate
data.

## Spend-aware usage

- Only `/forecast` is paid ($0.01 per request); `/locations` and `/health` are
  free. Call `/locations` first (free) to confirm a city is supported before
  spending on `/forecast`.
- Pass the exact `location` key from `/locations` (e.g. `berlin`,
  `san francisco`) to avoid wasted paid calls on unsupported cities.
- One `/forecast` response already includes current conditions and the full
  7-day outlook, so avoid repeat calls for the same city within a session.
