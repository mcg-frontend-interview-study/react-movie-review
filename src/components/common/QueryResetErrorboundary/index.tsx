import {QueryErrorResetBoundary} from '@tanstack/react-query';
import ErrorBoundary from '../ErrorBoundary';
import ErrorFallback from '../ErrorFallback';

interface QueryErrorBoundaryProps {
  children: React.ReactNode;
}

const QueryErrorBoundary = ({children}: QueryErrorBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({reset}) => (
        <ErrorBoundary fallback={ErrorFallback} resetQueryError={reset}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default QueryErrorBoundary;
