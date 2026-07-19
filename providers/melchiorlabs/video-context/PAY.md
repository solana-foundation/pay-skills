---
name: video-context
title: "Melchior Video Context"
description: "Extract public YouTube captions into timestamped segments, model-sized chunks, and deep-link citations, or normalize supplied text, WebVTT, SRT, and segment arrays for agent context."
use_case: "Use for YouTube video understanding, cited video summaries, lecture and interview research, caption extraction, subtitle parsing, and transcript chunking for AI agents."
category: media
service_url: https://transcript.melchiorlabs.com
version: "0.1.0"
openapi:
  path: openapi.json
---

Melchior Video Context turns public YouTube captions or supplied transcripts into
structured context for agents. YouTube extraction costs $0.01 per successful
request. Normalizing supplied text, WebVTT, SRT, or timestamped segments costs
$0.003 per successful request. Both endpoints accept USDC over x402 on Solana
mainnet and Base.

## Spend-aware usage

- Use `/v1/youtube/transcript` only when the source is a public YouTube URL.
- Use the cheaper `/v1/transcripts/context` endpoint when captions or transcript
  text are already available.
- Cache the returned transcript and chunks instead of extracting the same video
  repeatedly.
- Request only the text, segments, and chunk size the downstream task needs.
