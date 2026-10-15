---
name: earth-pulse-api
title: "Earth Pulse API"
description: "Regional earthquake, wildfire, tornado, cyclone and tsunami data from USGS, NOAA and NASA feeds, with measurements, geometry, source links, observation times, freshness and coverage gaps in structured query results."
use_case: "Use for recent natural-hazard research, regional earthquake analysis, tornado warning lookup, cyclone tracking, tsunami bulletin research and satellite fire-observation aggregation with attributed evidence and explicit coverage limits."
category: data
service_url: https://earth-pulse-api.agentico-labs.workers.dev
version: v1
openapi:
  path: openapi.json
---

# Earth Pulse API

Query normalized natural-hazard data for a geographic bounding box and a recent
UTC interval. A successful purchase costs **$0.05 USDC on Solana mainnet** through
x402 v2 exact. No service subscription or API key is required. A funded Pay
wallet and the user's payment authorization are required to purchase data.

## Choose a query

Check the free endpoints first:

- `GET /health` reports service and dataset readiness.
- `GET /v1/sources` reports source coverage, freshness, query bounds and price.
- `GET /openapi.json` provides the current public request and response contract.

`POST /v1/query` requires only `bbox` and `hazards` in its JSON body. Omit both
dates for the preceding 24 hours, frozen when the result is prepared. The unpaid
offer includes a private `quote.purchaseUrl`, also carried in x402 `resource.url`.
Pay returns that resource in its payment proof, identifying the prepared purchase.

An optional unpredictable `Idempotency-Key` identifies the purchase before the
first request, so a lost first offer can be retried. Save the key or purchase URL
with the exact body; both paths share the same settlement and recovery ledger.

| Field | Meaning and constraints |
|---|---|
| `bbox` | `[west, south, east, north]` in longitude/latitude degrees. Antimeridian-crossing boxes are unsupported. |
| `hazards` | One or more of `earthquake`, `wildfire`, `tornado`, `cyclone`, `tsunami`. |
| `from`, `to` | Optional pair of UTC Z timestamps selecting `[from, to)`. Omit both for the preceding 24 hours. Explicit intervals are positive, at most 24 hours, and start within the recent seven days. |
| `limit` | Maximum combined event records and fire cells, from 1 to 100; defaults to 100. This is a completeness bound, not a truncation or pagination setting. |

The minimal body is `{"bbox":[-123,37,-122,38],"hazards":["earthquake"]}`.
For reliable retries from the first request, this example saves a client key and
one California earthquake query with explicit dates:

```sh
request_dir=$(mktemp -d)
node --input-type=module - "$request_dir" <<'NODE'
import { randomUUID } from 'node:crypto';
import { writeFileSync } from 'node:fs';
const dir = process.argv[2];
const now = Date.now();
const query = {
  bbox: [-125, 32, -114, 42], hazards: ['earthquake'],
  from: new Date(now - 24 * 3600000).toISOString(),
  to: new Date(now).toISOString(), limit: 100
};
writeFileSync(`${dir}/request.json`, JSON.stringify(query), { mode: 0o600 });
writeFileSync(`${dir}/request-key.txt`, randomUUID(), { mode: 0o600 });
NODE
```

Keep `request_dir`, the key and body until delivery is confirmed. Use plain
`curl` first if an unpaid preview of the payment terms is needed. A usable
request returns HTTP 402 after its complete result has been prepared and pinned.
Purchase with Pay only within the user's authorized budget:

```sh
pay curl --silent --show-error --fail-with-body \
  --request POST https://earth-pulse-api.agentico-labs.workers.dev/v1/query \
  --header 'Content-Type: application/json' \
  --header "Idempotency-Key: $(cat "$request_dir/request-key.txt")" \
  --data-binary "@$request_dir/request.json" \
  --output "$request_dir/result.json"
```

## Interpret the result

Responses include `datasetId`, `exportedAt` (dataset export), `generatedAt`
(pinned result preparation), the canonical query, `sources`,
`records`, `fireCells`, `counts`, `contextCodes` and a verified payment receipt.
Measurements retain units, source links and relevant observation, issuance or
validity times. Inspect coverage and context before drawing conclusions.

- The API reads its latest successfully exported dataset; queries do not trigger
  collection. Feed checks and observation timestamps describe different clocks.
- USGS earthquake coverage is magnitude 2.5+; magnitude scales and review status
  remain explicit.
- Warning-polygon matching uses geometry bounding-box candidate overlap, not
  exact polygon intersection. Point coordinates may identify an epicenter,
  cyclone center or tsunami bulletin's source earthquake.
- Wildfire results summarize satellite thermal detections in fixed 1-degree
  cells. Whole boundary cells and repeated observations are identified; detection
  counts do not represent unique or confirmed fires.
- Recent query bounds do not guarantee complete historical or worldwide
  coverage. Partial usable source coverage and gaps remain explicit.

## Payment and recovery

- Each new prepared query costs $0.05, including a valid query with no matches.
  Existing purchases retain their originally quoted price through recovery.
- Invalid input, an overly broad query or a query with no usable source data is
  rejected before payment. Narrow the region, interval or hazard selection for
  `422`; lowering `limit` does not truncate results.
- Check the challenge for x402 v2 exact, Solana mainnet and USDC with amount
  `50000` base units. Unpaid quotes expire after five minutes.
- Reuse the original key or purchase reference and exact body for payment retry.
  Recover a settled result for 24 hours with plain `curl`: POST the original body
  to its saved `purchaseUrl`, or use the original key. No payment header is needed.
- A paid retry missing both identifiers is rejected before settlement. Unknown or
  expired references never create replacement purchases. Conflicting references
  or a changed query are rejected.
- A new unpaid request without a saved identity creates a new offer; paying it
  incurs another charge. Treat keys and purchase URLs as private credentials.
- After a timeout or uncertain settlement, preserve the identity and recover it;
  do not start another purchase until the original outcome is resolved.
- Avoid automatic polling purchases. Batch supported hazards into one bounded
  request where useful, and use free source metadata before spending.

API contract: [OpenAPI](https://earth-pulse-api.agentico-labs.workers.dev/openapi.json).
Public visualization: [Earth Pulse observatory](https://earth-pulse-observatory.zigniz.chatgpt.site/).
