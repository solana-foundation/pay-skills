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

Horizon Pulse is a set of pay-per-call HTTP APIs for agents: 27 paid routes
(31 operations). Every paid
operation returns an x402 v2 402 challenge that offers the same price in USDC
on Solana mainnet (`exact`) and on Base. No account or API key.

- Web: `GET /api/search` (search with page contents), `GET /api/fetch` (page to
  markdown), `GET|POST /api/extract` (title, links, JSON-LD, CSS-selector
  fields), `GET|POST /api/http` (raw response from a public URL),
  `GET /api/screenshot` (rendered PNG/JPEG), `GET /api/pdf` (PDF text layer).
- Developer: `GET /api/x402-check` (one unpaid probe of an x402 endpoint,
  decoded and checked; never pays), `GET /api/bazaar-check` (whether an x402
  seller is listed in Coinbase CDP Bazaar and, if not, why; never pays).
- Transactions: `GET /api/tx-status` (whether a transaction on Base, Polygon,
  Solana or the XRP Ledger has landed and is final, from public RPCs; a
  not_found status is a charged answer), $0.002 per call.
- Tokenized stocks: `GET /api/tokenized-stock` (status check of the Coinbase
  tokenized stocks on Base: paused flags, supply, supply cap, multiplier,
  issuer; on-chain token state only, no price; not investment advice),
  $0.002 per call.
- Monitoring: `GET /api/watch` (whether a public web page or endpoint changed
  since your last check; pass back the returned state token as `since`; a
  short diff of added lines; a changed:false answer is charged), $0.002 per
  call.
- Payer balance: `GET /api/balance` (whether a wallet can pay right now on
  each rail: stablecoin balance, gas/fees incl. the XRPL reserve and RLUSD
  trust line, calls left at live prices; no risk score, no USD valuation;
  billed if at least one rail answers), $0.002 per call.
- Pre-transfer check: `GET /api/tx-guard` (mechanical checks on a recipient
  address before sending: lookalike vs an expected address, OFAC SDN
  crypto-address snapshot with source URL and date, account age, ScamSniffer
  public list; allow, warn or block per check; not advice), $0.002 per call.
- Chain data: `GET /api/chain/head` (current block, slot or ledger index for
  Base, Polygon, Ethereum, Solana and the XRP Ledger), `GET /api/token/meta`
  (token name, symbol, decimals and supply from chain state; no price),
  `GET /api/name/resolve` (ENS and Basenames, name to address or address to
  primary name, read on-chain), $0.002 per call each.
- Food: `GET|POST /api/grocery/normalize` (recipe ingredient lines to a
  normalized, scaled list; deterministic, no prices), $0.002 per call;
  `GET|POST /api/grocery/ingredient` (per-100 g nutrients from a USDA
  FoodData Central snapshot or Open Food Facts by barcode; up to 10 items
  per POST; no prices), $0.005 per call.
- Crypto market data: `GET /api/pulse` (BTC/ETH/SOL spot), `GET /api/signals`
  (RSI, MACD, Bollinger), `GET /api/funding` (OKX perpetual funding),
  `GET /api/gas` (Base and Ethereum fees), `GET /api/yield` (DefiLlama pools),
  `GET /api/portfolio` (holdings of one EVM address on Base and Ethereum).
- Research: `GET /api/discourse/split` (how public Hacker News and Bluesky
  posts split on a question; a sample, not a poll), $0.03 per call, USDC on
  Base, Solana or Polygon, or RLUSD on the XRP Ledger.
- Agent marketplace: /api/market/search and /api/market/quote, $0.005 per call, USDC on Base or Solana; checked seller quotes with evidence fields.

Market data outputs are descriptive, not advice.
Most errors are not charged; exceptions are listed in https://horizonpulse.dev/llms.txt.
Sample responses for fixed inputs: `GET /api/demo/{route}`.

## Spend-aware usage

- Try `GET /api/demo/{route}` first to see a response shape before paying.
- `search`: keep `n` (1-5 pages) as small as the task allows.
- `fetch` and `pdf` cover most reading tasks; use `http` only when the raw
  status, headers or body are needed.
- Don't poll paid routes unless the user approved repeated paid calls.
