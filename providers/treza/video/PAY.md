---
name: video
title: "Treza Video Generation"
description: "Text-to-video and image-to-video on eight models (MiniMax H3, Veo 3.1 Lite/Fast/Standard, Wan 2.7, Kling 3.0/Pro, Seedance 2.5), 4 to 15 seconds, 16:9 or 9:16, returning an MP4 URL per paid call."
use_case: "Use for generating short video clips from a prompt, animating a still image or product shot from its first frame, b-roll, social video, ad creative, and vertical video for Shorts, Reels or TikTok."
category: media
service_url: https://www.trezalabs.com
openapi:
  path: openapi.json
---

Treza renders one video per paid call. Send a `prompt`, and optionally a
`model`, `seconds`, `aspectRatio` and an `image_url` to animate from its first
frame. The unpaid call returns an x402 challenge quoting the exact price for
that model and length; `GET /api/x402/video` with no parameters returns the full
menu of models, lengths and prices. Prices run from $0.42 (5 seconds on
minimax-h3) to $4.90 (15 seconds on seedance-2.5). The challenge accepts USDC on
Solana mainnet or on Base; no account or API key is involved.

## Spend-aware usage

- Start on `minimax-h3` (the default and cheapest) and move to Kling, Seedance
  or Veo only when the user needs that model's look.
- Buy the shortest length that covers the shot; price scales with seconds.
- For image-to-video, leave `model` unset to get the cheapest model that takes
  an image at the requested length.
- Generation takes minutes, longer than many HTTP clients wait. The paid call
  answers 200 at once with a statusUrl in the `X-Status-Url` header and waits
  about as long as that render usually takes; send `Prefer: wait=N` (up to
  720) to set the wait, or `Prefer: respond-async` for a 202 whose `Location`
  header is the statusUrl. A reply with `status: running` means the file is
  still rendering and is already paid for, not that the call failed: GET the
  statusUrl, runId and token included, to collect it. Never buy the same
  request again to get the result.
- A failed render is not charged. Its status body carries a `retryUrl` that
  runs it once more on the same payment.
