---
name: short
title: "Treza Narrated Shorts"
description: "Makes a finished 30-second vertical video from a topic: script, four scenes, ElevenLabs narration, music, word-by-word captions and callouts, plus a title and description. $0.87 with stills, $3.22 animated."
use_case: "Use for making a complete faceless short video, explainer or fact video from one topic, content for Shorts, Reels or TikTok, and automated social video without editing, stock footage or a voice actor."
category: media
service_url: https://www.trezalabs.com
openapi:
  path: openapi.json
---

Send a `topic`; Treza writes a script, generates four scenes, narrates it with
an ElevenLabs voice, adds a music bed, word-by-word captions and callout cards,
and returns a finished 30-second vertical video with a title and description.
`style: stills` ($0.87) animates still images with a slow push-in; `style:
motion` ($3.22) renders each scene with Google Veo 3.1 Lite. The challenge
accepts USDC on Solana mainnet or on Base; no account or API key is involved.

## Spend-aware usage

- Use `stills` for drafts and topic tests; buy `motion` for the final cut.
- A topic that names a specific subject gives a sharper script than a broad
  theme.
- Generation takes minutes, longer than many HTTP clients wait. The paid call
  answers 200 at once with a statusUrl in the `X-Status-Url` header and waits
  about as long as that render usually takes; send `Prefer: wait=N` (up to
  720) to set the wait, or `Prefer: respond-async` for a 202 whose `Location`
  header is the statusUrl. A reply with `status: running` means the file is
  still rendering and is already paid for, not that the call failed: GET the
  statusUrl, runId and token included, to collect it. Never buy the same
  request again to get the result.
- If a step fails part way, only the steps that ran are charged and the
  `retryUrl` resumes the run, re-rendering only what failed.
