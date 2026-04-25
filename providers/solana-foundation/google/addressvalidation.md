---
category: maps
description: "Validate, normalize, and geocode postal addresses worldwide. Returns deliverability verdicts, address component fixes, geocoded coordinates, USPS metadata, plus residential, commercial, and PO Box handling across 200+ countries."
use_case: "Use for checkout and shipping validation, CRM address cleanup, fraud checks, geocoding, postal code validation, deliverability scoring, standardizing user-entered addresses, and confirming residential, business, or PO Box destinations."
endpoints:
- description: Validate a postal address and return its standardized form, geocoded coordinates, deliverability verdict, and USPS data
  method: POST
  path: v1:validateAddress
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: requests
  resource: v1
- description: Submit final feedback after a sequence of address validation attempts so Google can record the outcome.
  method: POST
  path: v1:provideValidationFeedback
  resource: v1
name: addressvalidation
sandbox_service_url: https://sandbox-pay-google-addressvalidation-123883807128.us-central1.run.app
service_url: https://production-pay-google-addressvalidation-123883807128.us-central1.run.app
title: Address Validation API
version: v1
---
