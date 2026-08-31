---
name: pjm-nowcast
title: "PJM Nowcast"
description: "Pay-per-request PJM RTO nowcast: latest and trailing descriptive stats for RTO LMP, zonal spreads, and RTO load as JSON for agents marking power windows."
use_case: "Use when an agent needs current or trailing PJM RTO LMP, zonal spread, or load nowcast for a window or forward — not a generic option pricer and not a raw tick dump."
category: finance
service_url: https://pjm-nowcast-production.up.railway.app
version: v1
openapi:
  path: openapi.json
---

When to use: you need a PJM window nowcast — load, prints, or realized window context — as inputs to mark or risk a power window or forward.

When not to use: you already have model inputs and only need fair value, Greeks, or an IV surface from premiums.

## Spend-aware usage

- Prefer POST /v1/nowcast/latest unless the task needs a trailing window.
- Cap history with windowHours; the default is enough for most marks.
- Reuse the same family filter (rto_lmp, zonal_spread, rto_load) across calls.
