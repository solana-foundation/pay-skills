---
name: scrapling-data
title: "Scrapling x402 Data Store"
description: "Pay-per-call crypto prices, DeFi TVL and yields, DEX volume, Polymarket odds, Base token risk checks, crypto market datasets (JSON or CSV) and web-page scraping returning Markdown, JSON-LD and tables."
use_case: "Use for looking up a coin price, protocol TVL, yield pools, prediction-market odds or token scam risk, downloading crypto market, volume or heatmap datasets, or scraping a public web page into structured JSON."
category: finance
service_url: https://scraplingdata.xyz
openapi:
  path: openapi.json
---

Scrapling x402 Data Store sells crypto, DeFi and web data per call. No account
or API key: an unpaid request to a paid route returns an x402 v2 `402`
challenge (`PAYMENT-REQUIRED` header) and a retry carrying the payment proof
returns the data. Pay in USDC on Solana mainnet, Base, Polygon or Arbitrum.

- **Free** — `/v1/free/feeds`, `/v1/free/crypto/top10`,
  `/v1/free/defi/top-yields`, and the dataset catalog `/v1/free/datasets`.
- **Single lookups** ($0.002–$0.005) — `/v1/lookup/coin`, `/v1/lookup/protocol`,
  `/v1/lookup/yields`, `/v1/lookup/pool`, `/v1/lookup/polymarket`,
  `/v1/lookup/token-risk`. A miss returns `404` and is not charged.
- **Datasets** ($0.01–$0.03 for listings; larger live datasets up to $4.99) —
  `/v1/datasets/volume-leaders`, `/v1/datasets/market-heatmap`,
  `/v1/datasets/dex-volume`, `/v1/datasets/defillama-protocols`,
  `/v1/datasets/coingecko-markets`, plus `/v1/datasets/{id}/buy`. Supports
  `q`, `limit`, `offset` and `format=json|csv`. Free previews of up to 10 rows
  at `/v1/datasets/{id}/preview`.
- **Scraping** — `POST /v1/scrape` with `{"url": ...}` returns a page as
  Markdown, JSON-LD and tables ($0.001–$0.025 per page); `POST /v1/batch-scrape`
  takes up to 100 URLs.

## Spend-aware usage

- Check the free endpoints and `/v1/free/datasets` first; many questions are
  answered there at no cost.
- Prefer a single lookup ($0.002) over buying a full dataset when you need one
  coin, protocol or pool.
- Use the free `/preview` of a dataset to confirm it has the fields you need
  before buying, and pass `limit` and `q` to keep purchases small.
- Batch-scrape only the URLs you need; do not crawl in a loop.
