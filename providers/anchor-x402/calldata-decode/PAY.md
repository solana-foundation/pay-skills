---
name: calldata-decode
title: "anchor-x402: calldata decoder"
description: "Decode raw EVM calldata into a human-readable function name, canonical signature, and typed parameter values. Resolves the 4-byte selector against openchain.xyz's signature directory, then ABI-decodes the args. Returns ambiguity candidates when a selector collides — for $0.001 USDC per call."
use_case: "Use when an agent needs to inspect a transaction before signing, render a human-readable confirmation prompt, audit historical calldata, classify mempool activity, debug failed reverts, or label any unknown 4-byte selector pulled from on-chain data."
category: devtools
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`POST /v1/decode/calldata` — pay $0.001 USDC, supply
`{ "chain": "ethereum", "calldata_hex": "0xa9059cbb..." }`, get back the
decoded function call. The server:

1. Peels the first 4 bytes (the function selector) off the calldata.
2. Looks the selector up against openchain.xyz's free 4byte signature
   directory.
3. Uses `eth_abi` to decode the remaining bytes against the matched
   signature's parameter types.
4. Returns `function_selector`, `function_name`, `function_signature`,
   `params` (typed list), `decoded` (bool), `candidates` (other matching
   sigs when ambiguous), and `source`.

If no signature matches the selector (rare new contract, custom ABI),
the response carries `decoded: false` and the raw selector — so the
caller can still display a "0x<selector>" placeholder rather than
silently failing. The optional `contract_address` field is accepted
but currently unused (reserved for future on-chain ABI lookups).

This service is **EVM-only**. Calling with `chain: "solana"` returns
HTTP 400.

## Spend-aware usage

- Selectors are immutable — `keccak256(canonical_sig)[:4]` never
  remaps. Cache the decoded signature client-side keyed by selector
  forever. The server already does this in-memory per Lambda
  container; the price you pay is for the openchain.xyz fetch on
  cold start.
- When the response carries multiple `candidates`, the chosen
  signature is openchain's canonical first. If your context tells
  you the call is e.g. an ERC-20 method, treat the candidates list
  as a sanity check rather than a coin flip.
- For pre-sign confirmation UX (the "are you sure?" prompt before an
  agent signs a tx), one paid call per unique selector per session is
  plenty — cache decoded sigs for the lifetime of the session.
- Re-decoding the same calldata is free locally once you've cached
  the selector → signature mapping. The `params` decode is pure
  ABI work — no network needed.
- `decoded: false` + a non-empty `candidates` list means the selector
  matched but the args didn't ABI-decode cleanly against any
  candidate types. Usually means truncated or corrupted calldata.
