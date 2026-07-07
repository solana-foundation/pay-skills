---
name: weather
title: "Japan Weather API"
description: "Japanese (JP) weather forecasts and warnings sourced from the Japan Meteorological Agency (JMA). Get area forecasts, a short weather overview, active weather warnings and advisories for a region, and the directory of JMA forecast areas."
use_case: "Use for Japanese weather forecasts, JMA forecast data, checking weather warnings and advisories for a Japanese region, short weather overviews, and resolving JMA area codes for travel, logistics, or event planning in Japan."
category: data
service_url: https://weather.agentic-jp.com
version: v1
openapi:
  path: openapi.json
---

Pay-per-request Japanese weather forecasts and warnings from the Japan
Meteorological Agency (JMA), shaped for AI agents handling travel, logistics,
and event planning in Japan.

## Spend-aware usage

- Use `GET /areas` ($0.001) to resolve a JMA area code before calling the
  forecast endpoints.
- Use `GET /overview/:area` ($0.005) for a quick text summary; `GET
  /forecast/:area` ($0.005) for the structured forecast; `GET /warnings/:area`
  ($0.005) only when you specifically need active advisories.
- Use `POST /batch` ($0.004/item) to fetch multiple areas in one request
  rather than looping, up to 50 areas per call.
