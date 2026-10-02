# x402jp/japan-data

Japan & APAC Data APIs for AI Agents — 18 endpoints powered by x402 protocol on Base and Solana.

## Provider Info

- **Name**: x402 Inc.
- **Website**: https://x402jp.com
- **Service URL**: https://apijapan.vercel.app
- **Discovery**: https://apijapan.vercel.app/.well-known/x402.json
- **Protocols**: x402 (EVM Base + Solana), MPP
- **Payment Token**: USDC

## Data Sources

All endpoints use first-party data from Japanese government sources:

- Weather: Open-Meteo AG (CC BY 4.0)
- FX: ExchangeRate-API (commercial use permitted)
- Earthquake/Tsunami: P2PQuake / 気象庁 (no registration required)
- Real Estate: 国土交通省 地価公示 (CC BY 4.0)
- Company: 国税庁 法人番号API (commercial use permitted)
- Population: 総務省統計局 e-Stat (commercial use permitted)
- Holiday: 内閣府 (public domain)
- Air Quality: WAQI (free tier)
- Culture: 文化庁 Japan Search (open license)

## Endpoints

| Endpoint | Price | Data Source |
|----------|-------|-------------|
| GET /api/weather/{city} | $0.001 | Open-Meteo |
| GET /api/forex | $0.001 | ExchangeRate-API |
| GET /api/earthquake/jp | $0.002 | P2PQuake/気象庁 |
| GET /api/tsunami/jp | $0.003 | P2PQuake/気象庁 |
| GET /api/holiday/jp | $0.001 | 内閣府 |
| GET /api/company/{number} | $0.002 | 国税庁 |
| GET /api/realestate/{city} | $0.005 | 国土交通省 |
| GET /api/population/{prefecture} | $0.003 | 総務省統計局 |
| GET /api/tax/jp | $0.003 | 国税庁 |
| GET /api/visa/jp | $0.005 | 外務省 MOFA |
| GET /api/air/{city} | $0.002 | WAQI |
| GET /api/culture/{keyword} | $0.002 | 文化庁 |
| GET /api/logistics/jp | $0.005 | ヤマト運輸 |
