---
name: reads
title: "APEX Faucet"
description: "Paid HTTP reads for agents. A web page extract, an EVM token read, an NFT read, a cell sample, and a chat completion. Each unpaid call returns HTTP 402 for USDC on Solana."
use_case: "Use when an agent needs one public web page extract, one EVM token read, one NFT read, the cell sample, or a chat completion, and can pay USDC on Solana."
category: data
service_url: https://apexfaucet.xyz
openapi:
  path: openapi.json
---

APEX Faucet serves a small set of paid HTTP reads. An unpaid call to a listed
route returns HTTP 402 with an x402 challenge for USDC on Solana. A paid call
returns the read.

These routes are the ones in the OpenAPI sidecar. A call that leaves out a
required query is HTTP 400 and is not a payment challenge. Page markdown is
not listed here because that route accepts Base only.

## Spend-aware usage

- Use one listed route per question.
- Keep the sample query values unless the user named a different page, token, or NFT.
- Do not poll a route.
