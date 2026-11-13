---
name: image-hosting
title: "img402"
description: "Image hosting at img402.dev: upload PNG, JPEG, GIF, or WebP for a public CDN URL. Images up to 1MB are free and permanent; up to 10MB is free for 30 days or permanent for $0.01 USDC via x402. Supports Solana and Base, no accounts."
use_case: "Use for hosting screenshots, diagrams, mockups, and generated images that need a public URL — embedding images in GitHub PRs and issues, sharing visuals in chat or documents, publishing agent-generated artifacts, or getting a durable hosted image link."
category: storage
service_url: https://img402.dev
openapi:
  path: openapi.json
---

Upload an image, get a public CDN-backed URL. Images 1MB or under are free and
permanent. Larger images up to 10MB are free for 30 days, or permanent for
$0.01 USDC via x402. No accounts or API keys. Payments are accepted in USDC
on Solana mainnet and Base. The old $1.00 permanent-token endpoint remains
available for compatibility, but new integrations should use the $0.01 route.

## Spend-aware usage

- Use the free endpoint (`POST /api/free`) for images 1MB or under that need
  permanent hosting, or larger images up to 10MB that need only 30 days.
- Pay only when an image over 1MB must outlive 30 days: `POST /api/upload/token`
  ($0.01) provides permanent hosting for an image up to 10MB.
- The paid flow is two-phase: pay for an upload token, then send the file to
  `POST /api/upload` with the `X-Upload-Token` header within 10 minutes.
- Payments are idempotent: replaying an unused payment returns the same token;
  replaying one already used for an upload returns the existing image.
- Compress or downscale screenshots before uploading; smaller files often fit
  the free tier and upload faster.
