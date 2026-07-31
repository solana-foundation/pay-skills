---
name: creative
title: "Xona"
description: "Pay-per-call creative AI for agents — image, video, music, speech, and transcription generation across Flux 2, Nano Banana, Seedream and other models, plus X/Twitter and Solana token analytics. USDC settlement on Solana via x402."
use_case: "Use for agent image generation, video synthesis, music and speech generation, audio transcription, X/Twitter persona and news lookups, and Solana token discovery or pumpfun signal queries through one stablecoin-paid endpoint without API keys."
category: media
service_url: https://api.xona-agent.com
openapi:
  path: openapi.json
---

Xona is the creative resource layer for the agent economy, routed through the [PayAI facilitator](https://facilitator.payai.network/). Pricing is per-call, declared in each operation's `x-payment-info` block: image models `$0.03–$0.15` (one dynamic), video `$0.50–$0.80`, audio `$0.01–$1.50` (ElevenLabs music is the `$1.50` high end), social-AI `$0.05–$0.50`, and Solana token analytics `$0.001–$0.20`. The 28 endpoints group into four surfaces:

- **Image generation** — `/image/flux-2-{flex,pro,max}`, `/image/nano-banana{,-2,-pro}`, `/image/gpt-image-2`, `/image/grok-imagine`, `/image-model/qwen-image`, `/image-model/seedream-4.5`, plus opinionated routes (`/image/creative-director`, `/image/designer`).
- **Video generation** — `/video/seedance-generation`, `/video/short-generation` (dynamic pricing).
- **Audio** — `/audio/elevenlabs-music` for music, `/audio/x-text-to-speech` for TTS, `/audio/speech-to-text` for transcription.
- **Agent research** — `/ai/x-news` and `/ai/x-persona` for X/Twitter persona and news context; `/token/{news,signal,pumpfun-movers,pumpfun-trending,solana-discovery,solana-market,starter-kit}` for Solana token discovery and market data.

## Payment

- **x402** (default, this listing): A request to a paid route with no payment returns `402` carrying a structured x402 v2 challenge in both the body and a base64 `Payment-Required` header — Solana mainnet USDC, a per-call `amount`, and a real `payTo`. The agent signs and replays with an `X-Payment` header. These are the `openapi.json` routes (e.g. `/image/flux-2-max`).
- **MPP**: Xona publishes a parallel MPP-paid surface at `/mpp/...` (e.g. `/mpp/image/flux-2-max`) returning an `application/problem+json` 402 with a `challengeId` for agents on the MPP wallet flow. Both protocols settle in Solana mainnet USDC.

This is a server-to-server API. The 402 responses do not expose `Access-Control-Allow-Origin`, so browser-based agents should call through a backend proxy.

## Spend-aware usage

- Mind the high-cost routes. `/audio/elevenlabs-music` is `$1.50`, `/video/seedance-generation` `$0.80`, `/video/short-generation` and `/ai/x-news` `$0.50` each — confirm the task needs them before calling. For quick voiceovers prefer `/audio/x-text-to-speech` (`$0.01`) over music generation.
- Match the model to the brief. Use the cheapest image model that meets the prompt (`flux-2-flex` or a `nano-banana` variant for routine generations) and reserve `flux-2-max` or `creative-director` for higher-fidelity work.
- For multi-image campaigns, generate a single key visual with the highest-quality model and use `image2image`-style variants from a cheaper model for follow-ups rather than re-paying for the premium model each time.
- Cache token-analytics responses across a workflow. `/token/solana-market` and `/token/solana-discovery` change slowly enough that a single call usually answers a multi-step task — avoid re-querying every step.
- Use `/token/starter-kit` once at the top of a Solana-research workflow rather than calling discovery + movers + trending sequentially.
- For audio transcription, ask for the shortest meaningful segment; long-form `speech-to-text` is per-minute.
