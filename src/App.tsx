import {Suspense} from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SkeletonMovieList from './components/skeleton/MovieList';

function App() {
  return (
    <div style={AppStyle}>
      <Header />

      <main>
        <MovieList />
      </main>
    </div>
  );
}

const AppStyle = {
  paddingBottom: '48px',
};

export default App;
