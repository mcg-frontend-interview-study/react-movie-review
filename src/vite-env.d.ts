/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_API_KEY: 'string';
    VITE_ACCESS_TOKEN: 'string';
    VITE_API_BASE_URL: 'string';
    VITE_IMAGE_URL_PREFIX: 'string';
  }
}

declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  const src: string;
  export default src;
}
