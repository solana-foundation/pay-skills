---
name: paysh-send
title: "paysh-send"
description: "Pay-per-call private USDC transfer over x402. Sender pays principal plus a tiered fee; recipient receives principal at any wallet, signed by the b402 hosted relayer. Routed through the b402 shielded pool on Solana."
use_case: "Use for sending USDC privately to any Solana wallet, paying contractors, grant recipients or vendors without doxing the payer, donations, agent-to-agent settlement, and any USDC transfer where the on-chain link from payer to recipient should be broken."
category: finance
service_url: https://paysh-shield-production.up.railway.app
openapi:
  url: https://paysh-shield-production.up.railway.app/openapi.json
---

Private USDC transfer service. The payer settles `principal + fee` USDC over x402; the recipient receives `principal` at the wallet you specify. The unshield is signed by the b402 hosted relayer, so the operator wallet does not appear on the recipient-side tx — there is no graph-traversal edge from the payer to the recipient.

Single endpoint: `POST /send` with body `{ "to": "<base58>", "amount": "<u64-string smallest units>" }`. First call returns 402 with the total price (principal + fee); retry with `X-PAYMENT` to settle. Response on success: `{ paymentSig, shieldSig, unshieldSig, recipient, principal, fee }`.

Fees: 0.05 USDC base plus 0.05% (principal < $1k), 0.08% (< $10k), or 0.10% (>= $10k). Min principal 0.01 USDC, max 100,000 USDC per call.

## Spend-aware usage

- Call `POST /send` exactly once per intended transfer; the body is the same on the 402 and on the X-PAYMENT retry. Do not retry on 200 — the transfer has already settled.
- For amounts under $1, the 0.05 USDC base dominates the fee — batch small payouts into fewer larger transfers when the destination is the same.
- Single-payment flows are subject to amount + timing correlation under chain analysis. Anonymity grows with concurrent volume in the b402 pool. For higher per-transfer privacy, schedule transfers in batches with random delays rather than sending immediately.
- Recipient must accept USDC at a Solana wallet. The service auto-creates the recipient's USDC ATA if it does not exist; the ATA rent is paid by the relayer.
- 502 with a `paymentSig` field means the payment landed but the shield-or-unshield step failed; surface the `paymentSig` for manual recovery rather than retrying the same request.
