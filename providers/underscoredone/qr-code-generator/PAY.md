---
name: qr-code-generator
title: "QR Code Generator"
description: "Turns a list of texts — URLs, phone numbers, WiFi credentials, plain words — into ready-to-use QR code images, each returned as a base64-encoded PNG."
use_case: "Use to generate one or many QR code PNGs in a single call for campaigns, tickets, labels, or menus, receiving embeddable base64 images rather than links to expire."
category: media
service_url: https://qr-code-generator.underscoredone.com
openapi:
  path: openapi.json
---

Turns a list of texts — URLs, phone numbers, WiFi credentials, plain words — into ready-to-use QR code images, each returned as a base64-encoded PNG. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Send all your texts in one batched call instead of one call per code.
- Store the returned PNGs — regenerating the same text costs another call.
