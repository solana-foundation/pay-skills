---
name: transit
title: "Japan Transit API"
description: "Real-time Japanese (JP) railway delay status and delay-aware route planning. Returns per-line operational status, estimated delay minutes and cause, station and line directories, a nationwide disruption feed, and routes that avoid disrupted lines."
use_case: "Use for Japanese train delay status, checking if a JR or metro line is delayed, rail route planning between stations, delay-aware alternative routes, station name lookup, and monitoring nationwide rail disruptions."
category: maps
service_url: https://transit.agentic-jp.com
version: v1
openapi:
  path: openapi.json
---

Pay-per-request Japanese railway delay data and route planning for AI agents
— travel assistants, commute support, and delivery optimization. The
differentiator is delay-aware routing: routes that still work when trains
are disrupted.

## Spend-aware usage

- Use `GET /lines` ($0.001) and `GET /stations/search` ($0.002) to resolve canonical
  line and station identifiers before calling the pricier status endpoints.
- Use `GET /station/:name/status` ($0.005) for one station; `GET /alerts/feed`
  ($0.005) when you want the whole nationwide disruption picture in one call.
- Use `POST /route-plan` ($0.01) for ordinary planning. Reach for
  `POST /alternative-routes` ($0.015) only when trains are actually delayed
  and you need a route around the disruption.
