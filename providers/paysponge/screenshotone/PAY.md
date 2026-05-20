---
name: screenshotone
title: "ScreenshotOne"
description: "Capture website screenshots, PDFs, rendered HTML, and animated video or GIF output from URLs or HTML payloads using ScreenshotOne, with GET and POST capture routes for browser-rendered visual web artifacts."
use_case: "Use for webpage screenshots, visual regression artifacts, PDF capture, rendered HTML capture, website preview images, GIF or video page recordings, and browser-rendered visual outputs from a URL or HTML input."
category: media
service_url: https://screenshotone.x402.paysponge.com
openapi:
  path: openapi.json
---

ScreenshotOne browser-rendered capture endpoints exposed through PaySponge
with x402 payments.

The published spec currently exposes `/take` as both `GET` and `POST` plus an
`/animate` `GET` route. The service is intended for website screenshots and
related rendered outputs including PNG, JPEG, WebP, PDFs, rendered HTML, and
animated video or GIF captures from a URL or HTML payload.

All currently published routes are paid at $0.02 per request and accept x402
USDC on Solana mainnet, Base, and Avalanche.

Note: the OpenAPI document is minimal and does not spell out rich request
parameters inline. Agents that need exact capture options, media formats, or
request body fields should inspect the linked spec directly before building
calls.

## Spend-aware usage

- Use `GET /take` for straightforward captures when the request fits cleanly in
  query parameters and use `POST /take` when the capture options or HTML input
  are larger or more structured.
- Use `/animate` only when the caller explicitly needs motion output such as a
  GIF or video. Do not spend animation pricing on a static screenshot task.
- Capture only the asset type the user asked for. Avoid paying for repeated
  format variants unless the output requirements are still unclear.
