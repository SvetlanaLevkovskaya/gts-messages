import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const aliasFolders = [
  'assets',
  'components',
  'hooks',
  'layout',
  'lib',
  'modules',
  'service',
  'store',
  'type',
];
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...Object.fromEntries(
        aliasFolders.map((v) => [
          `@${v}`,
          `${path.resolve(__dirname, `./src/${v}/`)}`,
        ]),
      ),
      '@public': `${path.resolve(__dirname, './public/')}`,
    },
  },
});
