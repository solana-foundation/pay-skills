---
name: 2captcha
title: "2Captcha"
description: "Solve CAPTCHAs through 2Captcha's task API, including reCAPTCHA v2/v3, hCaptcha, Cloudflare Turnstile, FunCaptcha, GeeTest, and image challenges, with task creation, result polling, and solve-quality reporting."
use_case: "Use for automated CAPTCHA solving in web agents, scraping and form-submission pipelines, login or signup flows, challenge polling, and reporting correct or incorrect solve outcomes back to 2Captcha."
category: devtools
service_url: https://2captcha.x402.paysponge.com
openapi:
  path: openapi.json
---

2Captcha CAPTCHA-solving endpoints exposed through PaySponge with x402
payments.

The bundled OpenAPI document advertises task creation, result polling, and
correct or incorrect solve reporting across reCAPTCHA v2/v3, hCaptcha,
Cloudflare Turnstile, FunCaptcha, GeeTest, image captchas, and related task
types.

## Spend-aware usage

- Use `POST /createTask` only once per challenge, then reuse the returned task
  id when polling instead of creating duplicate solve jobs.
- Call `POST /getTaskResult`, `POST /reportCorrect`, and
  `POST /reportIncorrect` only after you have a task id and downstream outcome
  from the earlier task-creation flow.
