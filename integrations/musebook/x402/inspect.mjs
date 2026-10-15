import assert from 'node:assert/strict';

// Read-only inspection. No wallet, keys, enrollment, send, or settlement calls.
const MAINNET = 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp';
const USDC = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
async function get(url) {
  const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
  const body = [307, 308].includes(response.status) ? null : await response.json();
  return { url, status: response.status, location: response.headers.get('location'), body };
}
const urls = [
  'https://musebook.trade/api/circle/solana/resource',
  'https://musebook.trade/api/x402/supported',
  'https://musebook.trade/api/x402m/discovery',
  'https://musebook.trade/api/x402m/agents',
  'https://x402.musebook.trade/__x402/config',
  'https://x402m.musebook.trade/__x402/config',
  'https://pump.musebook.trade/health',
  'https://pump-stream-production.up.railway.app/health',
  'https://pump-stream-production.up.railway.app/readyz',
];
const results = await Promise.all(urls.map(get));
const [paid, supported, messaging, directory, cloudflare, railway, pump, health, ready] = results;
assert.equal(paid.status, 402);
assert.equal(paid.body.x402Version, 1);
const accept = paid.body.accepts.find(a => a.scheme === 'exact' && ['solana', MAINNET].includes(a.network) && a.asset === USDC);
assert(accept, 'Expected native mainnet USDC challenge');
assert.equal(accept.maxAmountRequired, '1000');
assert.equal(accept.payTo, '3NHMeZPXXZVgArbgE6hJU3fq72fR9UsgbmH9zFvQiGC1');
for (const r of [supported, messaging, directory, cloudflare, railway]) assert.equal(r.status, 200);
assert.equal(messaging.body.protocol, 'x402m/1');
assert.equal(messaging.body.execute, 'https://musebook.trade/api/auth/capability/execute');
assert(Array.isArray(directory.body.agents));
assert.equal(pump.status, 307);
assert.equal(pump.location, 'https://pump-stream-production.up.railway.app/health');
assert.equal(health.status, 200);
assert([200, 503].includes(ready.status));
console.log(JSON.stringify({
  checkedAt: new Date().toISOString(), paidChallenge: { status: paid.status, ...accept },
  discovery: { status: messaging.status, protocol: messaging.body.protocol, capabilities: messaging.body.capabilities.map(c => c.name), optedInPeers: directory.body.agents.length },
  batchSettlement: { advertised: supported.body.kinds.some(k => k.x402Version === 2 && k.scheme === 'batch-settlement' && k.network === MAINNET), activation: 'requires separately approved runtime and wallet policy' },
  proxies: [cloudflare, railway].map(r => ({ url: r.url, status: r.status, network: r.body.network, patterns: r.body.protectedPatterns })),
  pump: { publicEntry: 'https://pump.musebook.trade/', healthRedirect: pump.location, health: health.body, readyStatus: ready.status },
  signedTransactions: 0, payments: 0, messagesSent: 0,
}, null, 2));
