---
name: tools
title: "Agent402"
description: "Pay-per-call weather, place lookup, computed crypto market screens and image OCR over x402: forecasts, history, air quality, ensemble probabilities, US alerts, stablecoin depeg, DeFi, chain and DEX boards, as JSON, paid in USDC on Solana."
use_case: "Use for current, hourly and daily weather, weather history, air quality, outdoor-plan windows, forecast rule checks, weather probabilities, US alerts, geocoding a place name, stablecoin depeg checks, DeFi and DEX boards, and OCR on an image."
category: data
service_url: https://agent402.tools
version: v1
openapi:
  path: openapi.json
---

Agent402 sells tools to agents per call. Each listed route answers HTTP 402 with an x402 challenge that
includes USDC on Solana mainnet; no account or API key. Answers are JSON. None of these 19 routes runs a
language model.

- Weather worldwide, by coordinates or place name: `GET api/weather-current`, `GET api/weather-hourly`
  (up to 168 hours), `GET api/weather-daily` (up to 16 days), `GET api/weather-history` (a date range
  back to 1940) and `GET api/weather-air-quality` (US AQI and pollutant concentrations).
- Weather planning: `GET api/weather-window` finds the hours in the next 1 to 16 days that meet your
  limits for rain, wind and temperature; `POST api/weather-thresholds` checks the hourly forecast against
  up to 8 rules of your own.
- Weather probability, from up to 82 ensemble members (ECMWF IFS and NOAA GEFS):
  `GET api/weather-probability` gives the chance a day's high, low, rain total or wind passes a threshold;
  `POST api/weather-market-brackets` gives the member share in each bracket you send for one place and
  date; `POST api/weather-market-board` does the same across many cities for one date. The two bracket
  routes read no market feed: you supply the brackets and prices, and they answer facts only, with no
  rating or recommendation. Raw model output, not station-calibrated.
- `POST api/weather-risk-brief`: one 7-day risk read for up to 50 sites, each with a 0-100 score from
  frost, heat, gust, rain, snow and air-quality signals, ranked. Priced per site and quoted in the 402
  for the sites you send.
- US weather: `GET api/weather-forecast` (multi-period forecast by latitude and longitude) and
  `GET api/weather-alerts` (active alerts for a state), from the National Weather Service
  (api.weather.gov, public domain).
- Places: `GET api/place-lookup` resolves a city, town, region or postal-code name to coordinates,
  country, region and timezone.
- Crypto market screens: `GET api/stablecoin-depeg-watch` (every USD stablecoin above a market-cap floor
  with its deviation from $1), `GET api/defi-screener`, `GET api/chain-board` (blockchains ranked by
  native asset) and `GET api/dex-volume-board` (a network's DEXes by volume share). Each answer is
  computed by Agent402 from market data: shares, ratios, ranks and deviations.
- OCR: `POST api/image-ocr` reads text from an image you send with open-source Tesseract on Agent402's
  own servers, returning text, confidence and line boxes.

## Data credits

- Weather data by Open-Meteo.com (https://open-meteo.com/), under CC BY 4.0
  (https://creativecommons.org/licenses/by/4.0/). Place data from GeoNames (CC BY 4.0).
- `api/weather-history` contains modified Copernicus Climate Change Service information, and
  `api/weather-air-quality` contains modified Copernicus Atmosphere Monitoring Service information (CAMS
  ENSEMBLE data provider); `api/weather-risk-brief` contains both. Neither the European Commission nor
  ECMWF is responsible for any use that may be made of the Copernicus information or data it contains.
- The four crypto market screens are Powered by CoinGecko (https://www.coingecko.com/en/api); every
  answer carries that credit.

## Spend-aware usage

- For a US location, `api/weather-forecast` gives multi-period forecasts at the lowest price; use
  `api/weather-daily` or `api/weather-hourly` for day-by-day or hour-by-hour detail, or outside the US.
- Pass `place` to a weather route instead of calling `api/place-lookup` first; call the lookup only when
  you need the coordinates or timezone themselves.
- Current, hourly, daily, window and threshold answers are cached for up to 5 minutes, the probability
  routes for up to 15 minutes and history for up to 60 minutes; polling faster returns the same reading.
- For many sites, one `api/weather-risk-brief` call costs less than calling the five weather routes it
  runs for each site.
- One `api/stablecoin-depeg-watch` call covers every USD stablecoin above the floor; set
  `minMarketCapUsd` or `limit` instead of calling per coin. The depeg watch refreshes every 15 minutes
  and the other three screens every 30 minutes, so reuse an answer inside that window.
- On x402, a failed call (4xx or 5xx) to any of these routes is not charged: each runs first and
  settles only after a successful answer.
