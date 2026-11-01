---
name: subscriptions
title: "Musebook Subscriptions"
description: "Musebook subscription and API-credit charges settled through the musebook token-backed credit provider: customers deposit original SPL tokens into a vault, receive credits, and co-sign a capped authorization that funds Musebook charges through V2 payment channels with lifecycle hooks."
use_case: "Use for understanding how Musebook, as merchant, will accept subscription and API-credit payments backed by customer token deposits once the musebook credit provider is accepted in pay-kit; covers merchant configuration, client behavior, and operator duties."
category: finance
service_url: https://musebook.trade
version: v1
openapi:
  path: openapi.json
---

**Status: under review — not available.** The `musebook` credit provider is
submitted for review in pay-kit and is unavailable until the maintainers
accept that exact implementation and configuration. In pay-kit,
`validate_credit_providers` returns `Unavailable` for `musebook` on every
network, for every currency and every payment intent, and the merchant
default is an empty provider list (stablecoin-only). Nothing in this entry
is a live payment surface today: no deposits, credits, or subscription
charges move through this provider yet.

Musebook Subscriptions is the merchant configuration for Musebook's
subscription and API-credit charges, settled through the `musebook`
token-backed credit provider (implementation under review:
`themusebook/musebook-credit-provider`, adapted from the
`solana-foundation/payment-channels` credit-provider example).

How it works, once accepted:

- **Deposit before credit** — a customer deposits original SPL tokens
  (USDC first) into the vault ATA of their per-(owner, mint) ledger. The
  program transfers actual tokens into the vault before increasing
  credits; the invariant is `vault.amount >= ledger.credits`. Donations
  to the vault are not credits, and there is no administrative
  credit-minting instruction.
- **Co-signed authorization** — the customer (owner) and the issuer both
  sign every authorization. It binds the approved payee (Musebook), the
  exact voucher signer, the approved distribution hash, a total funding
  cap that covers every top-up (not just outstanding principal), a
  monotonically increasing nonce, and a funding-expiry slot. There is at
  most one active authorization per customer and mint; an owner signature
  alone cannot authorize an arbitrary merchant, distribution, or
  replacement voucher signer.
- **Charges through hooked channels** — charges fund through V2 payment
  channels opened with hooks (`openWithHooks` family). The `preFund`
  callback debits credits and moves backing from the vault into the payer
  account before the channel takes its deposit; the hook configuration is
  derived from the stored authorization, never from customer-supplied
  hook JSON, so the funding hook cannot be kept while disabling or
  replacing the refund hook.
- **Refunds restore credits only on actual recovery** — the
  `postDistribute` callback pulls the actual refunded tokens back into
  the vault before restoring credits. A zero refund restores zero
  credits. A successful callback still fails the transaction if it would
  change channel state or escrow, so the customer cannot retain spendable
  refund tokens and duplicate credits.

Merchant configuration (pay-kit):

- Merchants select the provider by name only:
  `credit_providers: ["musebook"]`. A name selects the reviewed
  configuration; it never authorizes an arbitrary program, hook
  configuration, or issuer credential.
- Until acceptance, startup validation fails closed: a merchant config
  naming `musebook` is rejected with the provider-unavailable error
  rather than silently dropped, and the empty default remains
  stablecoin-only.
- Sponsorship: none. The customer is their own fee payer for channel
  funding transactions; no fee sponsorship is claimed in this scope.

Client and operator behavior:

- Clients prepare transactions with the provider program's own builders
  and the repository's V2 channel and voucher builders; the program ID is
  supplied explicitly. Approval, authorization, and channel open should
  be combined in one transaction so a failed open also rolls back the
  authorization.
- Refund recovery relies on a bounded SPL Token delegation from the
  customer's payer ATA to the ledger PDA, for exactly the authorization
  cap. The customer can revoke or reduce that delegation at any time;
  funding then fails, and a nonzero-refund distribution fails atomically
  rather than issuing unbacked credits. A zero-refund terminal
  distribution does not require delegation.
- Operators verify payments independently of the provider's own
  reporting: a charge counts as paid only when the channel's on-chain
  state shows the distribution to the authorized payee under the stored
  authorization (payee, voucher signer, distribution hash, cap, nonce).
- The issuer inspects the distribution preimage and approves recipients
  under its own policy before co-signing. The issuer is pinned at ledger
  creation; rotating the program upgrade authority does not change
  existing ledger issuers.
- Cancellation of an unfunded authorization requires both owner and
  issuer signatures and preserves the consumed nonce and the credits.
  The example has no credit-redemption, ledger-closing, or
  issuer-key-rotation flow.

Supported scope under review:

- Networks: local Surfpool evidence only at submission time. Devnet and
  mainnet are **not** claimed; no program is deployed on either.
- Tokens: original SPL Token only. No Token-2022 extensions, no native
  wrapped SOL.
- Charges and sessions: capped, authorization-bound channel funding for
  subscription and API-credit charges; per-charge vouchers are signed by
  the exact voucher signer named in the authorization.

Companion submissions (links TBD — the PRs are filed as companions and
cross-linked on opening):

- pay-kit draft PR: registers the `musebook` provider name
  (unavailable-by-default) with the scope, custody evidence, and test
  evidence for this provider. Link: TBD.
- This pay-skills entry is the companion merchant-configuration PR.

## Spend-aware usage

- Do not configure `credit_providers: ["musebook"]` in production until
  the pay-kit review accepts the provider; validation fails closed until
  then.
- Verify a settled charge on-chain against the stored authorization
  before delivering subscription time or API credits.
- Keep the refund delegation at exactly the signed cap — no larger — and
  re-approve only up to the cap after a revocation.
