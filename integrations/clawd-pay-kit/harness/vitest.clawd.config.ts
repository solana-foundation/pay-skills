import { defineConfig } from 'vitest/config';
// TypeScript-only, RPC-free PR tier. No Surfpool or funded wallets.
process.env.MPP_CONFORMANCE_LANGUAGES = 'typescript';
export default defineConfig({ test: {
  include: ['test/clawd.test.ts', 'test/clawd-protocol.test.ts', 'test/conformance.test.ts',
    'test/canonical-codes.test.ts', 'test/canonical-json.test.ts',
    'test/guards.test.ts', 'test/replay.test.ts', 'test/intent-selection.test.ts',
    'test/x402-v1-exact.test.ts', 'test/x402-amount-base-units.test.ts'],
  testTimeout: 30000, hookTimeout: 30000, fileParallelism: false, maxWorkers: 1,
}});
