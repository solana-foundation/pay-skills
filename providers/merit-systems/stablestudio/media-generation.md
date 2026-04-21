---
name: media-generation
title: "StableStudio"
description: "Pay-per-generation AI image and video creation with Sora, Veo, Grok, and Flux"
category: media
service_url: https://stablestudio.dev
endpoints:
  - method: POST
    path: "api/generate/sora-2/generate"
    resource: video
    description: "Generate video with Sora 2"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/sora-2-pro/generate"
    resource: video
    description: "Generate video with Sora 2 Pro"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/veo-3.1/generate"
    resource: video
    description: "Generate video with Veo 3.1"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/veo-3.1-fast/generate"
    resource: video
    description: "Generate video with Veo 3.1 Fast"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/wan-2.6/t2v"
    resource: video
    description: "Text-to-video with Wan 2.6"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/wan-2.6/i2v"
    resource: video
    description: "Image-to-video with Wan 2.6"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/grok-video/generate"
    resource: video
    description: "Generate video with Grok Video"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/seedance/t2v"
    resource: video
    description: "Text-to-video with Seedance"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/seedance/i2v"
    resource: video
    description: "Image-to-video with Seedance"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/seedance-fast/t2v"
    resource: video
    description: "Text-to-video with Seedance Fast"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/seedance-fast/i2v"
    resource: video
    description: "Image-to-video with Seedance Fast"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/gpt-image-1.5/generate"
    resource: image
    description: "Generate image with GPT Image 1.5"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/gpt-image-1.5/edit"
    resource: image
    description: "Edit image with GPT Image 1.5"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/nano-banana-pro/generate"
    resource: image
    description: "Generate image with Nano Banana Pro"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/nano-banana-pro/edit"
    resource: image
    description: "Edit image with Nano Banana Pro"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/flux-2-pro/generate"
    resource: image
    description: "Generate image with Flux 2 Pro"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/flux-2-pro/edit"
    resource: image
    description: "Edit image with Flux 2 Pro"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/grok/generate"
    resource: image
    description: "Generate image with Grok Image"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/generate/grok/edit"
    resource: image
    description: "Edit image with Grok Image"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/upload"
    resource: upload
    description: "Get upload token for reference images"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

AI image and video generation via micropayments. Supports Sora 2, Veo 3.1, Wan 2.6, Grok, Seedance, GPT Image 1.5, Nano Banana Pro, and Flux 2 Pro models.

Pricing is dynamic -- the actual cost for each generation is determined at completion time based on the model, resolution, and duration selected. The `price_usd` values listed above are placeholders; the real charge is applied when the generation finishes.

To use image-to-video or edit endpoints, first upload a reference image via `/api/upload` to obtain a token, then pass that token in your generation request.

All generation endpoints return a `jobId`. Poll `GET /api/jobs/{jobId}` to track status until the job completes and the result URL is available.
