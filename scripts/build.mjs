import { spawnSync } from 'node:child_process';

const viteResult = spawnSync('npx', ['vite', 'build', ...process.argv.slice(2)], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (viteResult.status !== 0) {
  process.exit(viteResult.status ?? 1);
}

const seoResult = spawnSync('node', ['scripts/postbuild-seo.mjs'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (seoResult.status !== 0) {
  process.exit(seoResult.status ?? 1);
}
