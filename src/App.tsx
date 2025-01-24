import Title from './components/_common/Title/Title';
import MovieList from './components/Movie/MovieList/MovieList';

function App() {
  return (
    <div>
      <Title content="지금 인기있는 영화" />
      <MovieList />
    </div>
  );
}

export default App;
