---
name: vpn-x402
title: "HFSP VPN x402"
description: "Anonymous WireGuard VPN passes and ephemeral Ubuntu VPS servers. Pay USDC on Solana. No account, no logs, no identity. Servers auto-destroy at expiry."
use_case: "Use for anonymous VPN tunnels, ephemeral compute, privacy-preserving network access, and burner VPS servers paid with Solana USDC."
category: cloud
service_url: https://vpn.hfsp.cloud
openapi:
  path: openapi.json
---

Pay-per-use anonymous VPN and ephemeral VPS infrastructure. A single POST returns a
ready-to-use WireGuard config or SSH IP — no accounts, no identity, no logs.

Payment is Solana mainnet USDC via the x402 protocol. Send the USDC transfer,
then retry the original request with `X-Solana-Tx: <confirmed-signature>`. The
server verifies on-chain via Helius and provisions immediately.

## Endpoints at a glance

| Path | Price | What you get |
|------|-------|--------------|
| `POST /api/vpn/hour`  | $0.20 USDC | WireGuard tunnel — 1 hour |
| `POST /api/vpn/day`   | $0.79 USDC | WireGuard tunnel — 24 hours |
| `POST /api/vpn/week`  | $2.99 USDC | WireGuard tunnel — 7 days |
| `POST /api/vpn/month` | $7.99 USDC | WireGuard tunnel — 30 days |
| `POST /api/vps/hour`  | $0.25 USDC | Ephemeral Ubuntu VPS — 1 hour |
| `POST /api/vps/day`   | $0.99 USDC | Ephemeral Ubuntu VPS — 24 hours |
| `POST /api/vps/week`  | $3.99 USDC | Ephemeral Ubuntu VPS — 7 days |

## VPN flow

Generate an X25519 WireGuard keypair client-side. Send the public key in the
request body. The server provisions a WireGuard node, returns its public key and
IP. Assemble the `.conf` locally — private key never leaves the client.

```
POST /api/vpn/week
{ "region": "US_HIL", "clientWgPublicKey": "<base64 X25519>" }

→ 402  { pay: { amount: 2990000, mint: "EPjFWdd5...", payTo: "GdAWRcvr..." } }
→ (send 2.99 USDC on Solana mainnet)
→ POST /api/vpn/week  X-Solana-Tx: <signature>
→ 200  { ip: "1.2.3.4", serverWgPubKey: "<base64>", expiresAt: "..." }
```

## VPS flow

Generate an Ed25519 SSH keypair client-side. Send only the public key. Server
adds it to `authorized_keys` — operator never sees the private key.

```
POST /api/vps/hour
{ "region": "SG_SIN", "sshPublicKey": "ssh-ed25519 AAAA..." }

→ 402  { pay: { amount: 250000, mint: "EPjFWdd5...", payTo: "GdAWRcvr..." } }
→ (send 0.25 USDC on Solana mainnet)
→ POST /api/vps/hour  X-Solana-Tx: <signature>
→ 200  { ip: "5.6.7.8", wireguardClientConf: "<base64>", expiresAt: "..." }
→ ssh -i key.pem root@5.6.7.8  (server ready in ~60s)
```

## Regions

`DE_NBG` (Nuremberg) · `FI_HEL` (Helsinki) · `US_HIL` (Hillsboro OR) · `SG_SIN` (Singapore)

## Payment details

- **Network:** Solana mainnet (`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`)
- **Asset:** USDC (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`, 6 decimals)
- **Recipient:** `GdAWRcvrVabFi6QtciGJNYsS8cykJkZTNZ3cFea6ywfY`
- **Header:** `X-Solana-Tx: <confirmed transaction signature>`

## Spend-aware usage

- Each request is one USDC transfer — keep retries minimal. The tx signature is
  single-use; a replay attempt returns 402 immediately.
- For recurring usage, prefer `week` or `month` passes over many `hour` passes.
- Use `GET /api/vps/regions` or `GET /api/vpn/regions` before provisioning to
  verify the target region is listed — the set can change.
- VPS servers take ~60 seconds to boot. Add a health-check loop before SSH.
