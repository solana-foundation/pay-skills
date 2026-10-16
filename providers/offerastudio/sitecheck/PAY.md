---
name: sitecheck
title: "SiteCheck"
description: "225 pay-per-call tools for agents in USDC: Bitcoin, EVM and Solana reads, DeFi and perps data, web and PDF reading, SEO/DNS checks, OCR, SEC and KYB data, geo, dev lookups, text AI."
use_case: "Use to read a web page or PDF, check a site (SEO, links, headers, DNS) or a company (SEC, VAT, LEI, UK registry), get macro rates, OCR an image, or check Solana and EVM tokens, wallets, gas and swap quotes."
category: data
service_url: https://api.sitecheck-api.workers.dev
openapi:
  path: openapi.json
---

SiteCheck is a live pay-per-call API for AI agents. Every call is paid on its own with x402 in USDC on Solana, Base or Arc: no account, no API key. A payment settles only when the call succeeds, so a failed call is never charged. The same tools are served as a remote MCP server at `/mcp` (x402 MCP transport; official MCP Registry: `io.github.bck-stack/sitecheck`).

Web and documents
- `GET /api/read?url=` ($0.002): one web page as clean Markdown or text (main content only) with title, description, author, date, language and canonical URL; robots.txt respected.
- `POST /api/pdf` ($0.003): PDF to text by URL or base64, page by page, with metadata (text PDFs only).
- `GET /api/sitemap?url=` ($0.002): every URL in a site's XML sitemaps with lastmod.
- `GET /api/tech?url=` ($0.003): website technology detection with version, confidence and evidence.
- `GET /api/meta`, `/api/links` (broken links), `/api/redirects`, `/api/headers` (security grade), `/api/dns` (SPF/DMARC/DKIM grade): $0.001-0.003 each.
- `POST /api/ocr` ($0.003): text from an image. `GET /api/exif` ($0.002), `/api/qr` ($0.001), `/api/lang` ($0.001), `/api/validate` (ISBN/EAN/VIN/IMEI/ISIN, $0.001).
- `GET /api/audit?url=` ($0.02): WCAG 2.2 accessibility issues with fixes, SEO basics, security headers. `GET /api/contacts?url=` ($0.01): company e-mails, phones, socials.

Data checks
- `GET /api/email-check` ($0.001): syntax, mail DNS, disposable, role account, typo suggestion; up to 50 per call.
- `GET /api/domain` ($0.002): RDAP registration data and DNS.
- `GET /api/fx` ($0.001): ECB exchange rates, conversion and time series. `POST /api/translate` ($0.002).
- KYB: `/api/vat` (EU VIES, $0.002), `/api/iban` ($0.001), `/api/lei` (GLEIF, $0.005), `/api/recalls` (FDA/CPSC, $0.003), `/api/violations` (OSHA/EPA, $0.005), `/api/uk-insolvency` (The Gazette, $0.003).

Company and public data
- `GET /api/sec/filings` ($0.002) and `/api/sec/financials` ($0.003): SEC EDGAR filings and XBRL key figures.
- `/api/uk-company` (Companies House, $0.003), `/api/congress` (US bills, $0.002), `/api/macro` (Fed, ECB and Eurostat rates and inflation, $0.001), `/api/github/repo` ($0.002), `/api/hn` ($0.001), `/api/wiki` ($0.001).

More data
- Chain reads: `/api/evm/address`, `/api/evm/balance`, `/api/evm/tx`, `/api/evm/block`, `/api/evm/transfers`, `/api/evm/logs`, `/api/evm/call`, `/api/evm/allowance`, `/api/evm/nft`, `/api/solana/tx`, `/api/solana/account` ($0.001-0.003).
- Markets: `/api/crypto/price`, `/api/crypto/candles`, `/api/crypto/orderbook`, `/api/defi/tvl`, `/api/defi/yields`, `/api/defi/stablecoins`, `/api/sec/insiders`.
- Reference: `/api/weather`, `/api/geocode`, `/api/ip`, `/api/holidays`, `/api/postcode`, `/api/package`, `/api/vulns`, `/api/github/user`, `/api/arxiv`, `/api/doi`, `/api/feed`.
- Text AI: `POST /api/extract` (fields from a page or text by your schema), `POST /api/summarize`, `/api/sentiment`, `POST /api/rerank`, `/api/tables`.

Even more
- Bitcoin: `/api/btc/fees`, `/api/btc/address`, `/api/btc/tx`. Contracts: `/api/evm/decode` (calldata), `/api/evm/contract` (Sourcify). Markets: `/api/perps/markets`, `/api/perps/account` (Hyperliquid), `/api/prediction/polymarket`, `/api/crypto/fear-greed`, `/api/defi/fees`, `/api/defi/dex-volume`.
- Registries and regulators: `/api/company/registry` (NO, FI, CZ, PL), `/api/securities/id` (OpenFIGI + GLEIF), `/api/sec/search`, `/api/sec/events`, `/api/fda/label`, `/api/fda/adverse-events`, `/api/clinical-trials`, `/api/pubmed`, `/api/grants`, `/api/eu-tenders`, `/api/npi`.
- Geo: `/api/us-geocode`, `/api/earthquakes`, `/api/weather/alerts`, `/api/sun`, `/api/timezone`, `/api/distance`, `/api/disasters`. Site checks: `/api/llms-txt`, `/api/ai-crawlers`, `/api/trackers`, `/api/certs`, `/api/logo`. Dev: `/api/github/releases`, `/api/github/issues`, `/api/stackoverflow`, `/api/wikidata`.
- Text AI and utilities: `POST /api/moderate`, `/api/describe-image`, `/api/classify`, `/api/entities`, `/api/redact`, `/api/phone`, `/api/cron`, `POST /api/json-validate`.

