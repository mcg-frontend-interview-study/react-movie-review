/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_API_KEY: 'string';
    VITE_ACCESS_TOKEN: 'string';
    VITE_API_BASE_URL: 'string';
    VITE_IMAGE_URL_PREFIX: 'string';
  }
}
