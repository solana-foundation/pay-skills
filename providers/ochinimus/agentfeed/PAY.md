---
name: agentfeed
title: "AgentFeed"
description: "Crypto market data, Solana pre-trade checks, sanctions screening, papers, utilities and language tasks (OCR, translate, summarize, extract, classify, transcribe) for AI agents: 83 pay-per-call JSON data routes, USDC on 9 networks, 11 more on request."
use_case: "Use when an agent needs live derivatives and liquidation state, a Solana token or wallet check before a trade, a sanctions screen, scholarly papers, a hash, QR code or time conversion, or an OCR, translate, summarize or extract task. No account or key."
category: data
service_url: https://x402.ochinimus.app
openapi:
  path: openapi.json
---

AgentFeed is a read-only API for agents, gated per call. Crypto market data for AI agents (liquidations, funding, open interest, prices), Solana pre-trade checks, OFAC sanctions screening, scholarly papers, utilities and fixed-purpose language tasks (OCR, translate, summarize, extract, classify, prompt-injection check, transcribe).
There are 83 data routes at $0.001-$0.1 per call; one call to every
data route once costs $1.137. No accounts, no subscriptions and no API key
needed to pay per call: every paid route answers `402` with an x402 challenge,
the caller pays, and the same request returns JSON.
Every 402 offers per-call x402 `exact` payments in USDC on 9 networks: Solana
mainnet, Base, Polygon, Arbitrum, Arc, Algorand, Optimism, Monad and Avalanche.
11 more networks are offered on request: ask for one with
`GET /api/<route>|<network>` (the `|` may be sent as `%7C`; the network is its
CAIP-2 id, for example `/api/sol-price|eip155:42220`) and that route's 402 also
offers it. They are Celo (eip155:42220, USDC), HyperEVM (eip155:999, USDC),
Unichain (eip155:130, USDC), Scroll (eip155:534352, USDC), SKALE Base
(eip155:1187947933, USDC.e), BNB Chain (eip155:56, AUSD), Ethereum (eip155:1,
USDC), Robinhood Chain (eip155:4663, USDG) and World Chain (eip155:480, USDC);
on routes priced $0.005 or more only, also Sei (eip155:1329, USDC) and X Layer
(eip155:196, USDC). The token is not always USDC on these 11 networks.
x402 v2 clients read the challenge from the `PAYMENT-REQUIRED` header and pay
with `PAYMENT-SIGNATURE`; x402 v1 clients read the same challenge from the JSON
body and pay with `X-PAYMENT`, on Solana or Base.
Every paid route also carries an MPP `tempo`/`charge` challenge (Tempo, paid in
OUSD or USDC.e), and `/api/sol-price` and `/api/btc-price` an MPP
`solana`/`charge` challenge, in `WWW-Authenticate` on the same 402, so `pay` can
settle either protocol. x402 on 20 networks and MPP on Tempo make 21 chains.
Payment goes to `4a8o45skRPcyjAdyR8yES215Swvh8uTpZD6KLarhxCJ7` on Solana,
`0x22DB3A9686EE5261e7Bf3ed4f91277232E8076e6` on Base, Polygon, Arbitrum,
Optimism, Monad, Avalanche and each of the 11 networks offered on request,
`0x0Cf44185564F2b72E291050DC79E578429E52f83` on Arc and
`QWOWU2E6BB76HEQRRMXWZ2MU4HAQIYZWEPP2W7Y377ZRDIW7ZKD4MMMEPM` on Algorand.
Every data route also offers the same call at half price (minimum $0.0005) for
agents that call often: `batch-settlement` vouchers on Base, Polygon and
Arbitrum, paid to `0x22DB3A9686EE5261e7Bf3ed4f91277232E8076e6`, and Circle Gateway nanopayments
(`GatewayWalletBatched`) on Base, Polygon, Arbitrum and Arc, paid to
`0xA853129ACF56A851f9d51CD8cb47619465260Fa9`. An ordinary client should pick a
per-call `exact` option.
Take `payTo` from a fresh 402, never from transaction history:
lookalikes of the EVM address have sent address-poisoning transfers.

