---
name: toll-apis
title: "ExchangeRebel"
description: "24 pay-per-call data APIs for AI agents, settled in USDC or SOL on Solana via x402: SEC fundamentals, ETF distributions, equity screening, funding rates, token safety, macro series, news, weather, books, jobs, dev utilities, and Solana RPC."
use_case: "Use when an agent needs verifiable data mid-task with no accounts or subscriptions: company fundamentals, short interest, funding and liquidation data, bridge risk scores, spend-policy checks, Telegram bot provisioning, or cheap developer utilities."
category: data
service_url: https://exchangerebel.com
version: v1
openapi:
  path: openapi.json
---

ExchangeRebel is a fleet of 24 pay-per-call APIs for AI agents, live at exchangerebel.com under /toll/*. Every paid endpoint is gated with x402 on Solana mainnet: call without payment to receive a 402 challenge (SOL recipient, USDC token account, and a fresh memo), pay on Solana with the memo attached via the Memo program, then retry with the header `X-Payment-Tx: <signature>` and `?toll_memo=<memo>`. Settlement accepts USDC or SOL; there are no accounts, API keys, or subscriptions — the payment is the credential.

Coverage: agent service discovery and matching; Solana RPC access sold in verified 1,000-request blocks; Solana fee estimates and TRON energy estimates; batch voucher scoring; bridge risk scoring; agent spend-policy checks; SEC company fundamentals; FINRA short interest; ETF distribution history (54 tickers); Solana token safety and composite risk scores; perpetual funding rates and liquidation heatmaps (Bybit, Hyperliquid, Binance); Telegram bot provisioning from an operator-managed pool; weather (current, forecast, alerts); GDELT news search/trending/timelines; Wikipedia answers; 26 developer utilities (hashing, encoding, UUID, JSON, cron, regex, JWT, diff, and more); an S&P 500 screener with per-ticker quotes; US macro series (CPI, unemployment, payrolls, Fed funds target, Congress bills, Census population); Open Library book metadata; and remote-job search across three public boards. Prices are USD per call as declared in each operation's x-payment-info (fleet minimum $0.005; most endpoints $0.005–$0.05; RPC is priced per 1,000-request block; Telegram provisioning is per bot-month).

Every service publishes a free root catalog and a free /health endpoint listing its endpoints, request/response shapes, and prices, so an agent can plan spend before paying anything. The full machine-readable index also lives at https://exchangerebel.com/.well-known/x402 and the OpenAPI document at https://exchangerebel.com/openapi.json.

## Spend-aware usage

- Read the free root catalogs and /health endpoints first — endpoint lists, response shapes, and prices are free; only data calls are charged.
- Prefer narrow lookups (one ticker, mint, or symbol per call) over broad screens; use the free screener universe and ETF screener endpoints to plan paid calls.
- Cap result sizes with the limit parameters to the smallest number that answers the task, and reuse identifiers (tickers, mints, ISBNs) across calls instead of re-searching.
- Use POST /toll/discovery/match ($0.02) only when the right service is unclear — the OpenAPI index and free catalogs usually answer routing for free.
- Telegram provisioning is priced per bot-month ($0.50): provision once and reuse the bot rather than re-provisioning per task.
