---
name: au-weather
title: "MilyPay AU Weather"
description: "MilyPay Australian weather API: current conditions and multi-day forecast for any Australian address or coordinate using BOM ACCESS-G via Open-Meteo. JSON over x402 on Solana."
use_case: "Use for Australian weather by address, BOM-style forecasts by lat/lng, current conditions, multi-day outlooks, and location-aware agent workflows in Australia."
category: data
service_url: https://api.milypay.xyz
version: v1
openapi:
  path: openapi.json
---

MilyPay weather for Australia (BOM ACCESS-G via Open-Meteo). Query by address `q` or `lat`/`lng`.

Pay per call via x402 on Solana. Accepts **USDC**, **USDT**, and **AUDD**.

## Spend-aware usage

- Prefer coordinates when already known — avoids an extra address resolve.
- One call covers current + multi-day forecast; do not fan out per day.

Docs: https://milypay.xyz/agents.md · Demo: https://milypay.xyz/demo · Brand: **MilyPay** (Milysec)
