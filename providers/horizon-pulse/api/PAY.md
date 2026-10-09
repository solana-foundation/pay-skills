---
name: api
title: "Horizon Pulse"
description: "Pay-per-call web and crypto market data APIs: web search with page text, page to markdown, structured extract, screenshots, PDF to text, HTTP proxy, x402 endpoint checks, crypto spot prices, indicators, funding rates, gas, DeFi yields and wallet holdings."
use_case: "Use for live web research with sources, reading pages or PDFs as text, scraping page fields, screenshots, calling public APIs, auditing x402 endpoints, or BTC/ETH/SOL prices, RSI/MACD, perp funding, gas fees, DeFi yields and EVM wallet balances."
category: search
service_url: https://horizonpulse.dev
openapi:
  path: openapi.json
---

Horizon Pulse is a set of pay-per-call HTTP APIs for agents. Every paid
operation returns an x402 v2 402 challenge that offers the same price in USDC
on Solana mainnet (`exact`) and on Base. No account or API key.

- Web: `GET /api/search` (search with page contents), `GET /api/fetch` (page to
  markdown), `GET|POST /api/extract` (title, links, JSON-LD, CSS-selector
  fields), `GET|POST /api/http` (raw response from a public URL),
  `GET /api/screenshot` (rendered PNG/JPEG), `GET /api/pdf` (PDF text layer).
- Developer: `GET /api/x402-check` (one unpaid probe of an x402 endpoint,
  decoded and checked; never pays).
- Crypto market data: `GET /api/pulse` (BTC/ETH/SOL spot), `GET /api/signals`
  (RSI, MACD, Bollinger), `GET /api/funding` (OKX perpetual funding),
  `GET /api/gas` (Base and Ethereum fees), `GET /api/yield` (DefiLlama pools),
  `GET /api/portfolio` (holdings of one EVM address on Base and Ethereum).

Market data outputs are descriptive, not advice.
Most errors are not charged; exceptions are listed in https://horizonpulse.dev/llms.txt.
Sample responses for fixed inputs: `GET /api/demo/{route}`.

## Spend-aware usage

- Try `GET /api/demo/{route}` first to see a response shape before paying.
- `search`: keep `n` (1-5 pages) as small as the task allows.
- `fetch` and `pdf` cover most reading tasks; use `http` only when the raw
  status, headers or body are needed.
- Don't poll paid routes unless the user approved repeated paid calls.
