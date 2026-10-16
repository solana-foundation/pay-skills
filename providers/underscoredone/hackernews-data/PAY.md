---
name: hackernews-data
title: "Hacker News Data"
description: "Reads live Hacker News data: current Top, New, Best, Ask, Show, or Job lists, or every story, job, and poll posted on a specific past calendar date, optionally including comment threads."
use_case: "Use to pull current or historical Hacker News stories, jobs, and polls with optional comment threads for trend monitoring, research, or newsletter and digest generation."
category: data
service_url: https://hackernews-data.underscoredone.com
openapi:
  path: openapi.json
---

Reads live Hacker News data: current Top, New, Best, Ask, Show, or Job lists, or every story, job, and poll posted on a specific past calendar date, optionally including comment threads. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Request comments only when you will actually read them — they enlarge the response.
- Pull one dated batch rather than repeated list calls when backfilling history.
