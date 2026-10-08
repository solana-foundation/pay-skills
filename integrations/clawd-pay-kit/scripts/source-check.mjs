import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const snapshot = JSON.parse(readFileSync(resolve(root, 'UPSTREAM.json'), 'utf8'));
const modified = new Set(['harness/package.json', 'harness/pnpm-workspace.yaml',
  'harness/pnpm-lock.yaml', 'typescript/pnpm-lock.yaml']);
let count = 0;
for (const [path, hash] of Object.entries(snapshot.sha256)) {
  const data = readFileSync(resolve(root, path));
  if (!modified.has(path) && createHash('sha256').update(data).digest('hex') !== hash)
    throw new Error(`Unexpected change to supplied source: ${path}`);
  count++;
}
console.log(`Verified ${count} supplied files; four workspace-wiring files intentionally adapted.`);
