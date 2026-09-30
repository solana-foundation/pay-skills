---
name: music
title: "Treza Music Generation"
description: "Original music from a text description of genre, mood, instruments and tempo on Google Lyria 3: a 30-second clip for $0.06 or a full-length structured track for $0.12, returning an audio URL."
use_case: "Use for background music, a music bed for a video, podcast intro or outro music, loops and stings, soundtrack drafts, and mood music for ads, games or presentations."
category: media
service_url: https://www.trezalabs.com
openapi:
  path: openapi.json
---

Treza composes an original track from a `prompt` describing genre, mood,
instruments and tempo, on Google Lyria 3. `lyria-3-clip` makes a 30-second piece
for $0.06; `lyria-3-pro` makes a full-length track with an intro, development
and ending for $0.12. The challenge accepts USDC on Solana mainnet or on Base;
no account or API key is involved.

## Spend-aware usage

- Use `lyria-3-clip` for beds, loops and stings under a short video; reserve
  `lyria-3-pro` for a standalone song.
- Describe genre, instruments and tempo concretely; one good prompt beats
  several paid rerolls.
- A failed render is not charged. Its status body carries a `retryUrl` that
  runs it once more on the same payment.
