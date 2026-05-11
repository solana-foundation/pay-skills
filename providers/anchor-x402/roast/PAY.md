---
name: roast
title: "anchor-x402: roast anything"
description: "Witty, observational roast of any target — a wallet address, tweet, code snippet, startup idea, person, meme. Returns a 3-5 paragraph LLM roast plus a one-sentence neutral summary. Clever and specific, not lazy. Ends with a zinger."
use_case: "Use for entertainment posts, demo content, social engagement, roasting wallets / tweets / startup pitches / code snippets / ideas, viral share-bait, and any agent flow that needs sharp prose feedback on free-form input."
category: ai_ml
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`POST /v1/roast { target }` — $0.05 USDC. Universal target input up to 8000 chars. Powered by Claude Haiku on AWS Bedrock.

Returns `{ roast: <prose>, target_summary: <one neutral sentence> }`. The roast is 3-5 short paragraphs of clever, observational, specific takedown — not lazy mean-spirit. Ends with a zinger line.

## Spend-aware usage

- Single-shot tool; one request per roast.
- Truncates the target to 8000 chars internally — pass shorter inputs (one tweet, one pitch deck paragraph, one code snippet) for tighter focus.
- For lighter / shorter feedback at 1/5 the price, use `aura` ($0.01) — same universal-input pattern, returns color + tier + score + 2-3 sentence description instead of long-form prose.
- `roast` is intentionally edgier than `grade` ($0.01). Pick `grade` for honest constructive feedback, `roast` for entertainment.
