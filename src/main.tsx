import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {Global} from '@emotion/react';
import reset from './styles/reset.ts';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import globalStyles from './styles/globalStyles.ts';

async function enableMocking() {
  const {worker} = await import('./mocks/browser.ts');

  if (import.meta.env.MODE === 'development') {
    return worker.start();
  }
  if (import.meta.env.MODE === 'production') {
    return worker.start({
      serviceWorker: {
        url: 'mockServiceWorker.js',
      },
    });
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      refetchOnWindowFocus: false,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <App />
      </QueryClientProvider>
    </StrictMode>,
  );
});
