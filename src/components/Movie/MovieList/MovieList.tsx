import usePopularMovies from '../../../queries/usePopularMovies';
import * as S from '../Movie.styled';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
  const { movieList } = usePopularMovies();

  return (
    <S.ItemList>
      {movieList.map(movie => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </S.ItemList>
  );
}

export default MovieList;
