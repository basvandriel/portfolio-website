import { build } from 'esbuild';

await build({
  entryPoints: ['scripts/build-cv-pdf.tsx'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: 'scripts/dist/build-cv-pdf.mjs',
  banner: { js: '#!/usr/bin/env node' },
  packages: 'external',
  minify: true,
  tsconfig: 'tsconfig.script.json',
  loader: {
    '.ttf': 'file',
  },
  assetNames: '[name]-[hash]',
  publicPath: './scripts/dist/' 
});

console.log('Build complete: dist/cli.mjs');