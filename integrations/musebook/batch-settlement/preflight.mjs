// Read-only requirements review. This is not a transaction or voucher verifier.
export const MAINNET = 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp';
export const PROGRAM = 'CHNLxYvVA28MJP9PrFuDXccuoGXAx7jBacfLEkahyGsX';
export const TOKEN = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
export const TOKEN_2022 = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
const U64 = (1n << 64n) - 1n;
const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
function key(value) {
  if (typeof value !== 'string' || value.length < 32 || value.length > 44) throw Error('Invalid public key');
  let number = 0n;
  for (const c of value) { const digit = alphabet.indexOf(c); if (digit < 0) throw Error('Invalid public key'); number = number * 58n + BigInt(digit); }
  let bytes = 0;
  while (number) { bytes++; number >>= 8n; }
  bytes += value.match(/^1*/)[0].length;
  if (bytes !== 32) throw Error('Invalid public key');
  return value;
}
function atomic(value, positive = false) {
  if (typeof value !== 'string' || !/^(0|[1-9][0-9]*)$/.test(value)) throw Error('Invalid atomic amount');
  const n = BigInt(value);
  if (n > U64 || (positive && n === 0n)) throw Error('Invalid atomic amount');
  return n;
}
export function reviewBatchRequirements(requirements, supported, policy) {
  const r = requirements, e = r?.extra;
  if (r?.scheme !== 'batch-settlement' || r.network !== MAINNET || !e) throw Error('Unsupported channel scheme or network');
  if ('channelProgram' in e || 'assetTransferMethod' in e) throw Error('Channel program and transfer method are not negotiated');
  if (e.paymentFlow !== undefined && e.paymentFlow !== 'authorization') throw Error('Invalid payment flow');
  const amount = atomic(r.amount), cap = atomic(policy?.maxDeposit, true);
  key(r.asset); key(r.payTo); key(e.feePayer); key(e.receiverAuthorizer);
  if (!Number.isSafeInteger(r.maxTimeoutSeconds) || r.maxTimeoutSeconds <= 0
    || !Number.isSafeInteger(e.withdrawDelay) || e.withdrawDelay < 900 || e.withdrawDelay > 2592000
    || e.withdrawDelay < r.maxTimeoutSeconds) throw Error('Invalid withdrawal delay or completion window');
  if (![TOKEN, TOKEN_2022].includes(e.tokenProgram) || policy.mintOwner !== e.tokenProgram) throw Error('Mint owner must independently match token program');
  if (e.memo !== undefined && (typeof e.memo !== 'string' || new TextEncoder().encode(e.memo).length > 256)) throw Error('Memo exceeds UTF-8 bound');
  if (e.maxIdleSecs !== undefined && (!Number.isSafeInteger(e.maxIdleSecs) || e.maxIdleSecs <= 0)) throw Error('Invalid idle window');
  const advertised = supported?.kinds?.find(k => k.x402Version === 2 && k.scheme === r.scheme && k.network === r.network && k.extra?.feePayer === e.feePayer);
  if (!advertised) throw Error('Facilitator does not advertise this batch-settlement sponsor');
  if (advertised.extra.maxIdleSecs !== e.maxIdleSecs) throw Error('Idle window does not match facilitator');
  if (policy.delegatedReceiver === true && advertised.extra.receiverAuthorizer !== e.receiverAuthorizer) throw Error('Delegated receiver key does not match facilitator');
  const mode = e.voucherSigner ?? 'client';
  if (!['client', 'server'].includes(mode)) throw Error('Invalid voucher mode');
  if (mode === 'client' && e.operator !== undefined) throw Error('Client mode cannot carry an operator');
  let effectiveCap = cap;
  if (mode === 'server') {
    key(e.operator);
    const grant = policy.operatorGrants?.find(g => g.operator === e.operator && g.asset === r.asset);
    if (!grant) throw Error('Server mode requires local operator and asset approval');
    const granted = atomic(grant.maxDeposit, true);
    if (granted < effectiveCap) effectiveCap = granted;
  }
  const requested = e.minDeposit === undefined ? (amount > 0n ? amount : 1n) : atomic(e.minDeposit, true);
  if (requested < amount) throw Error('Minimum deposit below request amount');
  if (amount > effectiveCap) throw Error('Request exceeds local escrow cap');
  const deposit = requested > effectiveCap ? effectiveCap : requested;
  return Object.freeze({ program: PROGRAM, network: MAINNET, mode, amount: r.amount, depositTarget: deposit.toString(),
    maxDeposit: effectiveCap.toString(), feePayer: e.feePayer, receiverAuthorizer: e.receiverAuthorizer,
    distribution: [{ recipient: r.payTo, bps: 10000 }], payeeRemainderBps: 0,
    bindingMemo: `x402:batch-settlement:svm:rcvauth:v1:${e.receiverAuthorizer}`,
    requiresOwnerSignature: true, transactionPrepared: false });
}
