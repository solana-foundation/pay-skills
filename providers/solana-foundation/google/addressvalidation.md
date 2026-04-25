---
category: maps
description: Validate and standardize postal addresses worldwide. Returns geocoded coordinates, USPS data, deliverability verdict, and address component breakdown. Covers residential, commercial, and PO Box addresses across 200+ countries.
endpoints:
- description: Validates an address.
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
- description: Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of
  method: POST
  path: v1:provideValidationFeedback
  resource: v1
name: addressvalidation
sandbox_service_url: https://sandbox-pay-google-addressvalidation-123883807128.us-central1.run.app
service_url: https://production-pay-google-addressvalidation-123883807128.us-central1.run.app
title: Address Validation API
use_case: verifying shipping addresses, geocoding, address autocomplete, deliverability checks, postal code validation
version: v1
---
