---
category: maps
description: Validate addresses with geocoding and deliverability.
endpoints:
- description: Validates an address.
  method: POST
  path: v1:validateAddress
  resource: v1
- description: Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of
  method: POST
  path: v1:provideValidationFeedback
  resource: v1
name: addressvalidation
service_url: https://sandbox-pay-google-addressvalidation-v2c65mhlba-uc.a.run.app
title: Address Validation API
version: v1
---
