import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import analyze from 'rollup-plugin-analyzer'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import preserveDirectives from 'rollup-plugin-preserve-directives'

import pkg from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      preserveDirectives(),
      terser(),
      analyze({
        hideDeps: true,
        limit: 0,
        summaryOnly: true,
      }),
    ],
    // Ignore warnings when using "use client" directive
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning)
      }
    },
  },
]
