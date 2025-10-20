import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

const isProduction = process.env.NODE_ENV === 'production';
const format = process.env.FORMAT || 'esm';

export default {
  input: 'src/index.ts',
  output: {
    file: format === 'esm' ? packageJson.module : packageJson.main,
    format: format,
    sourcemap: true,
    exports: 'named',
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      declarationMap: false,
    }),
    postcss({
      extract: true,
      minimize: isProduction,
    }),
  ],
  external: ['react', 'react-dom', 'page-flip'],
};