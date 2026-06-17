# pay-skills — Concierge Token Pay

PR-ready bundle for [solana-foundation/pay-skills](https://github.com/solana-foundation/pay-skills).

**Target path in pay-skills repo:** `providers/conc-exe/token-pay/`  
**Catalog FQN:** `conc-exe/token-pay`

## Refresh before PR

```bash
npm run paysh:sync-token-pay-openapi
npm run paysh:validate:token-pay
```

## Open PR

1. Fork `solana-foundation/pay-skills`
2. Copy `pay-skills/conc-exe/token-pay/` to `providers/conc-exe/token-pay/`
3. `pay catalog check providers/conc-exe/token-pay/PAY.md`
4. Open PR

Related: `pay-skills/conc-exe/concierge-agent/` — USDC intel routes (separate listing).

Site docs: https://conc-exe.xyz/docs/payment/token-pay
