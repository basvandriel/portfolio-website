import { build } from 'esbuild';

await build({
  entryPoints: ['scripts/build-cv-pdf/main.tsx'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: 'dist/cli.mjs',
  banner: { js: '#!/usr/bin/env node' },
  packages: 'external',
  minify: true,
  tsconfig: 'tsconfig.script.json',
  loader: {
    '.ttf': 'file',
  },
  assetNames: '[name]-[hash]',
  publicPath: './dist' 
});

console.log('Build complete: dist/cli.mjs');