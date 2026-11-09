---
name: data
title: "Vextorium"
description: "200+ pay-per-call data APIs: official statistics and rates (ECB, Fed, Eurostat, World Bank), SEC filings, crypto prices, sanctions and IBAN/VAT/LEI checks, EU and Spanish public data, web and developer tools."
use_case: "Use for macro and interest-rate data, US company filings, crypto prices, sanctions and KYB checks (OFAC, EU, VAT, LEI), EU and Spanish public records, weather, science lookups, and web or data utilities."
category: data
service_url: https://api.vextorium.com
version: v1
openapi:
  path: openapi.json
---

Vextorium serves 200+ focused data endpoints for agents under `/v1/`: official statistics and interest rates (ECB, Fed, Eurostat, World Bank, BOE, INE), US company data from the SEC, crypto prices, compliance checks (sanctions, VAT, IBAN, LEI), EU and Spanish public data, science, weather, web, data and developer tools. Every endpoint is `POST` with a JSON body and returns JSON. Payment is per call over x402 (from $0.001), in USDC on Solana, Base, Polygon, Optimism, Arc or Stellar, or RLUSD or XRP on the XRP Ledger.

Requests that fail (invalid input, not found, upstream source down) return 4xx/5xx and are not charged. A human-readable catalog is at https://api.vextorium.com/, a machine-readable one at https://api.vextorium.com/catalog.json, and a remote MCP server at https://api.vextorium.com/mcp.

## Spend-aware usage

- Use the narrowest endpoint: `/v1/fed-rates` or `/v1/ecb-interest-rates` for one central bank, `/v1/g7-policy-rates` only when you need the comparison.
- Batch where available: `/v1/crypto-price` prices up to 50 tickers per call.
- Due diligence on a wallet or counterparty: `/v1/wallet-sanctions-check` by address, `/v1/sanctions-screening` by name, then `/v1/lei-search`, `/v1/eu-vat-vies` and `/v1/iban-validate` for companies.
- Macro: start with `/v1/economic-calendar`, then call only the series you need, such as `/v1/us-cpi` or `/v1/us-treasury-yield-curve`.
- Send only the fields you need; each operation in `openapi.json` includes a request example.

The HTTP catalog currently contains 244 routes. MCP provides 242 paid services through `call_service`; `/v1/ping` and `/v1/my-ip` are HTTP-only. The three free MCP tools are `current_date`, `search_services` and `service_details`. Use a buyer client that supports the selected network; the Vextorium Python client currently pays on Base.
