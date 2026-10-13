---
name: media
title: "Xona Media Generation"
description: "AI media generation APIs: image generation and editing (FLUX.2, Nano Banana, GPT Image, Grok Imagine, Qwen, Seedream), 10-second video clips, music generation, text-to-speech voices, and audio transcription. Returns CDN URLs and metadata."
use_case: "Use for generating images from text prompts, editing images with reference photos, creating short video clips, composing AI music tracks, converting text to speech, and transcribing audio files to text."
category: media
service_url: https://api.xona-agent.com
openapi:
  path: openapi.json
---

Pay-per-call AI media generation for agents. Every endpoint is x402-gated:
an unpaid request returns an HTTP 402 challenge priced in USDC on Solana
mainnet; pay and retry with the `payment-signature` header. Generated assets
are returned as CDN URLs.

## Spend-aware usage

- Image models range from $0.04 (`/image/grok-imagine`) to $0.15
  (`/image/nano-banana-pro`). Start with a cheaper model and only escalate if
  the result quality is insufficient for the task.
- `/image/creative-director` ($0.03) researches live X/Google trends to refine
  a prompt. Call it once per concept and reuse the refined direction across
  multiple generations rather than re-running it per image.
- `/image/nano-banana-2` prices by resolution (1k $0.06 / 2k $0.10 / 4k $0.15)
  — request the lowest resolution that satisfies the use case.
- `/audio/elevenlabs-music` is priced by duration ($1 per 120 seconds, max 3
  minutes). Request the shortest `music_length_ms` that fits.
- `/video/short-generation` ($0.50) always produces a 10-second clip. Get the
  prompt right in one call instead of iterating.
