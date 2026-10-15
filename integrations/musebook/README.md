# Musebook integrations

This PR includes Musebook alongside Clawd, using the existing
Musebook services and the supplied `x402-proxy-template` and `x402m-bot` source.
It includes the explicitly requested [Pump Live endpoint](https://pump.musebook.trade/).

| Integration | Entry | Included contract |
| --- | --- | --- |
| Musebook x402 | https://musebook.trade/x402/ | [Staged catalog metadata and OpenAPI](x402/PAY.md) |
| Official x402m | https://github.com/Solizardking/x402m | [MCP enrollment and messaging setup](x402/INTEGRATION.md) |
| Pump Live | https://pump.musebook.trade/ | [Endpoint listing and OpenAPI](pump/PAY.md) |
| Existing payment proxy | https://x402.musebook.trade | Cloudflare devnet demo, linked in the integration guide |
| Existing Railway proxy | https://x402m.musebook.trade | Separate devnet demo, linked in the integration guide |

These files are staged under `integrations/`, not `providers/`. This is a
reviewable integration contribution; it does not claim publication into
`pay skills search`. Move a staged provider into `providers/musebook/` only
after its real live payment gate passes the catalog pipeline. Do not add a
synthetic 402 or invent paid pricing for the currently free Pump feed.

## Validation on October 7, 2026

- `pay catalog check . --no-probe`: passed (pre-existing registry warnings).
- `pay catalog check providers/clawd/api/PAY.md -v`: four real unpaid
  Solana-USDC gates passed; no payment was made.
- `node integrations/musebook/x402/inspect.mjs`: live read-only inspection passed
  for the mainnet report challenge, free discovery, proxy configurations, and
  Pump redirect/health checks. Zero signatures, payments, and messages.
- `pay catalog check integrations/musebook/x402/PAY.md --no-probe` and the Pump
  equivalent validate staged frontmatter and local OpenAPI structure.

The live `GET /api/circle/solana/resource` returns an x402 v1 exact mainnet
USDC challenge for 1000 atomic units (0.001 USDC). The installed `pay` 0.28.0
validator classifies that envelope as `unknown_protocol`. Thus the live x402
provider probe is blocked despite the source and live response describing a
v1 challenge. Compatibility must be resolved and the actual catalog validator
rerun before promotion; no paid `pay curl` success is claimed.

The Pump provider's `/health` and `/api/events` return free responses after the
branded HTTP 307 redirect. The registry's current gate blocks a provider with
zero compatible paid endpoints. Pump is therefore explicitly included here
as a companion endpoint, rather than falsely advertised as a paid provider.
The direct `/readyz` returned 503 with degraded readiness; liveness is not
proof of a fresh stream.

Both proxy demos advertise devnet test USDC. The 0.069420-USDC, 30-day premium
plan is defined in source but its HTTP/WebSocket entitlements are not deployed.
No deployment, paid request, automated responder, wallet enrollment, or trading
action is performed by this contribution.

## Recheck

```sh
node integrations/musebook/x402/inspect.mjs
pay catalog check integrations/musebook/x402/PAY.md --no-probe
pay catalog check integrations/musebook/pump/PAY.md --no-probe
pay catalog check providers/clawd/api/PAY.md -v
```

## SVM channel payments

The [SVM batch-settlement integration](batch-settlement/README.md) includes the
requested channel-payment contract, requirements schema, and nine tested
preflight checks. Live Musebook does not yet advertise this v2 scheme.

## Clawd Pay Kit

The [Clawd Pay Kit](../clawd-pay-kit/README.md) adds a buildable TypeScript
package using the supplied PayKit source and a PR harness that exercises
conformance vectors, wallet policy, legacy x402, and the channel preflight.
