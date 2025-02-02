import MovieListContainer from './components/MovieListContainer';
import Header from './components/Header';
import QueryErrorBoundary from './components/common/QueryResetErrorboundary';

function App() {
  return (
    <div style={AppStyle}>
      <QueryErrorBoundary>
        <Header />
        <main>
          <MovieListContainer />
        </main>
      </QueryErrorBoundary>
    </div>
  );
}

const AppStyle = {
  paddingBottom: '48px',
};

export default App;
