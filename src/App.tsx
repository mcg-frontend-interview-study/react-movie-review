import {Suspense} from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div style={AppStyle}>
      <Header />

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <MovieList />
        </Suspense>
      </main>
    </div>
  );
}

const AppStyle = {
  paddingBottom: '48px',
};

export default App;
