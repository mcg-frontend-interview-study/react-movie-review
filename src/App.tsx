import {Main} from './pages/Main';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GlobalStyle} from './styles/GlobalStyle';
import './index.css';

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Main />
    </QueryClientProvider>
  );
};
