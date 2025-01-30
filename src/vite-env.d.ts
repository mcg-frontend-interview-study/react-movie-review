/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_KEY: 'string';
  VITE_ACCESS_TOKEN: 'string';
  VITE_API_BASE_URL: 'string';
  VITE_IMAGE_URL_PREFIX: 'string';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  const src: string;
  export default src;
}
