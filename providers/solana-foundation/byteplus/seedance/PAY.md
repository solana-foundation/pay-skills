---
name: seedance
title: "BytePlus ModelArk Video Generation (Seedance)"
description: "Seedance text-to-video and image-to-video generation through BytePlus ModelArk's asynchronous task API — Seedance 2.0 (Dreamina), 2.0 Fast/Mini, 1.5 Pro, and 1.0 Pro/Lite — returning task ids and temporary MP4 download URLs."
use_case: "Use for AI video generation: text-to-video, image-to-video (first/last frame), reference-guided and audio-conditioned clips with Seedance models — create a generation task, poll until succeeded, download the video URL."
category: media
service_url: https://seedance.byteplus.gateway-402.com
sandbox_service_url: https://seedance.byteplus-sandbox.gateway-402.com
version: v3
openapi:
  path: openapi.json
---

Gateway proxy for BytePlus ModelArk's asynchronous video generation task API
(international ap-southeast region). The caller selects the Seedance model via
the request `model` field (e.g. `dreamina-seedance-2-0-260128`,
`dreamina-seedance-2-0-fast-260128`, `dreamina-seedance-2-0-mini-260615`,
`seedance-1-5-pro-*`, `seedance-1-0-pro/lite-*`) and it is passed through
unchanged. This gateway exposes the video-generation task subset of ModelArk
only — chat/completions and other ModelArk surfaces are not proxied.

Workflow: POST a task (flat fee), poll GET `/api/v3/contents/generations/tasks/{taskId}`
until `status` is `succeeded`, then download the temporary `content.video_url`
(it expires — copy it to durable storage promptly).

## Payment semantics

- Create accepts MPP charge, x402 `exact`, and x402 `upto`; retrieve is x402
  `upto` only (usage-settled). USDC, USDT, PYUSD, CASH, and USDG on Solana
  mainnet, with a server-side fee payer.
- Creating a task charges a small flat fee; the generation itself settles
  usage-based on the retrieve endpoint via x402-upto.
- Polls of a queued/running task carry no usage and settle as a full refund.
- The poll that returns the succeeded task settles its measured
  `usage.total_tokens` (video tokens = width x height x 24fps x seconds / 1024).
- Stop polling after a terminal state: fetching an already-succeeded task again
  settles its usage again.

## Spend-aware usage

- Video cost scales with resolution x duration: a 1080p 10s clip bills ~4.5x a
  720p 5s clip. Default to 720p and 5s unless the task demands more.
- All models currently bill at the same per-token price, so prefer the model
  whose quality you actually need rather than expecting cheaper variants to
  cost less through this gateway.
- Poll at a modest interval (a few seconds); polls before completion are
  refunded but still round-trip a payment channel.
- Use `return_last_frame` to chain shots instead of regenerating overlap.
- Do not pass `callback_url` when paying per use — callbacks bypass the
  gateway's usage settlement; poll the retrieve endpoint instead.
