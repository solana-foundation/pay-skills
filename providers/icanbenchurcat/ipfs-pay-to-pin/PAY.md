---
name: ipfs-pay-to-pin
title: "IPFS Pay-to-Pin"
description: "Pay-per-pin IPFS storage for AI agents: upload any file as base64, pay USDC on Solana via x402, and get a 365-day pin with a public gateway URL. No accounts, no API keys, no subscriptions."
use_case: "Use when an agent needs to store a file on IPFS and fetch it later by CID: build artifacts, datasets, generated media, documents, or any blob worth keeping addressable for up to a year."
category: storage
service_url: https://pay-to-pin.duckdns.org
openapi:
  url: https://pay-to-pin.duckdns.org/openapi.json
---

IPFS Pay-to-Pin is a micropayment-gated pinning gateway. POST a JSON payload
with a base64-encoded file to `/api/v1/pin`; the server answers HTTP 402 with
an x402 payment challenge priced in microUSDC. Pay the challenge in USDC on
Solana mainnet, resubmit with the payment signature, and the file is pinned to
IPFS for 365 days. The response includes the CID and a public gateway URL, so
the file is retrievable by any agent or human with the CID.

Pricing is $0.01 base plus $0.02 per MB. Pins expire after 365 days; the
`/renew` endpoint extends a pin for another year at a 50% early-renewal
discount instead of re-uploading.

Reach for this when generated output needs to outlive the session: model
artifacts, evaluation datasets, rendered media, signed documents, or content
you want content-addressed and censorship-resistant rather than parked on one
provider's disk.

## Spend-aware usage

- The $0.01 base fee applies per pin call, so batch many small files into one
  archive (tar/zip) and pin once instead of paying the base fee per file.
- Identical content produces an identical CID. Check whether a CID is already
  pinned before paying to pin it again.
- Quote the price first: the 402 challenge names the exact microUSDC amount
  for your payload size before you spend anything.
- Nearing expiry, call `/renew` early for the 50% discount rather than
  re-uploading and paying full price for a fresh 365-day pin.
