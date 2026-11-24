---
name: packs
title: 'Vigfox Solana Gacha Packs'
description: 'Live data on every public Solana gacha pack (Collector Crypt, Phygitals): return after buyback, published EV ratio, odds and stock per tier, rank vs the median, and storefront links, as JSON.'
use_case: 'Use to pick the best-value Solana gacha pack right now, compare packs by cash back after buyback, check odds and cards left per tier, or find where a pack is sold.'
category: data
service_url: https://vigfox.xyz
openapi:
  path: openapi.json
---

Vigfox tracks every public Solana gacha pack minute by minute and ranks them by return after buyback: the average cash a buyer gets back per $1 if they sell the pulled card straight back at the instant buyback. Each pack also carries the platform's published EV ratio, odds and stock per rarity tier, buyback %, cards left, rank against all packs and the median, and every storefront that sells it.

$0.01 USDC per call over x402 on Solana mainnet, paid to the Vigfox treasury. No account or API key. Two payment options: fees sponsored by the PayAI facilitator, or the payer's wallet pays its own network fee. A payment counts once it is confirmed; one payment buys one response. Unknown slugs (404) and warm-up answers (503) come before payment and are never charged.

Packs are random: every figure is an average over many pulls, not a promise for one pull. Data by Vigfox (vigfox.xyz), The Vigfox Team, hello@vigfox.xyz.

## Spend-aware usage

- One `GET /api/x402/best?n=10` call answers most "which pack is best right now" questions; filter with `venue`, `category` and `max_price` instead of fetching packs one by one.
- Call `GET /api/x402/pack/{slug}` only for a pack you already picked; slugs come from `/best` or the free `https://vigfox.xyz/api/v1/packs`.
- Figures refresh about every minute; avoid polling faster than that.
