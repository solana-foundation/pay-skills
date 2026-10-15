import { describe, it, expect } from 'vitest';
import { collectProtocolCases, caseRunsOnAdapter } from '../src/protocol/vectors';
import { runCase } from '../src/protocol/driver';
import { typescriptProtocolAdapter } from '../src/protocol/runners/typescript';
const cases = collectProtocolCases().filter(c => caseRunsOnAdapter(c, typescriptProtocolAdapter.name));
describe('Clawd canonical MPP protocol codecs (TypeScript)', () => {
  it('loads a nonempty canonical suite', () => expect(cases.length).toBeGreaterThan(0));
  for (const c of cases) it(`${c.op}: ${c.scenario}`, async () => {
    const result = await runCase(typescriptProtocolAdapter, c);
    expect(result.ok, result.detail).toBe(true);
  });
});
