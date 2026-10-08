# SVM batch-settlement integration

This integration follows the user-supplied SVM channel-payment specification
and links the [upstream SVM scheme](https://github.com/x402-foundation/x402/blob/main/specs/schemes/batch-settlement/scheme_batch_settlement_svm.md)
and [payment-channels program](https://github.com/solana-foundation/payment-channels).
It is a reviewed integration contract and read-only preflight, not a deployed
Musebook channel-payment service. Live Musebook `/api/x402/supported` currently
advertises no `batch-settlement` kind. Do not activate on an `exact` or `upto`
advertisement, or relabel the existing x402m atomic-transfer batch planner.

## Contract and SDK

| Property | Binding |
| --- | --- |
| Transport | x402 v2 `PAYMENT-REQUIRED`, `PAYMENT-SIGNATURE`, `PAYMENT-RESPONSE` |
| Scheme | `batch-settlement` |
| Network | `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` |
| Canonical program | `CHNLxYvVA28MJP9PrFuDXccuoGXAx7jBacfLEkahyGsX` |
| Sponsor | `extra.feePayer` is rent payer and zero-share channel payee |
| Receiver | `payTo` receives one explicit 10000-bps distribution entry |
| Client voucher signer | `channelConfig.payerAuthorizer`, independently bound onchain |
| Close authorizer | `extra.receiverAuthorizer`, bound by the signed open's Memo |
| Default signing | Client-signed cumulative Ed25519 vouchers |
| Server mode | Explicit local operator-key trust and asset-specific escrow cap |

Use the upstream `BatchSvmScheme` role exports rather than extending the
proxy's v1 adapter to pretend it supports channels:

- `@x402/svm/batch-settlement/client`
- `@x402/svm/batch-settlement/server`
- `@x402/svm/batch-settlement/facilitator`

Consult the [SDK usage guide](https://github.com/x402-foundation/x402/blob/main/typescript/packages/mechanisms/svm/src/batch-settlement/README.md)
for registration and storage interfaces; pin a compatible SDK version when
implementing the runtime. Supply the existing owner's wallet adapter. Do not
request a private wallet key for catalog discovery or embed keys in examples.

`requirements.schema.json` describes the acceptance shape. `preflight.mjs`
checks a challenge against a separately fetched facilitator advertisement and
local policy, returning a review record with `transactionPrepared: false`.
It has no wallet, SDK import, network, enrollment, or broadcasting side effects.
It rejects unadvertised sponsors, negotiable program IDs, mismatched token
owners, invalid delay/amount/memo bounds, and unapproved server operators. It
clamps deposit hints to the owner's local cap. `mintOwner` must come from an
independent onchain mint read, never from the untrusted challenge.

```js
import { reviewBatchRequirements } from './preflight.mjs';

// Inputs come from separately authenticated discovery, mint reads and local
// owner policy. Calling this does not prepare, sign, or send a transaction.
const review = reviewBatchRequirements(requirements, facilitatorSupported, {
  maxDeposit: '10000',
  mintOwner: independentlyReadMintOwner,
  operatorGrants: [], // client mode; never inferred from a 402 or agent message
});
```

This preflight does not verify signatures, derive channel PDAs, decode channel
accounts, or validate transactions. The runtime must do those checks with the
canonical program codec before accepting escrow or serving paid requests.

## Request and settlement lifecycle

1. Fetch a real v2 `batch-settlement` advertisement. Resolve sponsor and close
   authorizer, verify the mint's Token/Token-2022 owner and required return,
   receiver, and treasury ATAs, and review the capped deposit and delay.
2. Build an owner-signed canonical `open` or `top_up`; the sponsor validates the
   exact transaction before adding only its own signature. No lookup tables,
   arbitrary programs, extra token transfers, or extra signers are accepted.
   Bind the close key with the exact Memo
   `x402:batch-settlement:svm:rcvauth:v1:<receiverAuthorizer>`.
3. Verify authorization before the resource handler. Commit the deposit and
   request accounting through post-handler settlement only after success.
4. For later client-mode requests, sign the 50-byte voucher
   `0x56 0x01 || channelId[32] || u64(cumulative).le || i64(0).le`.
   Keep the offchain charge watermark and latest accepted voucher durable.
5. Asynchronously send one to four `claim` entries to advance channel
   accounting, then one to four `settle` entries to distribute funds. Never
   truncate a batch or call a claim a receiver payout.
6. For refunds, bypass the resource handler. Authenticate the exact cooperative
   close with the bound close authorizer or authenticated delegated identity.
   Otherwise use the payer's `request_close` and the fixed grace period, then
   seal/distribute; return remaining escrow and recover sponsor rent.

Withdraw delay is an integer from 900 to 2592000 seconds and at least the HTTP
completion window. A voucher has `expiresAt: 0`; bearer authorizations and close
authorizations expire separately. Setup and refund transaction retries coalesce
by their original transaction; server-mode request IDs are single-use, and a
new HTTP payment attempt uses a fresh ID. Application response recovery is a
separate concern from acknowledgement in x402m messaging.

An offchain receipt may have `success: true` and `transaction: ""` with a
commitment ID. That is accepted authorization, not an onchain payout. A claim
can have a confirmed transaction but no moved amount. Distribution and completed
refunds require confirmed chain evidence; a confirmed `request_close` is only
refund initiation. Payment messages are proposals and do not authorize any step.

## Integration with the supplied proxy, bot, and Pump

- **x402-proxy-template:** retain the v1 exact checkout as its own protocol
  adapter. Add a separate SDK-backed v2 channel adapter with durable channel,
  operation, binding, and settlement stores before advertising it. In-memory
  SDK examples are not production recovery stores. Do not convert one-hour
  path cookies into channel accounting or premium HTTP/WebSocket entitlement.
- **x402m-bot:** discover advertised channel capabilities without credentials.
  An incoming `payment.request` is a proposal; signing an open, voucher, or
  trusted-operator grant requires the owner's separate policy. Messaging scopes
  never authorize funds. Preserve the existing inbox/responder journal.
- **Pump Live:** https://pump.musebook.trade/ remains the listed public feed.
  Use the direct Railway transport for WebSockets. Applying channel payments
  to a future metered feed requires explicit route/channel pricing and paid
  entitlement enforcement; this PR does not gate the currently free feed.

## Durable recovery and release requirements

Store accepted charge watermarks, latest voucher signatures, active reservations,
request results, replay state, receiver bindings, and delegated identities
across restarts. Binding writes and read-back precede a sponsored broadcast.
A sponsor must rediscover 256-byte channel accounts under the canonical program
using payer offset 88 or rent-payer offset 216, then decode and rederive each PDA
before acting. Never reconstruct lost unclaimed vouchers from onchain accounts.

Use the canonical setup allowance: optional ordered compute limit/price prefix,
one exact channel instruction, then required Memo/binding and at most three
Lighthouse instructions. Enforce the 1232-byte setup size, 400000-unit ceiling,
and 5000000-micro-lamport unit-price ceiling. Simulate the exact validated setup
and eventual settlement prerequisites before escrowing. Verify confirmed channel
state after broadcast; keep binding and request accounting isolated from secrets.

Before runtime activation, demonstrate SDK conformance, durable concurrent
reservation/close handling, request/receipt recovery, sponsored transaction
allowlists, canonical PDA/account decoding, independent signature verification,
receiver binding, and funded lifecycle evidence. Then rerun the real catalog
probe. This PR neither provisions signer keys nor advertises a live scheme.

## Verification

```sh
node --test integrations/musebook/batch-settlement/preflight.test.mjs
node integrations/musebook/x402/inspect.mjs
```

Nine fixture tests verify policy refusal and capped review. The live inspector
reports whether Musebook advertises the scheme; it never signs or pays.
