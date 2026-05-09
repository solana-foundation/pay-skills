---
name: tx-decode
title: "anchor-x402: tx decoder"
description: "Structured decode of any mainnet tx by hash. Supply {chain, tx_hash} for base | ethereum | solana, get back from/to, value, gas, status, calldata (EVM) or slot, fee, signers, program_calls (Solana). Mined txs cached in-process. $0.001 USDC per call."
use_case: "Use when an agent needs to verify or summarize a payment, audit a contract interaction, build a tx feed, attach a transaction summary to a receipt, or normalize cross-chain tx data without running its own RPC infra."
category: devtools
service_url: https://1c09pdnrx1.execute-api.us-east-1.amazonaws.com
openapi:
  url: https://1c09pdnrx1.execute-api.us-east-1.amazonaws.com/openapi.json
---

`POST /v1/decode/tx` — pay $0.001 USDC, get a normalized decode of any
mainnet transaction. Submit `{ "chain": "base" | "ethereum" | "solana",
"tx_hash": "..." }`.

For EVM chains the response carries `block_number`, `timestamp`,
`from_address`, `to_address`, `value_wei`, `value_eth` (decimal string,
no scientific notation), `gas_used`, `status` (1 ok / 0 reverted),
`input_calldata_hex`, and `native_currency`. For Solana you get `slot`,
`block_time`, `fee_lamports`, `status` (`success` / `failed`),
`signers[]`, and `program_calls[]` parsed via the `jsonParsed` encoding.

Each decode hits the appropriate public RPC (`mainnet.base.org`,
`ethereum.publicnode.com`, `api.mainnet-beta.solana.com`). The endpoint
is read-only — no wallet, no signing, no on-chain writes.

## Spend-aware usage

- **Cache liberally.** Mined transactions are immutable, so the response
  for a given `(chain, tx_hash)` never changes. The service caches in
  the warm Lambda for free; you should also cache client-side
  indefinitely. There is zero benefit to re-paying for the same hash.
- **Don't poll for pending txs.** Pending / not-yet-mined transactions
  return an error and are *not* cached. Polling burns USDC; instead, wait
  ~12s on Base, ~30s on Solana finality, ~60s on Ethereum, then call once.
- **Batch by submission, not by request.** The endpoint takes one tx per
  call. If you need many, fan out client-side — the per-call cost is
  already an order of magnitude below the anchor or attest endpoints.
- **EVM hash format is forgiving.** Both `0x`-prefixed and bare 64-hex
  are accepted; the response always echoes the canonical lowercase
  `0x`-prefixed form, so use that as your cache key.
- **Pair with `/v1/screen`.** Decode a tx to learn its counterparty, then
  screen the `to_address` for sanctions in a second $0.001 call.
