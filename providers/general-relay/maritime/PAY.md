---
name: maritime
title: General Relay Maritime
description: "Latest AIS vessel positions by MMSI from a network of terrestrial VHF receivers: latitude, longitude, speed and course over ground, heading, navigational status, fix age, plus ship name, call sign, IMO number and hull dimensions."
use_case: "Use for finding where a ship is by MMSI, vessel and maritime traffic lookups, port and coastal vessel presence, and resolving a hull's name, call sign or IMO number. You are charged only when a position is found, so a miss costs nothing."
category: data
version: v1
service_url: https://api.generalrelay.xyz
openapi:
  path: openapi.json
---

`GET /v1/vessel?mmsi=` — latest AIS position for one vessel, $0.005 per hit in
USDC on Solana mainnet. **You are charged only when a position is found**: a
400, 404 or 503 settles nothing. The operator sponsors the transaction fee, so a
caller needs USDC and nothing else.

## Spend-aware usage

- `mmsi` is exactly nine decimal digits and leading zeros are significant, so
  never round-trip one through an integer — `002442000` is not `2442000`.
- Misses cost nothing, but a 404 still reports `vessels`, the number of distinct
  MMSIs heard in the last hour. Zero means back off rather than work through a
  list.
- Check `position.age_seconds` before trusting a fix: during an ingest outage the
  last known position keeps being served.
