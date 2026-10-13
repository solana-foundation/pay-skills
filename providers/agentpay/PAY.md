# AgentPay

## Overview

AgentPay is the settlement layer for the agentic economy. AI agents autonomously discover real-world services, negotiate terms, lock funds in smart-contract escrow, and release payment on delivery — zero human interaction required.

## Base URL

```
https://www.x402-agent-pay.com
```

## OpenAPI Spec

```
https://www.x402-agent-pay.com/openapi.json
```

## Supported Networks

| Network | Chain ID | Asset | Receive Address |
|---|---|---|---|
| Base (L2) | `eip155:8453` | USDC | `0x2a07182afDB346C84dFc5D116D84f34E1db4617d` |
| Polygon | `eip155:137` | USDC | `0x2a07182afDB346C84dFc5D116D84f34E1db4617d` |
| Solana | `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` | USDC (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`) | `6aCEuwH3PYx99cEmRz45otfxk39uF7ewGhqmvxfXisSG` |

## x402 Protocol

All starred endpoints return `HTTP 402` with a `payment-required` header containing a base64-encoded JSON payload listing accepted chains, amounts, and recipient addresses per the [x402 v2 spec](https://x402.org).

**Flow:**
1. Call any paid endpoint → receive `HTTP 402` + `payment-required` header
2. Decode the header → pick your preferred network
3. Send the exact USDC amount on-chain to the `payTo` address
4. Retry the request with `X-PAYMENT: <signed-payload>` header
5. Facilitator verifies on-chain → request proceeds

Facilitator: `https://facilitator.coinbase.com`

## Paid Endpoints

| Method | Path | Price | Description |
|---|---|---|---|
| `POST` | `/api/v1/search` ⭐ | $0.001 USDC | Search local service providers by type, location & budget |
| `POST` | `/api/v1/book` ⭐ | $0.002 USDC | Book a service appointment with escrow lock |
| `POST` | `/api/v1/pay` ⭐ | $0.001 USDC | Release escrowed funds on service completion |
| `POST` | `/api/v1/llm` ⭐ | $0.001 USDC | AI inference — Llama 3.3 70B, Mistral, Gemma, 80+ models |
| `POST` | `/api/v1/ai/search` ⭐ | $0.002 USDC | Natural language service search via NVIDIA NIM |

## Free Endpoints

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/v1/agents/register` | Register your AI agent (2 agents/wallet, 500 calls/day free) |
| `GET` | `/api/v1/agents` | Public directory of registered agents |
| `GET` | `/api/v1/osm-search` | Real business discovery via OpenStreetMap |
| `GET` | `/health` | Service health check |
| `GET` | `/openapi.json` | Full OpenAPI spec |

## Agent Registration

External agents can self-register without human approval:

```http
POST https://www.x402-agent-pay.com/api/v1/agents/register
Content-Type: application/json

{
  "agentId": "my-agent-v1",
  "name": "My Agent",
  "endpoint": "https://my-agent.example.com/api",
  "ownerWallet": "0xYourWalletAddress",
  "supportedChains": ["base", "solana", "polygon"]
}
```

Returns: `{ "apiKey": "ap_xxx...", "agent": { ... } }` — store the API key, shown once.

## Example: Search with x402 Payment (Python)

```python
import httpx, base64, json

# Step 1: Get 402 challenge
resp = httpx.post("https://www.x402-agent-pay.com/api/v1/search", json={
    "service": "plumber",
    "latitude": 36.0,
    "longitude": -112.0
})
assert resp.status_code == 402

challenge = json.loads(base64.b64decode(resp.headers["payment-required"] + "=="))
# challenge["accepts"] lists Base, Polygon, and Solana options

# Step 2: Pay on-chain (e.g., Base USDC) and get tx hash
# ... send 1000 USDC-wei to challenge["accepts"][0]["payTo"] on Base ...

# Step 3: Retry with payment proof
result = httpx.post("https://www.x402-agent-pay.com/api/v1/search",
    headers={"X-PAYMENT": "<signed-x402-payload>"},
    json={"service": "plumber", "latitude": 36.0, "longitude": -112.0}
)
providers = result.json()["results"]
```

## Discovery

```
https://www.x402-agent-pay.com/.well-known/x402.json
```

## Links

- Website: [x402-agent-pay.com](https://x402-agent-pay.com)
- GitHub: [github.com/shawnhvac/-x402-agent-network](https://github.com/shawnhvac/-x402-agent-network)
- Patent Pending: U.S. App. No. 64/049,095
