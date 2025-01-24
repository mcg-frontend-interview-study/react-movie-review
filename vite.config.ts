import {defineConfig} from 'vite';
import {resolve} from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: [
      {find: '@assets', replacement: resolve(__dirname, 'src/assets')},
      {find: '@components', replacement: resolve(__dirname, 'src/components')},
      {find: '@constants', replacement: resolve(__dirname, 'src/constants')},
      {find: '@hooks', replacement: resolve(__dirname, 'src/hooks')},
      {find: '@mocks', replacement: resolve(__dirname, 'src/mocks')},
      {find: '@pages', replacement: resolve(__dirname, 'src/pages')},
      {find: '@styles', replacement: resolve(__dirname, 'src/styles')},
      {find: '@utils', replacement: resolve(__dirname, 'src/utils')},
      {find: '@type', replacement: resolve(__dirname, 'src/type')},
    ],
  },
  base: '/react-movie-review/',
});
