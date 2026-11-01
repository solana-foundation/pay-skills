---
name: astrology
title: "Astro Agents"
description: "Deterministic Western and Vedic astrology from NASA/JPL DE440, no LLM: natal charts, transits, synastry, kundli, dashas, doshas, yogas, KP, panchang and Gun Milan, each result SHA-256 verifiable."
use_case: "Use when a task needs an exact birth chart, horoscope, kundli, dasha, panchang or marriage match instead of a model estimate: it resolves historical time zones and DST for you."
category: data
service_url: https://astro-agent.dev
openapi:
  path: openapi.json
---

Deterministic Western + Vedic astrology API for AI agents: JPL DE440 ephemeris, no LLM, reproducible SHA-256 hashes.

Pay per call with **x402** (USDC on Solana or Base) or **MPP** (Tempo: OUSD or USDC.e). No account, no API key. One free call per client on the $0.01-0.02 routes (`time/resolve`, `vedic/nakshatra`, `vedic/panchang` here); every other route is always paid, over MCP too. `GET /v1/catalog` (free) is the source of truth for prices.

- Positions from NASA/JPL DE440, 1800-01-01..2200-01-01, via Skyfield: geocentric apparent, true equinox of date, IAU 2006/2000A.
- Historical time zones resolved for you (IANA tz database, DST of the era, Local Mean Time); ambiguous or non-existent local times are flagged, never guessed.
- Deterministic, no LLM: same input -> same bytes. Every response carries meta.input_sha256 and meta.result_sha256 (also as X-Input-SHA256 / X-Result-SHA256 headers); POST /v1/verify recomputes one.
- Every convention is in the response: ayanamsa (name, true and mean value), house system, orbs, node type, dasha year length, dosha and koota rule sets.
- Read-only: a call computes a result from its inputs and stores nothing.

## Endpoints

| Route | Returns | Price |
|---|---|---|
| `POST /v1/time/resolve` | Local birth time and place to exact UT: historical UTC offset, Delta T, Local Mean Time | $0.01 |
| `POST /v1/western/natal` | Natal chart: planets in signs and houses, ascendant, MC, 11 house systems, aspects | $0.06 |
| `POST /v1/western/transits` | Transits to a chart and exact hit times over up to a year | $0.08 |
| `POST /v1/western/synastry` | Relationship comparison: cross-aspects, house overlays both ways, composite midpoints | $0.12 |
| `POST /v1/vedic/nakshatra` | Nakshatra, pada and lord of every graha; janma nakshatra attributes | $0.02 |
| `POST /v1/vedic/panchang` | Tithi, vara, nakshatra, yoga, karana with end times, sunrise and sunset | $0.02 |
| `POST /v1/vedic/kundli` | Sidereal D1 + D9: lagna, 9 grahas with house, dignity and combustion | $0.15 |
| `POST /v1/vedic/kundli-full` | The kundli plus all 16 divisional charts D1..D60 | $0.32 |
| `POST /v1/vedic/dashas` | Vimshottari maha, antar and pratyantar periods with exact dates | $0.10 |
| `POST /v1/vedic/doshas` | Manglik, Kaal Sarp and Sade Sati / Dhaiya, each with the rule applied and dates | $0.15 |
| `POST /v1/vedic/gun-milan` | 36-point Ashtakoota matching: all 8 kootas with reasons | $0.25 |
| `POST /v1/vedic/report` | Kundli, dashas, doshas and birth panchang in one call | $0.50 |
| `POST /v1/vedic/kp` | KP chart: star, sub and sub-sub lords of grahas and Placidus cusps, significators | $0.15 |
| `POST /v1/vedic/yogas` | Rule-based yogas: Pancha Mahapurusha, Gaja-Kesari, Raja, Dhana, Neecha Bhanga and more | $0.10 |

`GET /v1/catalog`, `GET /v1/health` and `POST /v1/verify` are free. Planet
positions, aspects and the astro-finance routes are listed separately as
`astro-agents/finance`; the two listings share no paid endpoint.

On Solana, each paid route answers an unpaid `POST` with `402` and an x402
`exact` offer in USDC to `8tosK4UvkrkhBq1fFquS4ecZKvHpeYtjCoMRMgMvcsQz`. MPP is
offered on Tempo only.

## Spend-aware usage

- Pick the narrowest route: `/v1/vedic/nakshatra` ($0.02) when only the nakshatra is needed, not a full kundli.
- `POST /v1/vedic/report` ($0.50) returns kundli, dashas, doshas and the birth panchang in one call: cheaper than calling the four routes separately.
- Results are deterministic: the same input always gives the same result and `meta.result_sha256`, so cache by input instead of calling again.
- A request with invalid input returns a 400 and is never charged.
