---
name: security
title: "2s Security"
description: "Security data: look up a CVE across NVD, the CISA Known Exploited Vulnerabilities catalog, and FIRST.org EPSS exploit-probability scores in a single call for vulnerability triage."
use_case: "Use for vulnerability triage: resolve a CVE id to its CVSS score, CISA KEV exploited status, and EPSS exploit probability."
category: security
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
