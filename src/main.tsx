import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import GlobalStyle from './styles/GlobalStyle.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 0,
    },
  },
});

async function enableMocking() {
  const { worker } = await import('./mocks/browser.ts');

  if (import.meta.env.MODE === 'development') {
    // 개발 환경에서는 기본 경로 사용
    return worker.start();
  } else if (import.meta.env.MODE === 'production') {
    // 프로덕션 환경에서는 GitHub Pages 경로에 맞게 설정
    return worker.start({
      serviceWorker: {
        url: 'mockServiceWorker.js', // GitHub Pages 경로
      },
    });
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <GlobalStyle />
            <App />
          </ModalProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
