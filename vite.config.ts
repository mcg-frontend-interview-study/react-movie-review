import {defineConfig} from 'vite';
import {resolve} from 'path';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const isDevelopment = mode === 'development';

  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      svgrPlugin(),
    ],
    resolve: {
      alias: [
        {find: '@apis', replacement: resolve(__dirname, 'src/apis')},
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
    base: isDevelopment ? '' : '/react-movie-review/',
  };
});
