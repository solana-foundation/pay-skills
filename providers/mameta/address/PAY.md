---
name: address
title: "Japan Address API"
description: "Normalize, geocode, and parse Japanese (JP) addresses. Cleans fullwidth and old-form variants, returns prefecture/city/town components, latitude/longitude, postal codes, and a confidence score, and parses free-form OCR or voice text."
use_case: "Use for Japanese address normalization, JP geocoding and reverse geocoding, postal-code lookup, deduplicating or validating address data, and parsing free-form Japanese addresses from invoices, OCR, or voice input."
category: maps
service_url: https://address.agentic-jp.com
version: v1
endpoints:
  - method: POST
    path: /normalize
    resource: normalize
    description: "Normalize a Japanese address string into clean prefecture/city/town/chome-banchi components with a confidence score"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: /geocode
    resource: geocode
    description: "Geocode a Japanese address to latitude/longitude with a match-level granularity and confidence score"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.003
  - method: POST
    path: /reverse-geocode
    resource: reverse-geocode
    description: "Reverse-geocode latitude/longitude coordinates to the nearest Japanese address with structured components"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.003
  - method: GET
    path: /postal-code/:zip
    resource: postal-code
    description: "Look up Japanese address candidates for a 7-digit postal code, with kana readings"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: /parse
    resource: parse
    description: "Parse free-form Japanese text into a structured address plus extracted building name and addressee"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: POST
    path: /batch
    resource: batch
    description: "Normalize or geocode many Japanese addresses in one request (up to 100 items)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0008
---

Pay-per-request normalization and geocoding for Japanese addresses — the
hardest address system in the world to parse — built for AI agents that
process invoices, e-commerce orders, delivery plans, or customer records.

## Spend-aware usage

- Use `POST /normalize` ($0.001) for the common case: cleaning and structuring
  an address string. Don't reach for `/parse` unless the input is genuinely
  free-form with building names or an addressee mixed in.
- Use `GET /postal-code/:zip` ($0.001) when you already have a postal code —
  it's cheaper than geocoding.
- Use `POST /batch` for bulk work; it bills per item at $0.0008 (a 20% discount
  vs. individual calls). Batch up to 100 addresses per request.
- `POST /geocode` and `/reverse-geocode` ($0.003) hit an external geocoder —
  call them only when you actually need coordinates.
