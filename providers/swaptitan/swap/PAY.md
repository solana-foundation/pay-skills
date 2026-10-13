---
name: swap
title: SwapTitan Cross-Chain Swap API
description: Non-custodial cross-chain crypto swap API supporting 1288 assets across Bitcoin, Ethereum, Solana, Monero and major networks with automatic best-rate routing
use_case: Swap or quote cryptocurrency between any two assets without KYC, wallet connection or account creation; get real-time exchange rates, create wallets, check portfolios, verify token safety and track swap completion status
category: finance
service_url: https://swaptitan.net
openapi:
  path: openapi.json
---

## Overview

SwapTitan provides instant non-custodial cross-chain swaps across 1288+ cryptocurrencies. No account, no KYC, no wallet required — the user only needs a destination address.

Available at:
- **https://swaptitan.net** — primary endpoint
- **https://terafabpay.de** — EU-optimized mirror (same API)

API base URL: `https://api.swaptitan.net` (also: `https://api.terafabpay.de`)

## Agent Discovery (Google A2A / MCP)

SwapTitan is fully A2A-compatible and auto-discoverable:

| Standard | Endpoint |
|----------|----------|
| **Google A2A Agent Card** | `https://swaptitan.net/.well-known/agent.json` |
| **MCP Server** (JSON-RPC 2.0) | `https://swaptitan.net/mcp` |
| **AID DNS** | `_agent.swaptitan.net` TXT record |

The Agent Card lists all 10 skills, authentication options (none / x402 / apiKey), and MCP endpoint — a compliant A2A agent can discover and invoke SwapTitan with zero manual configuration.

## MCP Tools (10)

| Tool | Description |
|------|-------------|
| `get_prices` | Real-time BTC, SOL, ETH, XMR prices |
| `get_assets` | Full list of 1288+ supported assets |
| `swap_quote` | Exchange rate + estimated output |
| `swap_create` | Create swap order → deposit address |
| `swap_status` | Poll swap status until done |
| `create_wallet` | Generate SOL/ETH/Base/BSC wallet |
| `check_portfolio` | Wallet balance + USD value on any chain |
| `rug_check` | Token safety score + risk flags |
| `set_price_alert` | Telegram alert when price hits target |
| `ai_chat` | Natural language crypto assistant |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/prices` | Real-time prices for BTC, SOL, ETH, XMR |
| GET | `/v1/assets` | Full list of 1288 supported assets |
| GET | `/v1/swap/quote` | Exchange rate + estimated output for any pair |
| POST | `/v1/swap/create` | Create swap order → returns deposit address |
| GET | `/v1/swap/status` | Poll swap status until done |

## Authentication & Payment

Free-tier access: **no authentication required** (rate-limited per IP).

Premium API keys available at:
- Credit card / USDC via [swaptitan.net/pricing](https://swaptitan.net/pricing)
- **Bitcoin via BTCPay Server** at [pay.swaptitan.net](https://pay.swaptitan.net)

## Typical Agent Flow

1. Call `/v1/swap/quote` — confirm rate and validate `amount >= minAmount`
2. Call `/v1/swap/create` — forward `provider` from the quote response; also forward any `fromNet` and `toNet` parameters you sent in the quote request (these do not appear in the response); provide destination address → receive `orderId`, `payinAddress`, `estimatedAmount`, and `provider`
3. Return `payinAddress` to user so they can send source funds
4. Poll `/v1/swap/status?id=<orderId>&provider=...` — **always forward `provider` from create response** — exit loop on `status === "done"`, `"failed"`, or `"unknown"` (unknown = wrong provider forwarded)

```mermaid
sequenceDiagram
    participant Agent
    participant SwapTitan as SwapTitan API
    participant User

    Agent->>SwapTitan: GET /v1/swap/quote?from=btc&to=sol&amount=0.01
    SwapTitan-->>Agent: {estimatedAmount, minAmount, provider}

    Agent->>Agent: Validate amount >= minAmount

    Agent->>SwapTitan: POST /v1/swap/create {from, to, amount, address, refundAddress, provider, fromNet?, toNet?} (provider from response; fromNet/toNet from request params if used)
    SwapTitan-->>Agent: {orderId, payinAddress, estimatedAmount, provider, trackUrl}

    Agent->>User: Return payinAddress (user sends funds here)

    loop Poll every 20-30s
        Agent->>SwapTitan: GET /v1/swap/status?id=orderId&provider=... (must forward provider)
        SwapTitan-->>Agent: {status: waiting|confirming|exchanging|done|failed|unknown}
        alt status == done
            Agent->>User: Swap complete (payoutHash)
        else status == failed
            Agent->>User: Swap failed, refund pending to refundAddress
        else status == unknown
            Agent->>User: Error - wrong provider forwarded, check orderId
        end
    end
```

## Fully Autonomous Agent Flow (via MCP)

An agent using the MCP server can execute a complete swap with minimal user input:

```
1. Ask user for destination address (or use calling agent's own key material)
   → address  (non-custodial: private key never leaves the user/agent)
2. swap_quote(from, to, amount)       → {estimatedAmount, minAmount, provider}
   → Validate: amount >= minAmount (abort and inform user if not)
3. swap_create(…, address, provider)  → {payinAddress, orderId}
4. → Prompt user: "Send X to payinAddress, receive Y at {address}"
5. swap_status(orderId, provider)     → poll every 20-30s;
                                         exit on done, failed, or unknown
```

> **Note:** Do not use `create_wallet` as the swap destination in production — the server generates and transmits the private key, which contradicts the non-custodial model. Use a wallet address provided by the user or generated locally by the calling agent.

## Supported Networks

Bitcoin, Ethereum, Solana, Monero, Base, Arbitrum, BSC, Tron, Polygon, Avalanche and 40+ more.

Multi-network assets use ticker suffixes: `usdtsol`, `usdttrc20`, `usdceth`, `usdcsol`, `etharb`, `ethbase`.

## Spend-Aware Best Practices

- Always call `/v1/swap/quote` before `/v1/swap/create` — never create without confirming the rate
- Validate input amount against `minAmount` from quote response before creating
- Set a `refundAddress` on create — required for safe recovery if swap fails
- Poll status at 20–30s intervals — most swaps complete within 5–20 minutes
- Cache `/v1/assets` per session — the asset list updates rarely
- Prefer `usdcsol` or `usdtsol` tickers for Solana-native stablecoin swaps
