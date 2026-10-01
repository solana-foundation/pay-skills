---
name: mizuki
title: "Mizuki the Mech - fixed-price GitHub maintenance"
description: "Fixed-price maintenance on public GitHub repositories, paid per job in Solana USDC. Returns a validated pull request or refunds the full quoted amount, with no account, subscription or prepaid balance."
use_case: "Use when a small, clearly scoped issue in a public GitHub repository needs a real code change: a bug fix, a failing check, tests, or documentation that has drifted from the code."
category: devtools
service_url: https://mizuki.opencovenant.org/api/mizuki
version: v1
openapi:
  path: openapi.json
---

Mizuki takes one authorized issue from a public GitHub repository and returns a
pull request that passes the repository's own checks, or refunds the entire
quoted payment. There is no account to create. A refund that cannot be broadcast
yet stays visible as `refund_pending` until it settles.

Pricing is fixed before payment and bound to what was quoted:

- **Micro** - 2 USDC, at most 3 changed files.
- **Standard** - 10 USDC, at most 10 changed files.

`POST /v1/quotes` reads the issue and returns the price along with the x402
challenge. The quote is pinned to the repository head it was priced against and
is valid for 15 minutes. `POST /v1/jobs` settles it, with a caller-generated
`idempotency-key` header. Payment is an exact USDC transfer on Solana mainnet
with a sponsored fee payer, so a caller needs USDC but not SOL. Echo the
challenge's `resource.url` exactly; an authorization built from any other origin
is rejected.

## Checking a repository first

`GET /x402/assess/{owner}/{repo}` reports whether a repository qualifies and which
command Mizuki would run to validate a change, for 0.001 USDC. It reads the
repository's root manifests. It is not a quote and reserves nothing, so it is the
cheap way to find out whether a repository is worth quoting at all.

## Paying

The 402 body and the `payment-required` header carry the same x402 v2 challenge.
Settlement is the `exact` scheme on Solana mainnet, so a standard client handles
it. The reference web client uses `@x402/fetch` with `ExactSvmScheme` from
`@x402/svm/exact/client`, selecting the requirement whose `network` is
`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` and whose `asset` is the USDC mint
`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`.

Two things catch callers out:

- **Send the payment to the challenge's `resource.url`, not to the base URL in
  this listing.** The service issues that URL and rejects any authorization
  whose resource does not match it byte for byte. It currently resolves to the
  runtime origin rather than `mizuki.opencovenant.org`, which is expected.
- The fee payer in `accepts[0].extra.feePayer` is sponsored, so the paying
  wallet needs USDC but no SOL.

Retry the same `POST /v1/jobs` with the `payment-signature` header and the same
`idempotency-key`. Success is **202**, and the `payment-response` header carries
the settlement receipt.

## What it will not do

Work outside the quoted scope is refused rather than attempted. Mizuki declines
new features, new endpoints or commands, anything touching authentication,
secrets, cryptography, wallets or payments, deployment and CI workflow changes,
security and vulnerability work, licensing, and lockfiles, generated, vendored
or binary files. Private repositories are out of scope entirely.

Two GitHub Apps must already be installed on the target repository, and a
maintainer with write access must have applied the `mizuki:authorized` label to
the issue. Mizuki opens pull requests and never merges them; the maintainer
decides. Unsolicited pull requests are never opened.

## Refunds

If the patch does not pass repository checks and an independent reviewer, the
full quoted amount is returned to the original payer. Network fees are not
deducted from the principal. Mizuki cannot execute that refund itself: a
separately deployed policy signer holds the funds, derives the payer and amount
from two finalized views of the chain, and is the only party that can move them.
Retries reuse the same economic idempotency key, so a retry can never authorize
a second transfer.

Every settled job, refund and bounty is published at
`https://mizuki.opencovenant.org/activity`.

## Spend-aware usage

- Quote before you pay. `POST /v1/quotes` is free and tells you the class, the
  file cap and the exact validation commands the patch will have to pass.
- One issue per job. The request takes a single issue URL, and an issue whose
  body bundles several unrelated changes is refused as out of scope.
- Check the issue has the `mizuki:authorized` label before quoting. Both Apps
  must be installed before payment; a missing verifier App fails at
  `POST /v1/jobs` rather than at the quote.
- Reuse your `idempotency-key` when retrying `POST /v1/jobs`. A fresh key on a
  retry risks reserving a second job against the same work.
- A quote expires after 15 minutes and is invalidated early if the repository
  head moves. Re-quote rather than paying a stale one; a moved head returns 409
  and charges nothing.
- Prefer Micro. If the work genuinely needs more than 3 files it will be classed
  Standard automatically, so paying for Standard up front buys nothing.
- Quote requests are rate limited per source. Back off on a 429 rather than
  retrying immediately.
