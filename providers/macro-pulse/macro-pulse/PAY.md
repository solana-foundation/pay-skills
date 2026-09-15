---
name: macro-pulse
title: "Macro Pulse"
description: "Macro Pulse computes a per-country economic momentum score from public World Bank data (GDP growth, inflation, unemployment trend), synthesized into a single directional signal for grounding agent decisions on macro conditions."
use_case: "Use for quick macroeconomic context on a country before financial analysis, market commentary, country-risk screening, or as a lightweight signal input to a larger research or trading agent. Batch endpoint suits comparing several countries at once."
category: finance
service_url: https://macro-pulse-x402.onrender.com
endpoints:
  - method: GET
    path: "macro-pulse/{country_code}"
    resource: macro-pulse
    description: "Computed economic momentum score for a single country (GDP growth, inflation, unemployment trend, synthesized into one directional signal), sourced from World Bank Open Data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: GET
    path: "macro-pulse-batch/{country_codes}"
    resource: macro-pulse-batch
    description: "Same computed momentum score as macro-pulse, batched for up to 8 countries in one call at a flat price"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05
---

Macro Pulse turns free, public-domain World Bank indicators into a single
directional signal per country, so an agent doesn't have to fetch and
interpret raw GDP/inflation/unemployment series itself.

- `macro-pulse/{country_code}` - single-country lookup. Takes an ISO 3166-1
  alpha-2 or alpha-3 country code (e.g. `US`, `GB`, `JP`, `DEU`) and returns
  latest GDP growth, inflation, and unemployment values plus trend momentum
  for each, rolled up into one `momentum_score` and `momentum_label`
  (e.g. "improving", "deteriorating").
- `macro-pulse-batch/{country_codes}` - same computation for up to 8
  countries in a single call at a flat price, cheaper per-country than
  calling the single endpoint repeatedly.

Pay per request in USDC on Base via x402 - no signup, no API key. Responses
are cached server-side for 6 hours per country since underlying World Bank
data doesn't change intra-day. Output is directional context only, not
financial advice or a trading signal.
