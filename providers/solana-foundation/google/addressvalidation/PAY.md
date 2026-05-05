---
category: maps
description: "Validate, normalize, and geocode postal addresses worldwide. Returns deliverability verdicts, address component fixes, geocoded coordinates, USPS metadata, plus residential, commercial, and PO Box handling across 200+ countries."
use_case: "Use for checkout and shipping validation, CRM address cleanup, fraud checks, geocoding, postal code validation, deliverability scoring, standardizing user-entered addresses, and confirming residential, business, or PO Box destinations."
openapi:
  url: https://addressvalidation.google.gateway-402.com/openapi.json
name: addressvalidation
sandbox_service_url: https://addressvalidation.google-sandbox.gateway-402.com
service_url: https://addressvalidation.google.gateway-402.com
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
