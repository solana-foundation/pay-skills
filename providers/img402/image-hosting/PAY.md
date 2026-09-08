---
name: image-hosting
title: "img402"
description: "Image hosting API at img402.dev: upload PNG, JPEG, GIF, or WebP via multipart or base64 JSON and get a public Cloudflare CDN URL. Free tier (1MB, 7-day) plus x402 tiers: $0.01 USDC for 5MB/1-year, $1 for permanent. USDC on Solana and Base, no accounts."
use_case: "Use for hosting screenshots, diagrams, mockups, and generated images that need a public URL — embedding images in GitHub PRs and issues, sharing visuals in chat or documents, publishing agent-generated artifacts, or getting a durable hosted image link."
category: storage
service_url: https://img402.dev
openapi:
  path: openapi.json
---

Upload an image, get a public CDN-backed URL. Three tiers: free (1MB, 7-day
retention, no auth), $0.01 USDC via x402 (5MB, 1-year retention), $1.00 USDC
via x402 (5MB, permanent retention). No accounts, no API keys. Payments accepted
in USDC on Solana mainnet and Base.

## Spend-aware usage

- Use the free endpoint (`POST /api/free`) for images under 1MB that only need
  7-day retention — enough for most PR screenshots and chat shares.
- Pay only when it matters: `POST /api/upload/token` ($0.01, 1-year) for files
  over 1MB or longer retention; reserve the permanent tier ($1.00) for
  long-lived assets like README images.
- The paid flow is two-phase: pay for an upload token, then send the file to
  `POST /api/upload` with the `X-Upload-Token` header within 10 minutes.
- Payments are idempotent — the same payment returns the same token, so
  retrying after a network error will not double-charge.
- Compress or downscale screenshots before uploading; smaller files often fit
  the free tier and upload faster.
