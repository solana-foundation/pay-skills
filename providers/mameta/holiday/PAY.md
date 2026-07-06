---
name: holiday
title: "Japan Holiday API"
description: "Japanese (JP) public-holiday data and business-day calculation. Check whether a date is a holiday, list a year's holidays, count business days between dates, add business days to a date, and find the next business day, aware of JP holidays and weekends."
use_case: "Use for checking Japanese public holidays, business-day and working-day calculations, deadline and delivery-date scheduling in Japan, counting business days between dates, and date arithmetic that must skip JP holidays and weekends."
category: data
service_url: https://holiday.agentic-jp.com
version: v1
openapi:
  path: openapi.json
---

Pay-per-request Japanese public-holiday data and business-day arithmetic for
AI agents — scheduling, deadlines, and delivery-date logic that must respect
JP holidays and weekends.

## Spend-aware usage

- Use `GET /is-holiday/:date` ($0.001) for a single date check, and
  `GET /holidays/:year` ($0.002) when you need the whole year — fetching the
  year once is cheaper than many single-date checks.
- Use `POST /business-days`, `/add-business-days`, `/next-business-day` for
  date arithmetic ($0.002–$0.003).
- Use `POST /batch` ($0.001/item) for bulk date calculations rather than
  looping single calls; batch up to 100 items.
