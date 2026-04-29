---
category: maps
description: "Validate, normalize, and geocode postal addresses worldwide. Returns deliverability verdicts, address component fixes, geocoded coordinates, USPS metadata, plus residential, commercial, and PO Box handling across 200+ countries."
use_case: "Use for checkout and shipping validation, CRM address cleanup, fraud checks, geocoding, postal code validation, deliverability scoring, standardizing user-entered addresses, and confirming residential, business, or PO Box destinations."
openapi:
  url: https://production-pay-google-addressvalidation-123883807128.us-central1.run.app/openapi.json
name: addressvalidation
sandbox_service_url: https://sandbox-pay-google-addressvalidation-123883807128.us-central1.run.app
service_url: https://production-pay-google-addressvalidation-123883807128.us-central1.run.app
title: Address Validation API
version: v1

---

## Spend-aware usage

- Use `v1:validateAddress` once with the most complete address the user can
  provide, including region code and postal code when known.
- Do not call this provider for generic geocoding or place search; use Places
  when the task is finding a venue or coordinates rather than validating a
  deliverable postal address.
- Call `v1:provideValidationFeedback` only after the user or workflow has chosen
  a final validated address. It is not needed for one-shot validation answers.
