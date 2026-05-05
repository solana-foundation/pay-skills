---
name: media-generation
title: "StableStudio"
description: "Generate and edit AI images and videos with Sora, Veo, Wan, Grok, Seedance, GPT Image, Nano Banana Pro, and Flux. Supports text-to-video, image-to-video, image generation, image editing, reference uploads, async jobs, and dynamic pricing."
category: media
use_case: "Use for AI video generation, image generation, image editing, reference uploads, text-to-video prompts, image-to-video animation, creative assets, ads, social content, product mockups, visual ideation, and choosing Sora, Veo, Flux, Grok, or Seedance."
service_url: https://stablestudio.dev
openapi:
  url: https://stablestudio.dev/openapi.json
---

AI image and video generation via micropayments. Supports Sora 2, Veo 3.1, Wan 2.6, Grok, Seedance, GPT Image 1.5, Nano Banana Pro, and Flux 2 Pro models.

Pricing is dynamic -- the actual cost for each generation is determined at completion time based on the model, resolution, and duration selected. The `price_usd` values listed above are placeholders; the real charge is applied when the generation finishes.

To use image-to-video or edit endpoints, first upload a reference image via `/api/upload` to obtain a token, then pass that token in your generation request.

All generation endpoints return a `jobId`. Poll `GET /api/jobs/{jobId}` to track status until the job completes and the result URL is available.

## Spend-aware usage

- Pricing is dynamic. Before generation, state the model, media type, resolution,
  duration or image count, and expected price range; ask before paying.
- Use the cheapest model and smallest resolution/duration that meets the user's
  stated need. Do not create variants unless the user asked for alternatives.
- Upload each reference asset once and reuse the returned token across the
  generation request. Do not re-upload the same file.
- Poll the returned `jobId` for completion. Do not start a second generation
  because the first job is still pending.
