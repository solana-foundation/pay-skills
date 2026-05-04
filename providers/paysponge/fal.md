---
name: fal
title: "fal.ai"
description: "Generate images and videos with fal.ai models including Fast SDXL, FLUX Schnell/Dev/Pro/Ultra, Recraft v3, Stable Diffusion 3.5 Large, Stable Video, and MiniMax Video. Supports async request retrieval, status polling, and cancellation."
use_case: "Use for text-to-image, design graphics, illustration, photo-style renders, premium FLUX generations, video generation, creative asset pipelines, and async media workflows that need request polling or cancellation."
category: media
service_url: https://fal.x402.paysponge.com
openapi:
  url: https://fal.x402.paysponge.com/openapi.json
---

fal.ai generation endpoints exposed through PaySponge with x402 payments.

This provider covers paid image and video generation across Fast SDXL, FLUX
Schnell, FLUX Dev, FLUX Pro v1.1, FLUX Pro v1.1 Ultra, Stable Diffusion 3.5
Large, Recraft v3, Stable Video, and MiniMax Video-01. The same listing also
includes the follow-up async request routes for retrieving results, polling job
status, and canceling in-flight generations.

The spec currently exposes fixed per-request pricing from $0.01 to $0.07.
Polling, result retrieval, and cancel routes are listed as zero-cost in the
spec, while paid generation endpoints accept x402 USDC on Solana mainnet, Base,
and Avalanche.

Note: the published OpenAPI document is intentionally light on typed request
schemas. Agents that need exact model-specific input fields, path coverage, or
payment metadata should inspect the linked spec directly before building calls.

## Spend-aware usage

- Choose the cheapest model that fits the task. Start with Fast SDXL or FLUX
  Schnell for drafts, then move to FLUX Dev, FLUX Pro, or Recraft only when the
  user needs visibly higher quality.
- Use image models for still-image requests and reserve Stable Video or MiniMax
  Video-01 for genuine motion output. Do not spend video pricing on image-only
  tasks.
- Reuse the returned `request_id` and poll the matching `status` or result
  route instead of resubmitting the same generation request.
- Cancel abandoned jobs when the user changes direction or no longer needs the
  output so follow-up automation does not keep polling stale work.
