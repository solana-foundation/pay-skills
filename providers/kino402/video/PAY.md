---
name: video
title: "kino402"
description: "Finished video from one paid request: UGC product spots, product hero loops, launch teasers, faceless explainers, raw text- and image-to-video, and TTS."
use_case: "Use when an agent needs a finished short video or voice track without an account: product ads, looping product shots, launch announcements, narrated explainers, or a raw model render."
category: media
service_url: https://kino402.com
openapi:
  path: openapi.json
---

Pay-per-call video generation and text-to-speech over x402, USDC on Base or Solana. No account and no API key: an unpaid POST answers 402 with the exact price for the body you sent, and that number is the one that settles.

Four formats are sold by brief rather than by prompt. You describe the thing being sold, and the service writes the shot and renders it:

- `POST /v1/forms/ugc-product-video`: a creator-style talking spot from a product name and one to five selling points ($0.372 for 5s).
- `POST /v1/forms/product-hero-loop`: a product photo becomes a seamless, silent loop. The photo is the first and the last frame ($0.216 for 5s).
- `POST /v1/forms/launch-teaser`: a 10s announcement with voice-over and a music sting ($0.683).
- `POST /v1/forms/faceless-explainer`: narrated b-roll, one shot per beat, no presenter ($0.683 for 10s).

`POST /v1/generate` forwards a raw prompt to a named model (Seedance, Kling, Hailuo), with image-to-video on Seedance 1.5 pro. `POST /v1/audio/tts` returns mp3 synchronously, priced per character.

Renders are asynchronous. A paid call returns `{job_id, status_url}`, and `GET /v1/jobs/{id}` is free; poll it until `completed` with a `video_url`.

## Spend-aware usage

- Read the price before paying: an unpaid POST with your exact body returns the quote and costs nothing.
- Evaluate a format cheaply first. Each form has a prompt sibling at `/v1/prompts/<form>` ($0.005-$0.009) that returns the compiled prompt and render plan without rendering.
- Send the shortest duration that carries the message. Price scales with seconds and resolution, and with audio on Seedance 1.5 pro.
- Poll `GET /v1/jobs/{id}` with backoff. It is free, so never re-buy a render that is still running.
- A refused body (400) and a failed pre-flight on an image URL charge nothing, so the same payment header can be presented again with a corrected body.
