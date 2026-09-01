---
name: maritime
title: General Relay Maritime
description: "AIS vessel search by name, IMO, MMSI, bounding box or radius. Returns latest positions from terrestrial VHF and AISHub, not global coverage. Name and IMO can be null. Charged $0.02 per non-empty result."
use_case: "Use for finding ships by name, IMO or MMSI, searching a 5° bbox or 500 km radius, coastal AIS positions, and vessel identity lookups. Empty results, 400, 500 and 503 settle nothing."
category: data
version: v1
service_url: https://api.generalrelay.xyz
openapi:
  path: openapi.json
---

`GET /v1/vessels` — Search vessels by identity, location, or both. Charged
per non-empty result: empty array, 400, 500, 503 settle nothing. $0.02 per
non-empty result in USDC on Solana mainnet (`exact`). The operator sponsors
the transaction fee, so a caller needs USDC and nothing else. Coverage is
terrestrial VHF + AISHub, not global. Name and IMO can be null.

All filters are optional, but at least one is required. Identity filters
(`name` substring, `imo` exact, `mmsi` exact 9-digit string) AND together.
Spatial is one mode: bbox (`lat_min`/`lat_max`/`lon_min`/`lon_max`, max 5°×5°)
XOR radius (`lat`/`lon`/`radius_km`, max 500 km).

## Spend-aware usage

- An empty call (no filters) is 400 and settles nothing — pick identity,
  bbox, or radius before paying.
- Identity filters AND: `name=PACIFIC&mmsi=232004521` must satisfy both.
- Do not send bbox and radius together; that is 400.
- `mmsi` is exactly nine decimal digits and leading zeros are significant,
  so never round-trip one through an integer — `002442000` is not `2442000`.
- Empty arrays cost nothing. Prefer a tight bbox or radius over a broad
  coastal sweep; results are capped at 100, ordered by `last_seen` DESC.
- Check `position.age_seconds` before trusting a fix: during an ingest
  outage the last known position keeps being served.
- Name and IMO can be null on a hit. Enrichment sections (`registry`,
  `emissions`, `water_body`, `nearest_chokepoint`, `navigational_warnings`)
  are also null when nothing is on file; the price is the same either way.