Crypto (information only, not financial advice)
- `GET /api/gas` ($0.001): fees on Base, Ethereum, Arbitrum, Optimism, Polygon and Solana. `/api/solana/quote` ($0.002): Jupiter swap quote. `/api/evm/token` ($0.003): ERC-20 proxy, owner and risky-function flags. `/api/evm/wallet` ($0.003), `/api/ens` ($0.001).
- `GET /api/solana/token?address=` ($0.002): price, liquidity, holders, organic score, top-holder share, on-chain mint and freeze authority, red flags.
- `GET /api/solana/trending` ($0.003): trending, new, top-traded or top-organic tokens with the same flags.
- `GET /api/solana/wallet?address=` ($0.003): SOL and token balances with USD values.
- `GET /api/markets`, `/api/markets/brief`, `POST /api/markets/quote`, `POST /api/markets/build-buy`: Panta prediction markets (search, odds, quote, unsigned buy transaction the agent signs itself).

New: compliance, travel and media
- `GET /api/sanctions?name=` ($0.01): OFAC, EU, UN and UK sanctions screening with fuzzy matching, aliases, scores and official links.
- `GET /api/flights?from=&to=&date=` ($0.05): flight fares, cheapest, fastest and nonstop options with every segment.
- `GET /api/media/transcript?url=` ($0.0009 per minute of `maxMinutes`, at least $0.002): speech to text from TikTok, X, SoundCloud, podcasts and direct media files. `GET /api/youtube/transcript` ($0.01): a YouTube video's captions.
- `/api/crypto/whales` (large transfers, $0.003), `/api/ssl` (certificate expiry, $0.001), `POST /api/markdown` (Markdown to HTML, $0.001), `/api/pagespeed` (Lighthouse and Core Web Vitals, $0.005), `/api/producthunt` (launches, $0.002).

Finance, text, reference, developer and business utilities
- Finance: `/api/crypto/funding` (perp funding and open interest across venues), `/api/crypto/indicators` (RSI, MACD, Bollinger, ATR), `/api/crypto/news`, `/api/crypto/convert`, `/api/econ/indicator` (World Bank), `/api/finance/loan` (amortisation, NPV, IRR): $0.001-0.002.
- Text: `POST /api/text/grammar`, `/api/text/readability`, `/api/text/keywords`, `/api/text/diff`, `/api/text/chunk`, `/api/text/paraphrase`, `/api/text/transliterate`, `POST /api/translate/subtitles` (SRT/VTT with timings kept): $0.001-0.004.
- Reference: `/api/business-days`, `/api/date/calc`, `/api/units`, `/api/books`, `/api/food` (barcodes), `/api/airports`, `/api/tides`, `/api/places`: $0.001-0.002.
- Developer: `POST /api/hash`, `POST /api/encode`, `/api/jwt/decode`, `/api/uuid`, `/api/user-agent`, `/api/robots`, `/api/subdomains`, `/api/uptime`: $0.001-0.002.
- Business: `/api/vin`, `/api/eori` (UK), `/api/swift`, `/api/company/ticker`, `POST /api/invoice/extract`, `POST /api/resume/parse`, `/api/address/parse`: $0.001-0.005.

Prediction markets, multi-chain and compliance
- Polymarket: `/api/pm/search`, `/api/pm/event`, `/api/pm/orderbook`, `/api/pm/history`, `/api/pm/trades`, `/api/pm/wallet`, `/api/pm/activity`, `/api/pm/leaderboard`, `/api/pm/holders`, `/api/pm/resolved` ($0.003 each).
- Chain: `POST /api/rpc/evm` (22 EVM chains, read-only), `POST /api/rpc/solana` ($0.001), `/api/token/metadata`, `/api/token/search`, `POST /api/evm/simulate` (decoded reverts), `/api/crypto/address-risk` (OFAC-listed addresses), `/api/dex/pools`, `/api/defi/chains`.
- Compliance: `/api/screen/export-control` (US Consolidated Screening List), `/api/screen/debarment` (World Bank), `/api/enforcement/actions` (SEC, CFPB, FTC, DOJ), `/api/tariff/uk`, `/api/tariff/us`, `/api/law/ecfr`, `/api/law/federal-register`, `/api/company/fr`, `/api/company/br`, `/api/sec/13f`.
- Research: `/api/research/papers` (OpenAlex), `/api/hn/search`, `/api/github/search`, `/api/package/search`, `/api/web/archive`, `/api/domain/typosquat`, `/api/web/security-txt`, `/api/wiki/pageviews`, `/api/apps/search` ($0.002).
- AI text: `POST /api/text/outline`, `/api/text/headlines`, `/api/text/answer`, `/api/text/tone`, `/api/text/faq`, `/api/email/reply`, `/api/code/explain`, `/api/sql/generate`, `/api/regex/generate`, `/api/json/repair` ($0.001-0.003).

AI models: `POST /api/image`, `/api/tts`, `/api/transcribe`, `/api/embed`, `/api/chat`.

Code (MIT): https://github.com/bck-stack/sitecheck-x402

## Spend-aware usage

- Read a page with `/api/read` before paying for heavier tools; use `maxChars` to cap the answer.
- `/api/email-check` and `/api/iban` take up to 50 items per call: batch them.
- For Solana, call `/api/solana/trending` once and `/api/solana/token` only for the tokens you will act on.
- Call `/api/audit` once per URL and reuse the result; it already includes SEO, security headers and tech stack.
- Prices are listed per route in the 402 challenge and in `/openapi.json`; nothing is charged if the call fails.
