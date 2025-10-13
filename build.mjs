// // build.js
// import esbuild from 'esbuild';
// import fs from 'fs';
// import path from 'path';
// import tailwindcss from 'esbuild-plugin-tailwindcss';


// esbuild
//   .build({
//     entryPoints: ['scripts/build-cv-pdf/main.tsx'],
//     bundle: true,
//     platform: 'node',
//     target: 'node18',
//     format: 'esm',
//     outfile: 'dist/pdf-generator.js',
//     plugins: [tailwindcss()],
//     loader: {
//       '.png': 'file', // Outputs to dist/src/bas.png
//       '.ttf': 'file', // Outputs to dist/src/CV/fonts/EBGaramond-*.ttf
//       '.json': 'json'
//     },
//     assetNames: '[dir]/[name]', // Preserves directory structure,
//   })
//   .catch(() => process.exit(1));
import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./cli.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'cjs', // CommonJS instead of ESM
  outfile: './cli.js',
  banner: { js: '#!/usr/bin/env node' },
  minify: true,
  sourcemap: true,
  tsconfig: 'tsconfig.cli.json',
  external: ['node:*'],
});

console.log('Build complete!');