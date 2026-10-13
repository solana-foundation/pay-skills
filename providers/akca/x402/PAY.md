---
name: akca-x402
title: "Akca x402 Anonymous Proxy"
description: "Privacy-first HTTP proxy API on Solana. Pay-per-use anonymous web requests for API scraping, geo-restricted content, bot traffic, and AI agent operations. No accounts, no logs, pay with USDC."
use_case: "Use for anonymous HTTP requests, geo-restricted API access, web scraping, bot traffic routing, privacy-preserving research, AI agent web access, and bypassing IP-based rate limits without logging."
category: security
service_url: https://api.akca.network
sandbox_service_url: https://api.akca.network
version: v1
endpoints:
  - method: GET
    path: x402/proxy/servers
    description: "List available proxy exit nodes grouped by country and region"

  - method: POST
    path: x402/proxy/fetch
    description: "Proxy a single HTTP request through specified exit node country"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001

  - method: POST
    path: x402/proxy/session
    description: "Create 24h unlimited proxy session for repeated requests"
    pricing:
      dimensions:
        - direction: usage
          unit: sessions
          scale: 1
          tiers:
            - price_usd: 1.00
---

# Akca x402 Anonymous Proxy

Privacy-first HTTP proxy API on Solana. Pay-per-use with USDC. No accounts, no logs.

## Akca x402 Proxy

Anonymous HTTP proxy for single requests or 24h unlimited sessions.

**Pricing:**
- Single request: $0.001 USDC
- 24h session: $1.00 USDC (unlimited requests)

**Use cases:**
- API scraping without IP bans
- Geo-restricted content access
- Bot request routing
- AI agent web access
- Anonymous research

## Usage Notes

### Cost Optimization

**Single requests ($0.001 each):**
- Ad-hoc API calls
- Quick scraping tasks (< 1000 requests)
- Testing and development
- Low-volume use cases

**24h session ($1.00):**
- High-volume scraping (1000+ requests)
- Long-running tasks
- Continuous monitoring
- Production workloads

**Break-even point:** 1000 requests/day

### Proxy Usage

```javascript
// Free: Get available countries
GET /x402/proxy/servers

// $0.001 USDC: Single proxied request
POST /x402/proxy/fetch
{
  "url": "https://api.example.com/data",
  "method": "GET",
  "country": "US"
}

// $1.00 USDC: Create session for unlimited requests
POST /x402/proxy/session
{
  "country": "DE",
  "duration": "24h"
}
// Returns session cookie for future requests
```


## SDK Integration

### npm SDK
```bash
npm install @akcanetwork/x402
```

```javascript
import { AkcaX402Client } from '@akcanetwork/x402';
import { Keypair } from '@solana/web3.js';

const wallet = Keypair.fromSecretKey(/* your key */);
const akca = new AkcaX402Client({ wallet });

// Proxy: Auto-payment + retry
const res = await akca.fetch('https://api.example.com', {
  country: 'DE'
});

// Session: Create once, reuse for multiple requests
const session = await akca.createSession({ country: 'US' });
const res1 = await session.fetch('https://api.example.com/data1');
const res2 = await session.fetch('https://api.example.com/data2');
```

### MCP Server (AI Agents)
```bash
npx @akcanetwork/mcp-server
```

Gives Claude Code and other AI assistants:
- `akca_proxy_fetch` - Anonymous HTTP requests
- `akca_proxy_session` - Create unlimited session

## Spend-Aware Guidance

**Before calling paid endpoints:**
1. Check free `/servers` endpoint first to see available countries
2. For single/few requests: use `POST /x402/proxy/fetch`
3. For 1000+ requests: create proxy session instead ($1.00 flat rate)
4. Reuse session tokens across requests to avoid multiple payments

**Common patterns:**
- **Single API call:** proxy/fetch ($0.001)
- **10-100 requests:** proxy/fetch per request ($0.01-$0.10)
- **1000+ requests/day:** proxy/session ($1.00 flat)
- **Daily scraping:** proxy/session 24h ($1.00)
- **Continuous monitoring:** proxy/session ($1.00/day)

## Payment Protocol

Akca x402 uses standard HTTP 402 Payment Required:

1. Send request to any paid endpoint
2. Receive `402 Payment Required` with payment details
3. Send USDC on Solana to specified address
4. Retry with `X-PAYMENT: <tx_signature>` header
5. Receive `200 OK` + session cookie (if applicable)

**Supported currencies:** USDC, USDT (Solana mainnet)

**Session management:**
- Proxy sessions: 24h cookie-based auth
- Automatic timeout after 24 hours
- Reuse session tokens for cost efficiency

## Security & Privacy

- **No logs policy:** Target URLs, request bodies, and traffic content never logged
- **No accounts:** Payment verification via on-chain USDC transfers
- **Encrypted tunnels:** WireGuard protocol, AmneziaWG DPI bypass
- **Session isolation:** Each session gets isolated network path
- **Open source SDK:** Verify payment flows and crypto operations

## Network Compatibility

- **Blockchain:** Solana mainnet
- **Currencies:** USDC, USDT (SPL tokens)
- **RPC:** Compatible with standard Solana RPCs
- **Finality:** ~400ms transaction confirmation

## Error Handling

**402 Payment Required:**
- Check wallet has sufficient USDC balance
- Verify Solana RPC connectivity
- Ensure correct network (mainnet)

**Payment verification failed:**
- Wait for transaction finality (~400ms)
- Retry with correct `X-PAYMENT` header format
- Check transaction signature validity

**Session expired:**
- Create new session via `/proxy/session` or `/vpn/connect`
- Old session cookies/IDs become invalid after expiry

## Links

- **Homepage:** https://akca.network
- **x402 Docs:** https://akca.network/x402
- **npm SDK:** https://www.npmjs.com/package/@akcanetwork/x402
- **MCP Server:** https://www.npmjs.com/package/@akcanetwork/mcp-server
- **No-Logs Policy:** https://akca.network/legal/no-logs-policy
- **GitHub:** https://github.com/AkcaNetwork

## Support

- **Email:** contact@akca.network
- **Discord:** https://discord.gg/JzRwxqKVMG
- **Twitter/X:** https://x.com/akcanetwork
