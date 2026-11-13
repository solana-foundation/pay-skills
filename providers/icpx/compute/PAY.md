---
name: compute
title: ICPX GPU Compute
description: Mainnet Solana-paid GPU compute for AI agents, NVIDIA model deploys and terminal-backed jobs.
use_case: Create a GPU job, receive a Solana payment challenge, pay with USDC, then run the approved workload through ICPX.
category: compute
service_url: https://www.icpx.cloud
openapi:
  path: openapi.json
---

ICPX exposes GPU compute as a Solana-paid API.

This registry listing targets mainnet and returns an MPP `WWW-Authenticate`
challenge for USDC payments on `POST /api/pay/compute/jobs`.

The public catalog endpoint is included so agents can inspect supported NVIDIA
models, skills, blueprints and GPU filters before creating a paid job.
