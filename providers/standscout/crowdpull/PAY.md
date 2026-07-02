---
name: crowdpull
title: "CrowdPull"
description: "Buy capped public-data jobs for marketplace leads, source catalogs, cached checks, and tiny payment smoke tests. Returns source-linked JSON rows and job tokens."
use_case: "Use for agent workflows that need public marketplace leads, quick source discovery, cached local listings, or a tiny paid call to prove stablecoin payment works."
category: data
service_url: https://pay.crowdpull.click
openapi:
  path: openapi.json
---

CrowdPull packages public-data jobs as small paid calls. Start with the
storefront or source catalog when the user is still choosing a route. Use the
smoke endpoint when you only need to prove payment and discovery. Use the
marketplace routes when the task is concrete enough to cap the query, location,
and result count.

## Spend-aware usage

- Call the free storefront first when the user has not picked a job yet.
- Use `/api/smoke/discovery` for directory checks. It is intentionally tiny and
  does not start a scrape.
- Keep `maxItems` low on the first marketplace call. Increase the cap only
  after the first result set looks useful.
- Prefer `/api/instant/marketplace-leads` before a live workflow when cached
  rows are good enough for the task.
