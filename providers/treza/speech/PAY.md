---
name: speech
title: "Treza Voiceover"
description: "Text-to-speech in 13 ElevenLabs voices on Eleven v3 or Multilingual v2 (29 languages), up to 3,000 characters per call, returning an MP3 URL. Priced per character: $0.42 per 1,000, minimum $0.02."
use_case: "Use for voiceover, narration, spoken audio for videos or podcasts, reading text aloud, audiobook snippets, multilingual speech, and expressive character reads with inline directions like [whispers]."
category: media
service_url: https://www.trezalabs.com
openapi:
  path: openapi.json
---

Treza speaks the `text` you send in one of 13 premade ElevenLabs voices and
returns an MP3, usually within seconds. The unpaid call returns an x402
challenge quoting the exact price for that text ($0.42 per 1,000 characters,
rounded up to the cent, minimum $0.02). `GET /api/x402/speech` with no
parameters lists the voices. The challenge accepts USDC on Solana mainnet or on
Base; no account or API key is involved.

## Spend-aware usage

- Price is per character, so trim the text to what will actually be spoken.
- Use `eleven-v3` for expressive reads and bracketed directions; use
  `eleven-multilingual-v2` for long, steady narration or non-English text.
- Split scripts over 3,000 characters into several calls.
- A failed render is not charged. Its status body carries a `retryUrl` that
  runs it once more on the same payment.
