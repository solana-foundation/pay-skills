---
name: aura
title: "anchor-x402: aura read (color + tier + score)"
description: "Aura read of any target — wallet, tweet, project, person, code, idea, meme. Returns color (free-form e.g. 'molten gold with copper veins'), tier (S / A / B / C / D / F), score (0-9999), and a punchy 2-3 sentence description. Universal text input."
use_case: "Use for viral / shareable content, brand vibe checks, character analysis of crypto wallets and Twitter handles, agent flair, demo content, screenshot-friendly outputs for social posts, and quick judgment calls dressed up as an aesthetic."
category: ai_ml
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`POST /v1/aura { target }` — $0.01 USDC. Any text up to 4000 chars. Powered by Claude Haiku on AWS Bedrock.

Returns `{ color, tier, score, description }`:
- `color` — free-form descriptive (e.g. `"molten gold with copper veins"`, `"vantablack with sparks"`, `"millennial-pink mist"`)
- `tier` — one of `S | A | B | C | D | F`
- `score` — integer 0-9999 (chaotic specific numbers feel right)
- `description` — 2-3 punchy sentences with attitude

## Spend-aware usage

- Cheap universal-input tool — works on wallets, tweets, projects, ideas, code, anything you can describe as text.
- Output is screenshot-friendly — color + tier + score + description is a single share-able card.
- For longer-form roast prose, use `roast` ($0.05). For honest constructive grading, use `grade` ($0.01).
- Often used as a viral hook in agent demos: 'aura check 0xVitalik' / 'aura check elonmusk.eth'.
