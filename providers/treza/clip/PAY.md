---
name: clip
title: "Treza YouTube Clipper"
description: "Turns a YouTube link into its most shareable 30 to 60 second moment as a captioned clip reframed on the speaker (9:16, 4:5, 1:1 or 16:9), with a title and caption. Priced by source length, $0.04 to $0.87."
use_case: "Use for clipping podcasts, interviews, talks and long YouTube videos into Shorts, Reels or TikTok clips, finding the highlight of a video, and repurposing long-form video into captioned vertical social posts."
category: media
service_url: https://www.trezalabs.com
openapi:
  path: openapi.json
---

Send a YouTube `url`; Treza finds its most shareable 30 to 60 second moment,
cuts it, reframes it on the speaker, burns in captions, and returns the clip
with a title and caption to post it with. The video is looked up before
payment and the x402 challenge quotes the exact price for its length ($0.04 for
a minute or less, $0.45 for an hour, sources up to 2 hours). A private,
age-restricted, live or overlong video is refused with a 400 before any payment.
The challenge accepts USDC on Solana mainnet or on Base; no account or API key
is involved. Clip only videos you have the rights to use.

## Spend-aware usage

- Price follows the source's length, so link the specific video rather than a
  longer upload that contains it.
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
