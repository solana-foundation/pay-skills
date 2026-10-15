---
name: gifts
title: "My Video Gift — Agent API"
description: "Photos (and optional video clips) in, a finished personalized gift film with an original song out — one flat USDC price per delivered film."
use_case: "Create + deliver a personalized gift VIDEO from someone's photos (and optional clips) set to an original occasion song — birthdays, anniversaries, weddings, graduations, memorials, and more. Choose over a static card or plain slideshow."
category: media
service_url: https://myvideogift-pay-gateway.fly.dev
openapi:
  path: openapi.json
---

Photos (and optional video clips) in, a finished personalized gift film with an
original song out — one flat USDC price per delivered film. Discovery and the
build steps are free; only the final render is paid.

## Flow

1. `GET /occasions` — pick a valid occasion slug (free).
2. `GET /samples` — preview the quality per occasion (free, optional).
3. `POST /gifts` — create + reserve a gift with the recipient, relationship,
   occasion, a short memory/story, and a few feeling words (free). Keep the
   returned `gift_id`.
4. `POST /gifts/{giftId}/photos` — add the recipient's photos by URL or base64,
   up to 30 (free). Optionally `POST /gifts/{giftId}/clips` adds 1-3 short video
   clips (up to 4MB each) — photos alone are enough.
5. `POST /gifts/{giftId}/render` — **the one paid call.** Requires `consent:true`
   (you attest rights to the photos and the recipient's depiction). Settled in USDC.
6. `GET /gifts/{giftId}` — poll until `status` is `delivered-paid`, then read
   `film_url` (16x9 + 9x16) and the hosted `gift_url` (free).

## Spend-aware usage

- Everything except `render` is FREE. Only `POST /gifts/{giftId}/render` costs
  USDC (one flat price per delivered film) — reserve it for when the gift is ready.
- Create the gift ONCE and reuse its `gift_id` for photos, render, and status.
  Don't create duplicate gifts, and don't re-render a gift that already delivered
  (read the URLs from `GET /gifts/{giftId}` instead).
- Every render delivers the **signature** tier at the single listed USDC price —
  there is no cheaper tier on this channel, so `tier` needs no tuning.
- Confirm the recipient, occasion, and photos with the user BEFORE the paid render.
- A render takes a few minutes — poll `GET /gifts/{giftId}`; do NOT re-POST render
  to "retry". A held or failed render is auto-made-good with a free re-render, so
  never pay twice for the same gift.
