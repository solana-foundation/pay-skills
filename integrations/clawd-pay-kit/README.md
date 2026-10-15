# Clawd Pay Kit

`@clawd/pay-kit` is a Clawd package built on the user-supplied Solana PayKit
TypeScript source. This directory includes that source, its full harness source,
`harness/ts-client`, fixtures, vectors, intents, protocol helpers, onchain helpers,
and IDLs. The upstream MIT license is preserved. `UPSTREAM.json` records the
original source path and SHA-256 hashes; Clawd additions and workspace wiring
are maintained separately from the payment implementations.

## Build and run the PR harness

Requires Node >=22.13, npm/npx, and registry access for dependencies. Commands
use the supplied source's pinned pnpm 11.13.0. Run from this directory:

```sh
npm run source:check
npm run setup
npm run typecheck
npm test
npm run inspect
```

The PR tier selects TypeScript conformance vectors, v1 x402 parsing, canonical MPP protocol codecs,
JSON/error codes, replay/intent/guard tests, Clawd payment-policy tests, and the
Musebook SVM batch-settlement preflight tests. It never starts Surfpool or sends
real payments. Some replay tests bind loopback HTTP sockets. Setup builds the
supplied MPP and PayKit packages before building the Clawd package.

`npm run inspect` separately performs live credential-free GETs against the
Musebook endpoints. A real 402 challenge or a conformance pass does not prove
funded settlement. The existing validator compatibility limitation remains;
this kit does not change registry eligibility.

## Wallet-bound client

```ts
import { createClawdPayClient, CLAWD_ENDPOINTS } from '@clawd/pay-kit/client';

const client = await createClawdPayClient({
  signer: existingWalletSigner,
  rpcUrl: configuredSolanaRpc,
  policy: {
    registeredWallet: accountWalletAddress,
    origins: [CLAWD_ENDPOINTS.musebook],
    maxUsdPerPayment: '0.01',
  },
  approve: async review => showWalletPaymentApproval(review),
});
// Calling pay asks for approval, then the SDK checks actual challenge terms
// before signing. The client never generates or enrolls a replacement wallet.
const response = await client.pay(CLAWD_ENDPOINTS.report);
```

The supplied upstream client currently requires a Solana `KeyPairSigner`-shaped
signer. Integrators must supply an existing compatible signer; this example
neither reads a key file nor creates a wallet. Browser wallet adapters may need
a compatible adapter. The approval callback permits one bounded request, not
an unlimited grant. Mainnet stablecoin amounts are capped per payment; this is
not a cumulative daily allowance or receiver allowlist. Redirects are refused
for paid requests. x402 and MPP are handled by upstream implementations.

The root package re-exports upstream server gates, pricing, middleware, and
OpenAPI helpers. This kit is built locally; it has not been published to npm.

## Musebook companions and channels

Endpoint constants include [Pump Live](https://pump.musebook.trade/), Musebook
report/discovery, the official [x402m source](https://github.com/Solizardking/x402m),
and the two devnet proxy demos. x402m messaging grants remain separate from
wallet spending. Pump is a public feed, not an invented paid route.

The [Musebook integration guide](../musebook/x402/INTEGRATION.md) connects the
supplied bot and proxy. The [batch-settlement contract](../musebook/batch-settlement/README.md)
contains the schema and preflight tests run by this harness. Live Musebook does
not currently advertise that scheme; the Clawd wrapper does not silently enable
channel escrow, vouchers, server-signed operator authority, or automated trading.

## Extended harness tiers

The original [harness guide](harness/README.md) describes the process adapter
contract, artifact resolution, matrix, structural Surfpool tests, and onchain
E2E. Those sources are retained for extension. Other-language implementations
are not vendored here, so their manifests require their respective SDK checkouts;
they are not part of the Clawd PR tier. Onchain runs need Surfpool, network
access, explicit configuration, and separately verified settlement evidence.
Do not run the unrestricted upstream default test command as the Clawd PR tier.

## Validation on October 7, 2026

- Source hashes: 355 supplied files verified, four workspace-wiring files adapted.
- Frozen-lockfile setup and all three SDK builds passed.
- SDK and focused harness type checks passed.
- PR harness: 233 tests passed, 24 unsupported vector cases explicitly skipped.
- SVM batch preflight: nine tests passed.
- Credential-free live endpoint inspection passed; zero signatures/payments/messages.
- Whole registry static check passed with existing warnings.

No funded settlement, onchain E2E, automatic trading, npm publication, or
production channel activation is claimed. Hosted CI still needs the upstream
repository's approval for fork workflows.
