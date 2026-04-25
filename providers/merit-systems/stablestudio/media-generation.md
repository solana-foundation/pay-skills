---
name: media-generation
title: "StableStudio"
description: "Pay-per-generation AI image and video creation with Sora, Veo, Grok, and Flux"
category: media
use_case: "Use when you need to generate or edit images and videos using AI models like Sora, Veo, Grok, Flux, Seedance, or GPT Image, with pay-per-generation pricing"
service_url: https://stablestudio.dev
endpoints:
  - method: POST
    path: "api/generate/sora-2/generate"
    resource: video
    description: "Generate a video from a text prompt using OpenAI Sora 2 with configurable resolution and duration"
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
    description: "Generate a high-fidelity video from a text prompt using OpenAI Sora 2 Pro for enhanced visual quality"
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
    description: "Generate a video from a text prompt using Google Veo 3.1 with realistic motion and scene composition"
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
    description: "Generate a video quickly from a text prompt using Google Veo 3.1 Fast for lower-latency results"
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
    description: "Generate a video from a text description using Wan 2.6 with support for various styles and durations"
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
    description: "Animate a reference image into a video using Wan 2.6 with controllable motion and scene transitions"
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
    description: "Generate a video from a text prompt using xAI Grok Video with creative and expressive visual output"
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
    description: "Generate a video from a text prompt using Seedance with high-quality motion and cinematic rendering"
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
    description: "Animate a reference image into a video using Seedance with smooth motion synthesis and scene control"
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
    description: "Generate a video quickly from a text prompt using Seedance Fast for lower-latency video creation"
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
    description: "Animate a reference image into a video using Seedance Fast for quicker turnaround on image animation"
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
    description: "Generate an image from a text prompt using OpenAI GPT Image 1.5 with photorealistic and artistic styles"
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
    description: "Edit an existing image using OpenAI GPT Image 1.5 with text instructions for inpainting and modifications"
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
    description: "Generate an image from a text prompt using Nano Banana Pro with fast rendering and creative style options"
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
    description: "Edit an existing image using Nano Banana Pro with text-guided modifications and region-based inpainting"
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
    description: "Generate an image from a text prompt using Black Forest Labs Flux 2 Pro with high detail and consistency"
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
    description: "Edit an existing image using Black Forest Labs Flux 2 Pro with text-guided inpainting and style transfer"
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
    description: "Generate an image from a text prompt using xAI Grok Image with creative and expressive visual output"
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
    description: "Edit an existing image using xAI Grok Image with text-guided modifications and creative adjustments"
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
