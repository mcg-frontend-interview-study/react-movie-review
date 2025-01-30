import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';

async function enableMocking() {
  const {worker} = await import('@mocks/browser');

  if (import.meta.env.MODE === 'development') {
    return worker.start({onUnhandledRequest: 'bypass'});
  } else if (import.meta.env.MODE === 'production') {
    return worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: 'mockServiceWorker.js', // GitHub Pages 경로
      },
    });
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
