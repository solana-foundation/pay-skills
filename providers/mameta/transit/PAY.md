---
name: transit
title: "Japan Transit API"
description: "Real-time Japanese (JP) railway delay status and delay-aware route planning. Returns per-line operational status, estimated delay minutes and cause, station and line directories, a nationwide disruption feed, and routes that avoid disrupted lines."
use_case: "Use for Japanese train delay status, checking if a JR or metro line is delayed, rail route planning between stations, delay-aware alternative routes, station name lookup, and monitoring nationwide rail disruptions."
category: maps
service_url: https://transit.agentic-jp.com
version: v1
endpoints:
  - method: GET
    path: /station/:name/status
    resource: station-status
    description: "Get real-time per-line delay and operational status for a Japanese train station"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: GET
    path: /line/:line/disruptions
    resource: line-disruptions
    description: "Get current service disruptions for a specific Japanese rail line with estimated delay and cause"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: POST
    path: /route-plan
    resource: route-plan
    description: "Plan a timetable-based route between two Japanese stations with transfers, duration, and fare"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: /alternative-routes
    resource: alternative-routes
    description: "Suggest delay-aware alternative routes that avoid currently-disrupted Japanese rail lines"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.015
  - method: GET
    path: /alerts/feed
    resource: alerts
    description: "Get the latest feed of active rail service disruptions across the Japanese network"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: GET
    path: /lines
    resource: lines
    description: "List Japanese rail operators and their lines with canonical ids and names"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: GET
    path: /stations/search
    resource: stations-search
    description: "Fuzzy-search Japanese train stations by name in kanji, kana, or romaji"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
---

Pay-per-request Japanese railway delay data and route planning for AI agents
— travel assistants, commute support, and delivery optimization. The
differentiator is delay-aware routing: routes that still work when trains
are disrupted.

## Spend-aware usage

- Use `GET /lines` and `GET /stations/search` ($0.001) to resolve canonical
  line and station identifiers before calling the pricier status endpoints.
- Use `GET /station/:name/status` ($0.005) for one station; `GET /alerts/feed`
  ($0.005) when you want the whole nationwide disruption picture in one call.
- Use `POST /route-plan` ($0.01) for ordinary planning. Reach for
  `POST /alternative-routes` ($0.015) only when trains are actually delayed
  and you need a route around the disruption.
