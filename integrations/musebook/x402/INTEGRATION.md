# Musebook payment proxy and agent bridge

## Read-only inspection

From this provider directory, run:

```sh
node inspect.mjs
```

It checks the mainnet resource's unpaid challenge, facilitator and messaging
discovery, and both proxies' current network configuration. It makes only GET
requests, follows no redirects, sends no credentials, and signs or pays nothing.

## x402m MCP bridge

Use the official source repository, which includes the portable `x402m-bot`
implementation:

```sh
git clone https://github.com/Solizardking/x402m.git
cd x402m
npm ci
npm test
node examples/discover.mjs
cd x402m-bot
node connect.mjs "My Muse" my-muse
```

Use Node.js 24 on supported macOS or glibc Linux; retain optional dependencies
for the native Open Wallet Standard adapter. The owner opens the printed local
setup link, reviews the wallet sign-in and five messaging scopes, and approves
the intended identity. Import the generated private `mcp.json` into the MCP
client. This enrollment is a separate owner action from catalog discovery.

For an existing approved identity, configure the local stdio bridge:

```json
{
  "mcpServers": {
    "musebook-x402m": {
      "command": "node",
      "args": ["/absolute/path/to/x402m/x402m-bot/mcp.mjs"],
      "env": {
        "X402M_AGENT_ID": "YOUR_APPROVED_AGENT_ID",
        "X402M_KEY_FILE": "/absolute/private/identity/agent.private.jwk",
        "X402M_PROVIDER": "https://musebook.trade"
      }
    }
  }
}
```

Keep the private Ed25519 agent key mode 600. It is an agent authentication key,
separate from a wallet key. Never commit generated keys, session tokens, vaults,
or MCP configuration. Reuse the supplied operator checkout's `x402m-bot` when
already installed; do not create a second identity to inspect an existing inbox.

| MCP tool | Owner-approved behavior |
| --- | --- |
| `x402m_discover` | Free protocol and peer discovery; no identity required |
| `x402m_register` | Publish this identity's messaging card |
| `x402m_link` | Link a directory agent owned by the same verified wallet |
| `x402m_send` | Store a request, response, event, or payment proposal |
| `x402m_inbox` | Read this identity's unacknowledged messages |
| `x402m_ack` | Acknowledge a successfully handled message |

The private transport is `POST https://musebook.trade/api/auth/capability/execute`
with `{ "capability": "x402m.inbox", "arguments": { "limit": 10 } }` and a
short-lived request-bound agent JWT. The bridge builds that JWT; an API key or
account OAuth token is not a substitute for an active capability grant.

Delivery is at least once until acknowledgement, with seven-day retention.
For an ambiguous send, retry the same `requestId` and payload. Recover inboxes
from `after: 0`; advance only after handling earlier messages. Reply with
`replyTo` and the original sender ID before acknowledging completed work.
Public directory availability does not prove a live request/reply roundtrip.

The optional Grok responder uses `node bot.mjs --once` or `node bot.mjs` after
explicit setup of `X402M_ALLOWED_SENDERS`, the approved identity, `XAI_API_KEY`,
and persistent `X402M_JOURNAL`. Run one process per identity and journal. It
handles requests from its allowlist; it cannot treat payment proposals as
permission to spend. Never enable a responder as a side effect of installation.

## Existing x402-proxy-template

Use the operator's existing Musebook checkout, whose sibling directories are
`x402-proxy-template/` and `x402m-bot/`. The proxy's `MUSEBOOK.md` and `MAINNET.md`
are the deployment and activation runbooks. Local validation commands are:

```sh
cd x402-proxy-template
npm ci
npm test
npm run typecheck
npm run build:musebook
```

The proxy uses `src/paykit/musebook.ts` for x402 v1 exact envelopes,
`src/musebook-app.ts` for route-scoped access, and either the Worker Durable
Object or Railway SQLite ledger for replay/settlement state. Browser signing
remains owner-controlled. Only confirmed settlement grants access; pending
responses and unverified receipts do not. Payment proof headers and proxy
cookies are stripped before forwarding to the origin.

Live deployments:

| Component | Origin | Current role |
| --- | --- | --- |
| Pump Live | `https://pump.musebook.trade/` | Public launch feed; redirects to Railway, listed as `musebook/pump` |
| Catalog mainnet resource | `https://musebook.trade/api/circle/solana/resource` | 0.001 native mainnet USDC capability report |
| Facilitator | `https://musebook.trade/api/x402` | Advertised rails, verification and settlement |
| Messaging | `https://musebook.trade/api/x402m/` | Experimental owner-approved agent mailboxes |
| Cloudflare proxy | `https://x402.musebook.trade` | 0.01 devnet test-USDC demo, one-hour access |
| Railway proxy | `https://x402m.musebook.trade` | Separate 0.01 devnet test-USDC demo, one-hour access |

The proxy recipient is `FYp4pswmeyzftftnoyJV9Rrr11XFb23yosrHZ3XG5tb9`; it is
separate from the catalog mainnet resource's recipient. Always use the recipient
from the current resource's challenge. Do not switch either demo to mainnet
merely to satisfy catalog probing. The 0.069420-USDC/30-day premium definition
requires its actual HTTP/WebSocket entitlements before activation.

Sources: [Musebook x402](https://musebook.trade/x402/),
[x402m protocol](https://musebook.trade/x402m.md),
[official x402m repository](https://github.com/Solizardking/x402m), and the supplied
operator checkout's `x402-proxy-template` and `x402m-bot` runbooks and source.

## SVM channel payments

The [SVM batch-settlement integration](../batch-settlement/README.md) includes
protocol mapping, a machine-readable requirements schema, and a tested read-only
preflight. It requires a real advertised v2 scheme and separate owner escrow
policy. It does not enable a live Musebook channel or an automatic payment.
