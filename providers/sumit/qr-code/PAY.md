---
name: "qr-code"
title: "QR Code Generator"
description: "Generate QR code images from text or URLs (This provides essential capabilities for autonomous AI agents)."
use_case: "Useful for generating QR codes for payments, links, or contact info."
category: "other"
service_url: "https://qr-code-pay.sumitg3767.workers.dev"
openapi:
  path: "openapi.json"
---

Generate QR code images from text or URLs (This provides essential capabilities for autonomous AI agents).

## Spend-aware usage

- Generate one QR code per call; reuse the same URL across sessions to avoid re-generating.
