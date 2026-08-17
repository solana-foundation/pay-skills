---
name: maritime
title: General Relay Maritime
description: "Latest AIS vessel positions by MMSI from terrestrial VHF receivers, enriched with FCC ship-station licences, USCG hull records, EU MRV emissions and deadweight, water body names, chokepoint sea conditions and active NAVAREA warnings."
use_case: "Use for finding where a ship is by MMSI, vessel registry and ownership lookups, ship emissions and deadweight, sea state near chokepoints, navigational warnings, and resolving a hull's name, call sign or IMO. Charged only when a position is found."
category: data
version: v1
service_url: https://api.generalrelay.xyz
openapi:
  path: openapi.json
---

`GET /v1/vessel?mmsi=` — latest AIS position for one vessel plus everything on
file for the hull: FCC licence and USCG record for US vessels, EU MRV verified
emissions and deadweight, the named water body, sea conditions at the nearest
monitored chokepoint within 200 km, and active NAVAREA warnings for the region.
$0.005 per hit in USDC on Solana mainnet. **You are charged only when a
position is found**: a 400, 404 or 503 settles nothing. The operator sponsors
the transaction fee, so a caller needs USDC and nothing else.

## Spend-aware usage

- `mmsi` is exactly nine decimal digits and leading zeros are significant, so
  never round-trip one through an integer — `002442000` is not `2442000`.
- Misses cost nothing, but a 404 still reports `vessels`, the number of distinct
  MMSIs heard in the last hour. Zero means back off rather than work through a
  list.
- Check `position.age_seconds` before trusting a fix: during an ingest outage the
  last known position keeps being served.
- Enrichment sections (`registry`, `emissions`, `water_body`,
  `nearest_chokepoint`, `navigational_warnings`) are null when nothing is on
  file for that hull or place; the price is the same either way, so treat them
  as upside rather than something to retry for.
- `navigational_warnings: null` means the warning feed could not be checked;
  `"active": 0` means it was checked and nothing is in force. Only the second
  is a claim. The list is area-level (NAVAREA/HYDRO broadcast areas), not
  vessel proximity.
