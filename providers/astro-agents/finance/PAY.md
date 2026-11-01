---
name: finance
title: "Astro Agents Finance"
description: "Astro-finance data from NASA/JPL DE440: geocentric and heliocentric planet positions, declination, Gann planetary lines and price levels, eclipse/station/ingress calendar, sky analogues, token launch charts and token synastry, SHA-256 hashed."
use_case: "Use for financial astrology backtests and market timing: Gann planetary lines, Mercury retrograde or eclipse dates, planetary cycles, matching past skies, a crypto token's launch chart, key dates or two-token synastry. Data only."
category: finance
service_url: https://astro-agent.dev
openapi:
  path: openapi.json
---

Celestial and market-timing data for traders, quants and agents. Every value
is computed from the NASA/JPL DE440 ephemeris (1800-2200), with no LLM in the
path. The same request returns the same bytes, and every response carries
`meta.result_sha256`, which `POST /v1/verify` (free) recomputes. It is data for
your own analysis, never a trading signal or forecast.

All routes are read-only: a call computes a result from its inputs and stores
nothing on your behalf. There are no accounts, no write endpoints and no API
keys.

## Endpoints

| Route | Returns | Price |
|---|---|---|
| `POST /v1/finance/planetary-lines` | Geo and helio planet degrees, snapshot or series (1h..1w), aspect offsets and Gann price levels (degree + 360 k) x unit | $0.20 |
| `POST /v1/finance/events` | Ingresses, stations, lunations, solar and lunar eclipses, aspects, parallels and out-of-bounds to the minute, with unix timestamps | $0.25 |
| `POST /v1/finance/analogues` | Past or future dates whose sky best matches a reference sky, ranked by a stated angular distance | $0.25 |
| `POST /v1/finance/token-chart` | A token's launch sky and the exact dates ahead when planets return to or aspect it, with an SVG card | $0.25 |
| `POST /v1/finance/token-synastry` | Two launch skies compared: cross-aspects, geometry score and its substance, with an SVG card | $0.25 |
| `POST /v1/western/positions` | Planet positions for any date; heliocentric or equatorial (RA, declination) on request | $0.01 |
| `POST /v1/western/sky` | The sky now and the next ingresses, stations, lunations and aspects | $0.01 |
| `POST /v1/western/aspects` | Aspects with orbs; declination parallels on request | $0.02 |
| `POST /v1/western/natal` | Natal chart: positions, houses, angles, aspects | $0.06 |
| `POST /v1/western/transits` | Transits to a chart and exact hit times over up to a year | $0.08 |
| `POST /v1/western/synastry` | Cross-aspects between two charts | $0.12 |

`GET /v1/catalog`, `GET /v1/health` and `POST /v1/verify` are free.

## Payment

Each paid route answers an unpaid `POST` with `402 Payment Required`:

- **Solana:** x402 `exact`, USDC (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`) to `8tosK4UvkrkhBq1fFquS4ecZKvHpeYtjCoMRMgMvcsQz`, in the `PAYMENT-REQUIRED` header. The facilitator pays the network fee.
- **Also offered:** x402 on Base (USDC), and MPP `charge` on Tempo in `WWW-Authenticate: Payment`. MPP is not offered on Solana.

Prices are fixed per call and match `GET /v1/catalog`, which is the source of
truth. A request with invalid input returns `400` before any payment and is
never charged. The $0.01-0.02 routes allow one free call per client; sending
the documented example body always returns the `402`.

## Spend-aware usage

- Ask for exactly the bodies and dates you need: `planetary-lines` returns a whole series in one call, cheaper than one `positions` call per date.
- Use `western/positions` ($0.01) when only longitudes are needed, not `natal`.
- Results are deterministic: cache by request body instead of calling again, and check a stored result with `POST /v1/verify` for free.
- `events` covers 1800-2200: page long ranges instead of repeating overlapping windows.
