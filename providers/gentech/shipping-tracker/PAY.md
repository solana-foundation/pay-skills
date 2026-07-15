---
name: shipping-tracker
title: "Multi-Carrier Shipping Tracker"
description: "Universal package tracking across major carriers. Track shipments by tracking number, get status updates, estimated delivery windows, and carrier-specific event timelines."
use_case: "Use when an agent needs to track a package across any major carrier, get shipping status updates, check delivery estimates, or resolve carrier-specific tracking codes."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — Multi-Carrier Shipping Tracker

Universal package tracking across major carriers. Track shipments by tracking number, get status updates, estimated delivery windows, and carrier-specific event timelines.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/shipping/track` | Multi-Carrier Shipping Tracker — primary endpoint |
