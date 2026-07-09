---
name: weather-pro
title: "Weather Pro"
description: "Current conditions and 7-day forecasts for any supported location, returning temperature, precipitation, and daily outlooks. Includes free endpoints to list supported locations and check service health."
use_case: "Use when an agent needs a simple, low-cost weather forecast for a known location: trip planning, outdoor activity scheduling, daily briefings, or weather-aware reminders. Prefer it over heavier geospatial APIs when a plain textual forecast is enough."
category: data
service_url: https://paysh-video-gateway.vercel.app
openapi:
  path: openapi.json
---

Weather Pro provides current conditions plus a 7-day forecast for supported
locations at $0.01 per forecast request. Reach for it when an agent needs a
quick, inexpensive weather lookup rather than rich geospatial or historical
climate data.

## Spend-aware usage

- Only `/forecast` is paid ($0.01 per request); `/health` and `/locations` are
  free. Call `/locations` first (free) to confirm a location is supported before
  spending on `/forecast`.
- Batch a user's weather questions into a single `/forecast` call when possible,
  since one response already contains current conditions and the full 7-day
  outlook; avoid repeat calls for the same location within a session.
