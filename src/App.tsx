import MovieListContainer from './components/MovieListContainer';
import Header from './components/Header';
import ErrorBoundary from './components/common/ErrorBoundary';
import ErrorFallback from './components/common/ErrorFallback';
import {QueryErrorResetBoundary} from '@tanstack/react-query';

function App() {
  return (
    <div style={AppStyle}>
      <Header />

      <QueryErrorResetBoundary>
        {({reset}) => (
          <ErrorBoundary fallback={ErrorFallback} resetQueryError={reset}>
            <main>
              <MovieListContainer />
            </main>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
}

const AppStyle = {
  paddingBottom: '48px',
};

export default App;
