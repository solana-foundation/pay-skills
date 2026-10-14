---
name: square
title: 'Machine-Payable Square API'
description: 'A minimal x402-paid API that accepts a finite number and returns its mathematical square as structured JSON over HTTP.'
use_case: 'Use for testing autonomous agent discovery, micropayments, paid HTTP execution, and machine-to-machine x402 purchasing.'
category: compute
service_url: https://agent-vending-lab-v2.amctechsc.workers.dev
openapi:
  path: openapi.json
---

# Machine-Payable Square API

A deliberately simple paid API used to test whether autonomous agents can discover, evaluate, purchase, and invoke an HTTP tool without a traditional account or API key.

The Solana endpoint accepts a numeric query parameter and returns the input, its mathematical square, and the time the request was served.

Keep paid calls narrow: one request performs one deterministic calculation.