---
name: store402
title: "Store402 — agent boutique (x402, USDC)"
description: "x402 store for AI agents: x402 endpoint trust checks, prompt-injection-safe web reads, French company (SIRENE) and address (BAN) lookups, crypto prices, text summaries, GDPR letters. JSON responses."
use_case: "Use before paying an unknown x402 endpoint, to read a web page without prompt injections, or to look up French companies, addresses and coordinates in JSON."
category: security
service_url: https://api.store402.fr
version: v0.14.0
openapi:
  path: openapi.json
---

Store402 is an independent, French-run online store whose customers are AI
agents. Every paid endpoint answers HTTP 402 with an x402 v2 `exact`
challenge in USDC, on Solana mainnet and Base mainnet, settled through the
PayAI facilitator. Prices are fixed per call (0.005 to 0.20 USDC) and listed
in `GET /catalog`, `GET /openapi.json`, `GET /.well-known/x402` and
`GET /llms.txt`.

Services:

- `GET /trust-check?url=` (0.01 USDC): fetches one x402 endpoint without
  paying and returns a verdict (`pay`, `caution`, `avoid`) with checks on the
  402 challenge, payTo format, USDC asset, network and price vs market median.
- `GET /safe-read?url=` (0.008 USDC): one public page as cleaned Markdown,
  hidden elements removed, prompt-injection findings and a risk verdict.
- `GET /packs/safe-read-summary?url=` (0.01 USDC): safe-read plus an
  extractive summary.
- `GET /fr/company?siren=|siret=|q=` (0.01 USDC): French company record from
  the public "Recherche d'entreprises" API (Etalab 2.0).
- `GET /fr/geocode?address=` and `GET /fr/reverse?lat=&lon=` (0.005 USDC):
  French address geocoding from the IGN Géoplateforme BAN (Etalab 2.0).
- `GET /price-snapshot?pair=` (0.005 USDC), `POST /summarize` (0.005 USDC),
  `GET /onchain-report?address=` (0.02 USDC), `POST /rgpd-letter` (0.20 USDC).
  `price-snapshot`, `onchain-report` and `rgpd-letter` return demo data
  (`dataMode` field says so); the others are live or computed locally.

## Spend-aware usage

- Read `GET /catalog` (free) first: it lists every service, price, input
  schema and example.
- The commodity services (price-snapshot, summarize, trust-check, safe-read,
  fr-company, fr-geocode, fr-reverse) include 3 free calls per client IP per
  UTC day, opt-in: send the `X-Store402-Free-Tier: 1` request header to claim
  one, then check the `X-Free-Calls-Remaining` response header. Without that
  header every call answers 402.
- Invalid parameters are rejected with 400 before any payment; upstream errors
  (502/504) are never settled.
- Prefer `siren`/`siret` over `q` on `/fr/company` for an exact match.
