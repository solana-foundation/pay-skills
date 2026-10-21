---
name: api
title: "YRUZ"
description: "Fast pay-per-call x402 API, USDC on Solana or Base: live crypto prices, Solana token rug checks, wallet portfolios, tx decoding, web page to Markdown, domain intel, link checks, x402 validation and 110+ utilities."
use_case: "Use to read web pages as Markdown, unfurl links, vet domains (DNS, SPF, DMARC, RDAP, TLS), find broken links, validate x402 endpoints, check uptime or wallet USDC balances; also YRUZ community data, hashes, encoding, DNS and unit conversions."
category: devtools
service_url: https://yruz.one
openapi:
  path: openapi.json
---

YRUZ sells small, fast endpoints per call over x402 v1 and v2
(scheme `exact`, USDC on Solana mainnet or on Base, facilitators OpenFacilitator, PayAI
and Dexter). No account, key or sign-up: call the endpoint, receive
HTTP 402 with a `PAYMENT-REQUIRED` header, pay the quoted amount and resend
the identical request with `PAYMENT-SIGNATURE` (v2) or `X-PAYMENT` (v1).

- **Social data** (`/api/search`, `/api/posts`, `/api/post`, `/api/profile`,
  `/api/profile/posts`, `/api/article`, `/api`, `/api/forums`, `/api/thread`,
  `/api/questions`, `/api/question`, `/api/pages`, `/api/page`): public content
  of the YRUZ social network only. Items cost 0.002 USDC; lists cost
  0.002 + 0.0005 per item (max 0.02), so the price follows `limit`.
- **Utilities** (`/api/util/<tool>`, 18 tools): time, uuid, random, password,
  ip, hash, hmac, base64, urlencode, slug, wordcount, case, json, jwt-decode,
  html2md, color, email, dns. 0.002 USDC.
- **Toolkit** (`/api/toolkit/<slug>`, 94 tools, same slugs as the pages on
  https://yruz.one/toolkit) plus every unit, time and color conversion at
  `/api/toolkit/convert?from=&to=&value=`. 0.002 USDC, network checks included.
  Network tools reach public hosts only.

- **Products**: `/api/audit?url=` scores a website on TLS, security headers,
  HTTP/2-3, compression, SEO and AI-agent readiness with every fix listed
  (0.01 USDC); `/api/trending?period=24h|7d|30d&topic=` returns what is moving
  on YRUZ (posts, hashtags, articles, threads, questions; 0.005 USDC).
- **Crypto tools** (market data cached at most 60 s; free catalogue
  `GET /api/crypto`): `/api/crypto/price?ids=btc,eth,sol` live prices of up to
  25 coins or Solana mints (0.002); `/api/crypto/trending` trending coins, top
  gainers and losers, Solana trending (0.003); `/api/crypto/token?mint=` Solana
  token rug-pull check with a 0-100 risk score (0.005);
  `/api/crypto/portfolio?address=` Solana wallet holdings in USD (0.005);
  `/api/crypto/tx?signature=` a Solana transaction in plain words (0.003);
  `/api/crypto/fees` Solana priority fees and Base gas in USD (0.002).
- **Agent tools**: `/api/extract?url=` any web page as clean Markdown with
  title, author, dates, headings, links and images (0.005); `/api/unfurl?url=`
  link preview card (Open Graph, Twitter card, favicon, oEmbed; 0.003);
  `/api/domain?domain=` DNS, SPF, DMARC, MTA-STS, DKIM, RDAP registration and
  TLS, scored with fixes (0.01); `/api/links?url=` broken-link check of up to 50
  links (0.01); `/api/x402-check?url=` validates any x402 endpoint, v1 and v2
  (0.005); `/api/uptime?url=&keyword=` status, DNS/connect/TLS/TTFB timings and
  certificate days left (0.003); `/api/wallet?address=` USDC and gas balance of
  a Solana or Base address and whether it can pay (0.002).

Every operation accepts GET with query parameters or POST with a JSON body.
All parameters are optional: a tool without input runs on its documented
example, a list returns the newest items. Free catalogues with every tool,
parameter and price: `GET /api/util` and `GET /api/toolkit`.

## Spend-aware usage

- Read the free catalogues (`/api/util`, `/api/toolkit`) once instead of
  probing tools to learn their parameters.
- The payment is bound to the exact input. Change nothing between the 402
  and the paid retry, or the quote no longer matches.
- Use `/api/search` first for questions about YRUZ; it ranks glossary, Q&A
  and articles in one call instead of several list reads.
- Run `/api/crypto/token` before swapping into an unknown Solana token; it
  flags mint/freeze authority, holder concentration and thin liquidity.
- Batch assets in one `/api/crypto/price` call (up to 25) instead of one call
  per coin.
- Use `/api/wallet` with `amount=` before a large batch of paid calls to
  confirm the paying wallet holds enough USDC; facilitators pay the gas.
- Prefer `/api/extract` over fetching and cleaning HTML yourself; one call
  returns the readable text and its metadata.
- Keep `limit` small on list endpoints; the price grows by 0.0005 per item.
- Use `/api/toolkit/convert` for any conversion instead of individual
  converter slugs; it covers all 1,700+ pairs at one price.
