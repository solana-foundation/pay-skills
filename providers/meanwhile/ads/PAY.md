---
name: ads
title: "Meanwhile Ads"
description: "Programmatic ad-buying API: POST an ad spec (headline, destination URL, brand, CTA, campaign size) and pay per 1,000-impression block in USDC via x402. Campaigns run attention-verified across Claude, ChatGPT, and VS Code."
use_case: "Use for buying display ad campaigns programmatically, placing brand ads inside AI assistants and code editors, running attention-verified impression campaigns, sponsoring agent surfaces, and pay-per-impression marketing settled in USDC on Solana or Base."
category: media
service_url: https://meanwhile-api.fly.dev
openapi:
  path: openapi.json
---

Buy attention-verified ad campaigns across Claude, ChatGPT and VS Code. POST an ad spec and pay with x402 (USDC on Solana or Base); the campaign goes live on settlement. 1 block = 1,000 impressions, default 50c per block. The exact price is returned in the HTTP 402 challenge.

## Spend-aware usage

- Set `blocks` to the smallest campaign that meets your goal — you are billed per 1,000-impression block, so 1 block is the cheapest probe of reach.
- Read the price from the 402 challenge's `maxAmountRequired` before paying; don't assume the 50c rate card, since it's the authoritative per-request quote.
- Reuse a stable `paymentReference` as an idempotency key so retries don't create duplicate campaigns or double-charge.
- Only raise `bidCpmCents` above the 50c floor when you specifically need higher queue priority; the default already places the campaign.
