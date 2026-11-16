
name: signal
title: "TVibe FILTER"
description: "TVibe FILTER gives a verdict PASS / REVIEW / SKIP with reasons and sell cost for any Solana token in one call. Built for AI agents, measured in public with 1,955 verdicts judged."
use_case: "Use for checking a Solana token before an agent mentions, buys, routes, or recommends it. One call returns verdict, blockers, and exit cost."
category: finance
service_url: https://signal-api-24q4.onrender.com
openapi:
path: openapi.json
What it does
TVibe FILTER reads DexScreener, Solana RPC, RugCheck, and Jupiter, then returns one verdict for a Solana token:

PASS = proceed, token passed the checks.
REVIEW = wait 15 minutes and re-check, token is not yet proven.
SKIP = walk away, token failed hard checks.
Every verdict includes blockers, cautions, positives, what is still unknown, and what leaving would cost via Jupiter sell quotes.

When an agent should use it
Before mentioning a new token to a user.
Before buying, swapping, or routing a token.
Before adding a token to a screener, watchlist, or portfolio.
To explain why a token is risky, flag by flag.
Spend-aware usage
Prefer /signal?mint=... for one token. It is the cheapest check.
Use /omni only when you need holder quality, security, and sell cost in one call.
Use batch check with max 10 tokens per call instead of 10 separate calls.
Reuse a verdict for 30 seconds. Results are cached. Do not re-check the same mint every second.
Free tier: 30 requests / minute / IP, no API key. No payment required for free endpoints.
Measured in public
Track record is measured, not claimed. Every verdict is judged about 24 hours later:

OK verdicts that ended badly: 24.6%
Caution verdicts that ended badly: 67.9%
Avoid verdicts that ended badly: 92.9%
Resolved: 1,955 verdicts. Pending: 47.
Ended badly means price down 50%, liquidity down 70%, or pair gone within 24 hours. Only tokens that were checked get measured, so this is not a random sample.

Honest limits
Verdicts are heuristics, not a security audit and not financial advice.
Free host can sleep. If you get 503, retry after a few seconds.
Data can be late or wrong. Always check the reasons, not just the verdict.
MCP server at /mcp: get_token_signal, check_token_risk, check_tokens_batch, check_exit, get_track_record.