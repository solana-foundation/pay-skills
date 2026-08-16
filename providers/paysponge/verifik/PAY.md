---
name: verifik
title: "Verifik — x402 KYC, KYB & Identity Verification"
description: "x402-native KYC, KYB, and public-record APIs with strong Latin American coverage. Verify identities, businesses, vehicles, sanctions lists, and government records across 15+ countries."
use_case: "Use for identity verification, background checks, sanctions screening (OFAC, FBI, DEA, Interpol, UN), business registry lookups, vehicle verification, and driver license checks — especially in Latin America."
category: identity
service_url: https://verifik.x402.paysponge.com
openapi:
  path: openapi.json
---

Verifik identity and compliance data exposed through x402 payments via paysponge.

122 endpoints covering KYC, KYB, vehicle lookups, sanctions checks, and government
records — with particularly deep coverage across Latin America (Colombia, Mexico,
Argentina, Brazil, Chile, Peru, Ecuador, and more) plus global sanctions databases.

All endpoints are paid `GET` (or `POST` for OCR) routes accepting x402 USDC on
Base, Avalanche, Polygon, and Solana mainnet.

## Pricing

Most endpoints are **$0.30** per call. Exceptions include:

- **$0.01** — Email verification, WhatsApp check
- **$0.07** — OCR Document Scan (GPT)
- **$0.10** — OCR Document Scan Studio, SMS verification
- **$0.15** — OCR Document Scan Pro
- **$0.20** — IP geolocation, police records (basic), autodata selection
- **$0.40** — Extended ID lookups, complete vehicle reports, SIMIT fines
- **$0.50** — Peru national ID, US passport entries
- **$0.60** — Peru vehicle SOAT, extended Peru ID
- **$1.00** — Panama ID/company, credit intents

## Spend-aware usage

- **Sanctions screening** — Use `/v2/ofac`, `/v2/onu`, `/v2/dea`, `/v2/fbi`, `/v2/interpol`, `/v2/europol` for global watchlist and criminal database checks ($0.30 each). Batch separate checks per database as needed.
- **LATAM national ID** — Use `/v2/{country}/cedula` for most countries (AR, BO, BR, CL, CO, CR, DO, EC, ES, GT, HN, MX, PA, VE) at $0.30. Use `/v3/pe/cedula` for Peru ($0.50).
- **Business registry** — Use `/v2/{country}/company` for company lookups across AR, BO, BR, CA, CL, CR, EC, ES, MX, PA, PY, USA ($0.30). Use `/v3/co/rues` or `/v3/co/rues-complete` for Colombia.
- **Vehicle verification** — Use `/v2/{country}/vehicle` for basic plate lookups. Use `/v2/co/runt/vehicle-by-plate` or `/v2/co/runt/vehicle-by-vin` for full Colombian vehicle reports ($0.40).
- **OCR** — Use `/v2/ocr/scan-gpt` ($0.07) for lightweight document extraction, `/v2/ocr/scan-studio` ($0.10) for studio-grade, or `/v2/ocr/scan-pro` ($0.15) for maximum accuracy.
- **Colombia deep coverage** — Verifik has the broadest Colombia dataset: driver licenses (RUNT), police records (SIMIT, Procuraduría), legal cases (Rama Judicial), health records, military records, electoral certificates, and transit fines (Bogotá, Medellín).