The liquidation tape is AgentFeed's own recording: Bybit's complete,
unthrottled liquidation stream, joined with OKX and Binance, with history no
exchange publishes itself. The measured market count is published
live by the service at `/` under `coverage.perp_markets_7d`, recomputed from
the tape rather than restated here, because a number written into a document
drifts and the tape does not.

The derivatives endpoints read Hyperliquid, the only venue behind the perp
routes, and cover funding, open interest, the top accounts' net-long share,
basis and volatility, plus a funding radar that scores the funding of every
Hyperliquid perp, main dex and HIP-3 dexes, against its own 30 days; the Solana
endpoints cover wallet holdings, token metadata, holder concentration and
rug-risk flags, priority fees and Jito tips. `/api/signal-board` is the
Hyperliquid perp market in one table ranked by open interest (price change,
funding, open interest and its change, last-hour liquidations, whale net
position and the crowding and squeeze flags), and `/api/coin-signal/:coin` is
the same row for one coin plus the 15-minute cascade probability, the nearest
liquidation clusters and the top whale positions. Both read only data AgentFeed
records itself and answer 503, never billed, when a source is stale.

`/api/tradfi-radar` ranks stock, index, commodity and FX perps on Hyperliquid
HIP-3 dexes by funding, and `/api/equity-24h` gives an indicative weekend
price for a US stock from those perps and its tokenized DEX price.
`/api/macro-calendar` lists FOMC decisions and CPI, NFP and PCE releases with
UTC times. `/api/tradfi-perps` gives 24/7 HIP-3 perp prices for stocks,
indices, commodities and FX, and `/api/fx-rates` the ECB euro reference rates.
`/api/sec-filings`, `/api/insider-trades` (Form 4) and `/api/sec-8k` read SEC
EDGAR; `/api/web-markdown` and `/api/pdf-markdown` turn one URL into markdown.
Spot prices (`/api/price`, `/api/sol-price`, `/api/btc-price`, `/api/eth-price`)
are read on-chain from deep DEX pools on Solana, Ethereum and Base, and
`/api/honeypot-check` simulates a buy and a sell of a token on Base, BNB Chain
or Ethereum.

The peg endpoints are not stablecoins: they measure tokenized US equities that
trade on Solana against the stock itself - the on-chain DEX price versus the
underlying's last real trade, broken out by trading session and ranked across
every tracked name.

Solana pre-trade checks: `/api/sol-token-check/:mint` ($0.025) returns
mint and freeze authority, Token-2022 traps, top holders, the deepest pool and
its depth, the price impact of a $100 and a $1,000 buy, and a verdict with every
rule; `/api/sol-token-flow/:mint` ($0.008) shows who is trading the token
(unique traders, top-5 share of volume, round-trip wallets, brand-new buyers,
launch-slot bundle size); `/api/sol-holder-clusters/:mint`
($0.008) groups the top 20 holders by the account that first
funded them.

Research and compliance: `/api/sanctions-check/:address`
($0.008) matches a wallet address exactly against the OFAC SDN
list (no match is not a clearance), `/api/papers` and `/api/paper/:doi` read
OpenAlex (CC0 data), `/api/wiki` returns a Wikipedia summary with its licence,
and `/api/email-verify` and `/api/domain/:domain` check an email address (no
SMTP probe) and a domain's DNS records and TLS certificate. Utilities:
`/api/hash`, `/api/qr`, `/api/time` and `/api/convert`, each $0.005.

Fixed-purpose language tasks: `/api/ocr`, `/api/summarize`, `/api/extract`,
`/api/translate`, `/api/classify`, `/api/injection-check` and `/api/transcribe`.
Each is one fixed task: the caller supplies content, never a prompt, model or
setting, and a provider failure is a 503 that is never billed. These seven are
not available in every country: where the underlying language-model API is not
offered they answer 451 before any payment.

