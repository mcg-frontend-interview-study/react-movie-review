import usePopularMovies from '../../../queries/usePopularMovies';
import Button from '../../_common/Button/Button';
import * as S from '../Movie.styled';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
  const { movieList, fetchNextPage, isFetchingNextPage } = usePopularMovies();

  return (
    <>
      <S.ItemList>
        {movieList.map(movie => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </S.ItemList>
      <Button
        content={isFetchingNextPage ? '로딩 중...' : '더보기'}
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      />
    </>
  );
}

export default MovieList;
