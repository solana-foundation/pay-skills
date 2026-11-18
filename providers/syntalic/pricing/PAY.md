---
name: pricing
title: "Syntalic"
description: "Retail and social commerce data for US and Canada: observed prices and offers across Amazon, Walmart, Costco, Target and Shopify stores, price history, promotions, shelf share, brand assortment, and TikTok/Instagram brand attention."
use_case: "Use for cross-retailer price comparison, product price history, deal and price-drop checks, promotion and shelf-share analysis, brand and category assortment, retailer coverage, competitive pricing research, and social brand or creator trends."
category: shopping
service_url: https://api.syntalic.com
openapi:
  path: openapi.json
---

Observed e-commerce pricing, assortment, promotions and social intelligence for
the US and Canada: major retail chains and independent online stores, plus a
tracked TikTok and Instagram corpus. Prices are observations with a read date,
not live checkout prices.

Every route is a GET. Optional `country` is `us` (default) or `ca`.

Eleven measures under `v1/measures/*` each answer one kind of question with two
arguments: `subject` (an id from `v1/measures/resolve`, or a plain name) and
`by` (how the answer is split; each measure has a default). The direct routes
under `v1/shopper`, `v1/marketing`, `v1/analyst`, `v1/social`, `v1/reference`
and `v1/ontology` answer the same questions one route each.

Per request, in USDC: shopper, marketing, reference and ontology routes $0.01;
analyst $0.02; social $0.03; the two social-versus-shelf routes
(`attention-vs-shelf`, `launch-buzz`) $0.05. A measure costs its tier, $0.01 to
$0.05. pay pays over x402 in USDC on Solana; the API also accepts x402 on Base
and MPP on Tempo.

## Spend-aware usage

- Check coverage for free before paying: `GET v1/measures`, `v1/public/search`,
  `v1/public/brands`, `v1/public/retailers` and `v1/public/coverage` cost
  nothing.
- For one product, call `v1/shopper/best-price` (or `v1/measures/offers`) once.
  It already compares the tracked retailers, so do not call one endpoint per
  store.
- Before several follow-up calls about one brand, category or product, resolve
  it to an id once with `v1/measures/resolve` ($0.01) and pass the id.
- A `400` or `404` returned before the 402 is free: the request could not
  succeed, so nothing is charged. Fix the request rather than paying.
- Analyst, social and social-versus-shelf routes cost more. Use them only when
  the answer needs aggregates or social signals.
- Put the product name or model and the country in the first request.
