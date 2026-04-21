---
name: payment-debugger
title: "Payment Debugger"
description: "Demo API showcasing payment splits, tiered pricing, and referral flows."
category: devtools
service_url: https://payment-debugger.pay.dev
version: v1
affiliate_policy:
  enabled: true
  default_percent: 10
endpoints:
  - method: GET
    path: "api/v1/reports/usage"
    resource: reports
    description: "Usage report — flat fee, no splits"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/v1/invoices/pay"
    resource: invoices
    description: "Pay invoice — fixed splits to vendor + processor"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 100.00
  - method: POST
    path: "api/v1/subscriptions/charge"
    resource: subscriptions
    description: "Subscription charge — percentage-based revenue share"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 49.99
  - method: POST
    path: "api/v1/orders/checkout"
    resource: orders
    description: "Order checkout — fixed processing fee + percentage tax"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 250.00
  - method: POST
    path: "api/v1/referrals/purchase"
    resource: referrals
    description: "Referred purchase — affiliate commission to dynamic wallet"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 199.00
  - method: POST
    path: "api/v1/compute/run"
    resource: compute
    description: "Compute job — processing fees vary by volume tier"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - up_to: 1000
              price_usd: 0.10
            - up_to: 100000
              price_usd: 0.05
            - price_usd: 0.02
  - method: POST
    path: "api/v1/settlements/disburse"
    resource: settlements
    description: "Settlement disbursement — revenue shared across multiple parties"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 1000.00
  - method: GET
    path: "health"
    description: "Health check — free, no payment required"
---

Demo API for testing the full range of `pay` payment features. Exercises
payment splits, tiered pricing, affiliate referrals, and multi-party
disbursements.

Use this to validate your integration before going live with real endpoints.

## Endpoints

| Endpoint | What it tests |
|---|---|
| `GET /api/v1/reports/usage` | Simple flat fee, no splits |
| `POST /api/v1/invoices/pay` | Fixed-amount splits |
| `POST /api/v1/subscriptions/charge` | Percentage splits |
| `POST /api/v1/orders/checkout` | Mixed fixed + percentage |
| `POST /api/v1/referrals/purchase` | Dynamic affiliate wallet |
| `POST /api/v1/compute/run` | Volume-tiered pricing |
| `POST /api/v1/settlements/disburse` | Many-party disbursement |
| `GET /health` | Free endpoint (no payment) |
