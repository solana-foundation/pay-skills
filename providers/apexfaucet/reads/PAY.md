---
name: reads
title: "APEX Faucet"
description: "Paid tools for Solana agents. An unsigned transaction check, a token exit check, a web page as Markdown, a plain web read, a page extract, a delivery score, an EVM token read, an NFT read, a cell sample, and a chat completion. Each unpaid call returns HTTP 402 for USDC on Solana."
use_case: "Use when an agent on Solana needs to check an unsigned transaction, see if a token can be sold, read a public page, score a paid URL, or take one chat completion, and can pay USDC on Solana."
category: data
service_url: https://apexfaucet.xyz
openapi:
  path: openapi.json
---

APEX Faucet sells tools to agents. An unpaid call to a listed route returns
HTTP 402 with an x402 challenge for USDC on Solana. A paid call returns the
result. The same spec is live at https://apexfaucet.xyz/pay/PAY.md. The agent
skill is https://apexfaucet.xyz/skill.md.

Pay with the pay CLI:

    npx @solana/pay curl 'https://apexfaucet.xyz/api/x402/page-markdown?url=https://example.com'

## What to call

- Unsigned transaction check, $0.001. `GET /api/x402/tx-check` with `chain=solana`, `signer`, and `tx`. Returns SAFE or RISKY. Nothing is signed or broadcast.
- Token exit check, $0.004. `GET /api/x402/exit-check/{mint}`. Largest size under 5% slippage, quote-side depth, and a slippage ladder. It does not buy or sell.
- Page markdown, $0.002. `GET /api/x402/page-markdown?url=` renders one public page.
- Web read, $0.003. `GET /api/x402/web-read?url=` is a plain fetch, not a browser.
- Page extract, $0.009. `GET /api/x402/page-extract?url=` returns title, headings, text, and links.
- Delivery score, $0.003. `GET /api/x402/delivery-score?url=` scores a paid URL. It does not pay that URL.
- EVM token info, $0.001. NFT info, $0.001. Bloodstream cells, $0.001. Chat completions, $0.002 as a POST.

A call that leaves out a required query gets the 402 with a hint naming it.
With a payment attached, a bad value is HTTP 400 and nothing is charged.

## Spend-aware usage

- Use one listed route per question.
- Use the example query only when the user named no page, token, transaction, or NFT.
- Chat completions is a POST with an OpenAI-style JSON body (`messages`, optional `model` and `max_tokens`), documented in the OpenAPI file.
- Do not poll a route.
- tx-check does not sign or send. exit-check does not trade.
