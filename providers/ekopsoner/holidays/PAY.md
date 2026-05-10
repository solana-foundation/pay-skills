---
name: holidays
title: "holidays-api"
description: "Public holiday and business-day calendar for 100+ countries with sub-national subdivision support. Returns holiday name, weekday/weekend flags, and next-business-day calculations."
use_case: "Use when an agent needs to know if a date is a public holiday in a country (invoicing, SLA windows), find the next N business days skipping weekends and holidays, or list all holidays in a country for a given year. Country code is ISO 3166-1 alpha-2."
category: data
service_url: https://holidays-api-kappa.vercel.app
openapi:
  url: https://holidays-api-kappa.vercel.app/openapi.json
---

Public holiday and business-day calendar for 100+ countries. Built on `python-holidays` library; covers sub-national subdivisions (US states, AU territories, etc.) when the holiday set varies regionally.

- `GET /is-holiday?country=US&date=2026-12-25` — $0.001 — single date check
- `GET /next-business-day?country=US&from=2026-12-24&count=3` — $0.001 — skip weekends + holidays
- `GET /year?country=US&year=2026` — $0.005 — full annual list
- `GET /countries` — free — list of supported ISO codes

Multi-chain x402 payments: Base mainnet USDC and Solana mainnet USDC.

## Spend-aware usage

- For workflows hitting many dates in one country/year, prefer a single `/year` call ($0.005) over many `/is-holiday` calls — break-even is ~5 dates.
- Cache `/year` output for a country+year — public-holiday calendars are stable.
- `/countries` is free — no need to hard-code which countries are supported.
- For weekend-only logic (no public holidays), the date arithmetic can be done locally; `/next-business-day` is only worth paying for when you need country-aware skipping.
