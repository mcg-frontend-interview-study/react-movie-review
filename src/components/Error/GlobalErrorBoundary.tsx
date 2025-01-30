import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import GlobalErrorFallback from './GlobalErrorFallback';

function GlobalErrorBoundary({ children }: React.PropsWithChildren) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <GlobalErrorFallback reset={resetErrorBoundary} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

export default GlobalErrorBoundary;
