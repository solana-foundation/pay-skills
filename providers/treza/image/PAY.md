---
name: image
title: "Treza Image Generation"
description: "Text-to-image on seven models (Nano Banana, Nano Banana 2 and Pro, GPT Image 2, Seedream 5 Pro, FLUX.2 Pro, Recraft V4.1), square to 21:9 and up to 4K, $0.02 to $0.36 per image, returning an image URL."
use_case: "Use for generating images, illustrations, thumbnails, product and marketing visuals, posters with legible text, photoreal renders, brand graphics, and social media artwork in a chosen aspect ratio."
category: media
service_url: https://www.trezalabs.com
openapi:
  path: openapi.json
---

Treza generates one image per paid call from a `prompt` on the `model` you pick.
Each model sells its own aspect ratios and its own price setting (a resolution
or a quality level); `GET /api/x402/image` with no parameters lists every
option and price, and the unpaid call's x402 challenge quotes the exact amount.
A setting the model does not support is refused with a 400 before any payment.
The challenge accepts USDC on Solana mainnet or on Base; no account or API key
is involved.

## Spend-aware usage

- Start with `nano-banana` (the default and cheapest) for drafts; use
  `nano-banana-pro` or `gpt-image-2` when the image must contain legible text.
- Ask for 4K only when the output will be printed or cropped heavily.
- A failed render is not charged. Its status body carries a `retryUrl` that
  runs it once more on the same payment.
