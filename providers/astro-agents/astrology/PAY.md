---
name: astrology
title: "Astro Agents"
description: "Deterministic Western and Vedic astrology from NASA/JPL DE440, no LLM: natal charts, transits, synastry, kundli, dashas, doshas, panchang and Gun Milan, each result SHA-256 verifiable."
use_case: "Use when a task needs an exact birth chart, horoscope, kundli, dasha, panchang or marriage match instead of a model estimate: it resolves historical time zones and DST for you."
category: data
service_url: https://astro-agent.dev
openapi:
  path: openapi.json
---

Deterministic Western + Vedic astrology API for AI agents: JPL DE440 ephemeris, no LLM, reproducible SHA-256 hashes.

Pay per call with **x402** (USDC on Base or Solana) or **MPP** (Tempo: OUSD or USDC.e). No account, no API key. First 3 calls free per client on the five $0.01-0.02 routes (any tool over MCP); every other route is always paid.

- Positions from NASA/JPL DE440 (NASA/JPL), 1800-01-01..2200-01-01, via Skyfield: geocentric apparent, true equinox of date, IAU 2006/2000A.
- Historical time zones resolved for you (IANA tz database, DST of the era, Local Mean Time); ambiguous or non-existent local times are flagged, never guessed.
- Deterministic, no LLM: same input -> same bytes. Every response carries meta.input_sha256 and meta.result_sha256 (also as X-Input-SHA256 / X-Result-SHA256 headers); POST /v1/verify recomputes one.
- Every convention is in the response: ayanamsa (name, true and mean value), house system, orbs, node type, dasha year length, dosha and koota rule sets.
- Cross-validated against an independent engine (XALEN, Apache-2.0): ayanamsas agree to < 0.1", 15/16 divisional charts identically, all 11 house systems in structure.

## Spend-aware usage

- Pick the narrowest route: `POST /v1/western/positions` ($0.01) or `/v1/vedic/nakshatra` ($0.02) when only positions or the nakshatra are needed, not a full chart.
- `POST /v1/vedic/report` ($0.50) returns kundli, dashas, doshas and the birth panchang in one call: cheaper than calling the four routes separately.
- Results are deterministic: the same input always gives the same result and `meta.result_sha256`, so cache by input instead of calling again.
- A request with invalid input returns a 400 and is never charged; `GET /v1/catalog` (free) lists every route with its price and an example body.
