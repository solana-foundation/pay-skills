---
name: buy
title: "Fizzl Buy"
description: "Buys the best paid x402 API for a stated need (weather, crypto and stock prices, exchange rates, web search) and returns its answer, checked by TypeSafe Jev, with the seller, the price and a signed receipt."
use_case: "Use when an agent needs live data from a paid API but should not choose the seller itself: weather forecasts, crypto or stock prices, exchange rates, web search. Nothing is charged when no seller delivers."
category: data
service_url: https://buy.fizzl.eu
version: v1
openapi:
  path: openapi.json
---

One call instead of choosing a seller: say what you need in plain words and Fizzl Buy picks the x402 service that x402 Doctor has seen paying out day after day at a fair price, fills in its input, buys it (up to $0.01 from the seller) and returns the answer.

- **`POST /v1/buy`** ($0.02, USDC on Base or Solana): send `{"need": "weather forecast for Amsterdam tomorrow"}`. The answer comes back with the seller it came from, what it cost and a signed receipt. TypeSafe Jev checks that the answer is what was asked for and carries no instructions aimed at the agent; when a seller fails, the next one is tried. Nothing is charged when no seller delivers.
- **`GET /v1/pick?need=…`** (free): which seller would be bought for this need, its price and its track record, without buying.

An MCP server with a free pick tool and a paid buy tool is at `https://buy.fizzl.eu/mcp`.

## Spend-aware usage

- **Put the details in the need** (place, date, ticker, currency pair): a vague need picks a vaguer seller.
- **Call `/v1/pick` first when unsure** whether a need can be bought; it is free.
- **Reuse an answer** within the session instead of buying the same need again.
