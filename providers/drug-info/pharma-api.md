---
fqn: drug-info/pharma-api
name: Pharma Drug Info API
description: "Get drug information from openFDA. Search by brand name or active ingredient."
category: data
base_url: http://api.moretrade.ru
endpoints:
  - path: v1/drug-info
    method: POST
    price: 0.001
    description: "Search drug by name. Send drug_name in body."
  - path: v1/drug-info
    method: GET
    price: 0.001
    description: "Search drug by name. Use drug_name query parameter."
---
