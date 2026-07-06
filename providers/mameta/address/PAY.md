---
name: address
title: "Japan Address API"
description: "Normalize, geocode, and parse Japanese (JP) addresses. Cleans fullwidth and old-form variants, returns prefecture/city/town components, latitude/longitude, postal codes, and a confidence score, and parses free-form OCR or voice text."
use_case: "Use for Japanese address normalization, JP geocoding and reverse geocoding, postal-code lookup, deduplicating or validating address data, and parsing free-form Japanese addresses from invoices, OCR, or voice input."
category: maps
service_url: https://address.agentic-jp.com
version: v1
openapi:
  path: openapi.json
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
