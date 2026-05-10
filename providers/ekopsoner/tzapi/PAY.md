---
name: tzapi
title: "tzapi"
description: "Pay-per-call time zone, datetime conversion, and business-hours lookups for AI agents. Returns IANA timezone, UTC offset, DST status, weekday, and country-holiday-aware open/closed status."
use_case: "Use when an agent needs current local time in a city, datetime conversion between two timezones (e.g. cross-region meeting scheduling), or country-holiday-aware open/closed status for business hours. Accepts city name or lat/lon."
category: data
service_url: https://tzapi.vercel.app
openapi:
  url: https://tzapi.vercel.app/openapi.json
---

Pay-per-call time zone, datetime conversion, and business-hours lookups for AI agents. Built on `timezonefinder` + IANA tz database + `python-holidays`. Three endpoints:

- `GET /now?city=Tokyo` — $0.001 — current local time + IANA timezone + DST status
- `GET /convert?when=2026-06-01T14:00&from_city=NYC&to_city=Tokyo` — $0.001 — datetime conversion between zones
- `GET /business-hours?city=Sydney&country=AU` — $0.002 — open-now boolean + next-open time, country-holiday-aware

All endpoints accept either `city=<name>` (resolved against the GeoNames cities-15000 dataset including alternate names) or `lat=<num>&lon=<num>` for canonical lookups. Settles via Coinbase CDP facilitator on Base mainnet (USDC).

## Spend-aware usage

- For repeated lookups against the same city, cache the returned `tz` field locally and use Python's `zoneinfo` for subsequent conversions instead of paying again.
- Prefer `lat`/`lon` over `city` when you already have coordinates — skips the city-resolution step but the price is identical.
- For business-hours, pass `country` explicitly when the city's country is unambiguous from prior context — small latency win.
- `/business-hours` covers 100+ countries' public holiday calendars; if the same date will be checked many times, paginate by week and cache.
