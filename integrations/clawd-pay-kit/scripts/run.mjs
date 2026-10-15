import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
function run(dir, args) {
  const result = spawnSync('npx', ['--yes', 'pnpm@11.13.0', '--dir', dir, ...args], {cwd: root, stdio: 'inherit'});
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
const command = process.argv[2];
if (command === 'setup') {
  run('typescript', ['install', '--frozen-lockfile']);
  run('typescript', ['build']);
  run('harness', ['install', '--frozen-lockfile']);
} else if (command === 'build') run('typescript', ['build']);
else if (command === 'test') {
  run('harness', ['test:clawd']);
  const result = spawnSync(process.execPath, ['--test', '../musebook/batch-settlement/preflight.test.mjs'], {cwd:root,stdio:'inherit'});
  process.exit(result.status ?? 1);
} else if (command === 'typecheck') {
  run('typescript', ['typecheck']);
  run('harness', ['exec', 'tsc', '--noEmit', '-p', 'tsconfig.clawd.json']);
} else throw new Error('Use setup, build, test, or typecheck');
