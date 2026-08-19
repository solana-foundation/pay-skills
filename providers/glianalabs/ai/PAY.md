---
name: ai
title: "GlianaAI — Pay-per-call AI Inference"
description: "Pay-per-call AI across 90+ models: LLM chat, image, video, music, speech. No signup or API key — each call is paid from your own wallet via x402 or MPP, USDC on Solana mainnet (also Base/Tempo). Quote the exact price, then run it."
use_case: "Use for LLM chat, text-to-image, text-to-video, image-to-video, video editing, text-to-speech, speech-to-text, and music generation — pick a model, get the exact per-call price up front, and pay per result in USDC with no account."
category: ai_ml
service_url: https://api.glianalabs.com
openapi:
  path: openapi.json
---

GlianaAI is a pay-per-call generative AI gateway: one endpoint over 90+ LLM chat, image,
video, music, and speech models from providers like Google, OpenAI, ByteDance,
Black Forest Labs, MiniMax, Runway, and xAI. No signup, no API key, no prepaid
balance — each request is settled from the caller's own wallet, so an autonomous
agent can call any model with just funds on chain.

Payment is non-custodial, two protocols:

- **Native x402** — `POST /x402/{model}` returns a 402 whose `accepts` offers
  **USDC on Solana mainnet** and on Base. This is the Solana-settling path.
- **MPP** — `POST /v1/infer` (one-shot) and `POST /v1/session/infer` (a reusable
  payment channel for many calls, cheaper for repeated use) settle over MPP
  (Tempo / EVM USDC).

Either way the price is the model's exact per-call cost — quote it first with
`GET /v1/price` (no markup surprises).

## Spend-aware usage

- Call `GET /v1/models` to browse the catalog (id, category, provider, per-call
  price) — free, no payment. Pick a model before quoting or running.
- Call `GET /v1/price?model={id}` to get the exact cost of one call before
  paying. Pass billing-affecting input (e.g. `duration` for per-second video,
  `text` for per-character speech, `resolution` for tiered video) for a precise
  quote — free.
- Call `GET /v1/schema?model={id}` to see a model's input fields (required,
  types, enums, defaults) so you send a valid request the first time — free.
- Not sure which endpoint fits? `GET /v1/consult?intent={what you want to do}`
  returns ranked candidates with prices — free, and it never charges.
- Making many calls? `POST /v1/session/infer` opens one payment channel and
  settles many calls against it, which is cheaper than paying per request.
  Prefer it over `/v1/infer` for repeated work; use `/v1/infer` for one-offs.
- Run a model with `POST /v1/infer` (MPP) or `POST /x402/{model}` (x402). Send
  only the core input — a `prompt` (and a file URL for image/video/audio
  models); the gateway fills every other parameter from the model's schema and
  validates before charging, so a malformed call is rejected without taking
  funds. USDC on Solana mainnet or Base.
- File inputs (image-to-video, video editing, transcription) take a public URL.
  Upload a local file for free with `POST /v1/media` (≤40 MB) and pass the
  returned URL — no payment, no key.
- Generated media is returned as a stable hosted URL; fetch it from `GET
  /v1/media/{key}`.
- Quote before large jobs and prefer the cheapest model that fits the task — the
  catalog lists a per-call price for every model, and per-second/per-character
  models scale with the request.
