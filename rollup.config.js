import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    image(),
  ],
  external: ['react', 'react-dom'],
};
