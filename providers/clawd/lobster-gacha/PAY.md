---
name: lobster-gacha
title: "Lobster Gacha by CLAWD"
description: "Provably fair Solana gacha API returning AI agent cards with SHA-256+blockhash commitments, CLAWD token prizes (100–50,000), and Metaplex Core NFT minting. Live Phoenix DEX perpetuals data included."
use_case: "Use for provably fair gacha pulls on Solana mainnet, winning CLAWD tokens or Metaplex NFTs, querying live Phoenix DEX perpetuals market data with TA indicators, or verifying gacha randomness via on-chain blockhash commitment."
category: other
service_url: https://gacha.solanaclawd.com
version: v1
openapi:
  path: openapi.json
---

Part of the **CLAWD ecosystem** — [solanaclawd.com](https://solanaclawd.com) · [cheshireterminal.ai](https://cheshireterminal.ai) · [x402.wtf](https://x402.wtf)

## `/api/pull` — Provably Fair Gacha

Execute 1× or 10× pulls backed by the current Solana blockhash. Each card is committed via `SHA-256(wallet:spinIndex:blockhash)` and verifiable client-side without trusting the server.

| Rarity | Rate | CLAWD Prize |
|--------|------|-------------|
| Common | 60% | 100 |
| Rare | 25% | 1,000 |
| Epic | 12% | 5,000 |
| Legendary | 3% | 50,000 |

The 10× pull has a pity system: the final card is always ≥ Rare. Winners receive a **Metaplex Core NFT**; legendary wins also trigger **Streamflow vesting**. Each pull burns 1,000 CLAWD from mint `8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump`.

Client-side verification (no server trust required):
```js
const hash = await crypto.subtle.digest('SHA-256',
  new TextEncoder().encode(`${wallet}:${spinIndex}:${blockhash}`));
const hex = [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
// assert hex === card.commitment
```

## `/api/perps` — Phoenix DEX Perpetuals Data

Live market data proxy for agent trading signals on [cheshireterminal.ai](https://cheshireterminal.ai). Returns ticker prices, funding rates, OHLCV candles, and TA indicators (RSI, MACD, Bollinger Bands) for SOL, BTC, and ETH Phoenix markets.

```
GET /api/perps?cmd=market/ticker/SOL
GET /api/perps?cmd=market/funding-rates/SOL&limit=10
GET /api/perps?cmd=market/candles/SOL&interval=1h&with_indicators=rsi,macd
GET /api/perps?cmd=ta/report/SOL&timeframe=1h
```

## Spend-aware usage

- Use a 1× pull ($0.0025 USDC) for single results; 10× for pity-guaranteed rare+ cards.
- `market/ticker/SOL` is the cheapest perps call — use it for a price snapshot before requesting OHLCV candles.
- Phoenix data updates each block; cache responses for 30–60 seconds to avoid redundant calls.
- The `ta/report` endpoint bundles RSI/MACD/BBands with a long/short signal — prefer it over chaining indicator calls.

## Source & ecosystem

- Source: [github.com/x402agent/solana-clawd](https://github.com/x402agent/solana-clawd)
- CLAWD token: `8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump` (Solana mainnet)
- Terminal: [cheshireterminal.ai](https://cheshireterminal.ai)
- x402 gateway: [x402.wtf](https://x402.wtf)
- Ecosystem: [solanaclawd.com](https://solanaclawd.com)