Prepaid API keys, for bots that can set an HTTP header but cannot sign an x402
payment: seven purchase routes sell a key once, `/api/keys/buy-trial` ($0.25), `/api/keys/buy-1` ($1), `/api/keys/buy-5` ($5), `/api/keys/buy-20` ($20), `/api/keys/topup-5` ($5), `/api/keys/topup-20` ($20), and `/api/keys/buy-pass` ($25: a 30-day pass that works only on `/api/liq-feed` and draws nothing per call).
Send the key as `X-AgentFeed-Key` (or `Authorization: Bearer`) on any paid GET;
a key call draws half the route's x402 price (minimum $0.0005), and a 400, 404,
500 or 503 is never drawn. `GET /api/keys/balance` is free: send the key in the
`X-AgentFeed-Key` header and it returns balance_usd, calls, spent_usd,
last_used, rate_per_min and status (a missing or unknown key answers 401). The
key is a bearer secret; a balance is non-refundable usage credit with no expiry.
The purchase routes offer the per-call `exact` option only, on the same 9
networks and, on request, the 11 more; they have no half-price option. They are
purchases, not data routes, and are not counted in the 83.

Data routes run $0.001-$0.1 per call; the spot prices (`/api/price`, `/api/sol-price`,
`/api/btc-price`, `/api/eth-price`) are $0.001. Seven endpoints are free and carry no payment
challenge: `/api/fear-greed`, `/api/last-liquidation`, `/api/exit-method`,
`/api/forecast-record`, `/api/sample`, `/api/sample/{route}` and
`/api/keys/balance` (which takes the key header).

The data routes are also exposed as tools over MCP at `POST /mcp` for agents
that prefer a tool interface to raw HTTP; the prepaid-key routes are HTTP only.

## Spend-aware usage

- `/api/trade-context` ($0.01) bundles prices, funding, fear/greed, positioning
  and liquidations into one response. Prefer it over calling four endpoints
  separately, which costs more and returns a less coherent snapshot.
- `/api/market-state` ($0.02) is the regime read for one symbol: spot,
  realized vol, funding z-score, open interest, the top Hyperliquid accounts'
  net-long share, basis, liquidation spike and the next macro event in one
  response.
- `/api/market-snapshot` ($0.005) is the cheaper bundle when you only need
  prices, funding and sentiment.
- `/api/squeeze-score` ($0.1) is the most expensive data route, at
  twice the next tier. Reach for it when you specifically want the composite
  squeeze read, not as a general market check.
- `/api/cascade` ($0.01) covers the five majors. `/api/cascade-scan` ($0.05)
  widens the same detector to every perp in the tape and costs five times as
  much, so use it only when the whole universe is genuinely the question.
- `/api/signal-board` ($0.01) is one call for the whole Hyperliquid market;
  `/api/coin-signal/:coin` ($0.004) is the row for one coin. Pick the one that
  matches how many coins you need.
- `/api/liquidations` accepts a symbol; scope it rather than pulling the
  default majors set and filtering client-side.
- Token and wallet endpoints are keyed by mint or address. Cache the identifier
  and call the narrow endpoint directly instead of re-discovering it.
- `/api/fear-greed`, `/api/last-liquidation`, `/api/exit-method` and
  `/api/forecast-record` are free - use them to decide whether a paid call is
  warranted before making one.
- `/api/sample/{route}` returns a paid route's real captured response for free,
  so the exact shape can be checked before paying for it; `/api/sample` lists
  them.
- A 400 (a symbol nothing lists, a malformed input) and a 503 (a failed or stale
  source) are never billed. An agent that calls often can buy a prepaid API key
  once and pay half the x402 price per call.

<!--
REVIEW NOTES - the four fields below are proposals, not settled:

  category: data
    Proposed over `finance` because every route is a read-only lookup (market,
    on-chain and reference data) or a fixed-purpose task on content the caller
    supplies. Nothing here executes a trade, moves funds or touches
    custody, and `finance` in this registry reads as transactional. If the
    maintainers read `finance` as "financial data", that is the better bucket.

  title: "AgentFeed"
    The service's own name, as published in /.well-known/x402.json.

  description
    Written to CONTRIBUTING's rule - capabilities and result shapes, not use
    cases - and sized into the 180-255 band. Opens with the service's own
    scope sentence in its short form, then the data-route count (the prepaid-key
    purchase routes are not counted), the JSON result shape and the network
    count (the networks every 402 offers; more are offered on request).

  use_case
    Written as the "when to pick this" field: derivatives and liquidation
    state first, then the Solana pre-trade checks, sanctions screening,
    papers, utilities and language tasks.
-->
