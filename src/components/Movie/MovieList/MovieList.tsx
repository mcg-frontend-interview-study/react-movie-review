import usePopularMovies from '../../../queries/usePopularMovies';
import useSearchedMovies from '../../../queries/useSearchedMovies';
import Button from '../../_common/Button/Button';
import * as S from '../Movie.styled';
import MovieItem from '../MovieItem/MovieItem';

interface MovieListProps {
  keyword: string;
}

function MovieList({ keyword }: MovieListProps) {
  const queries = [
    {
      name: 'popular',
      condition: keyword.trim() === '',
      hook: usePopularMovies,
    },
    {
      name: 'searched',
      condition: keyword.trim() !== '',
      hook: useSearchedMovies,
    },
  ];

  const activeQuery = queries.find(query => query.condition) || queries[0];

  const { movieList, fetchNextPage, isFetchingNextPage, hasNextPage } =
    activeQuery.hook(keyword);

  return (
    <>
      <S.ItemList>
        {movieList.map(movie => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </S.ItemList>
      {hasNextPage && (
        <Button
          content={isFetchingNextPage ? '로딩 중...' : '더보기'}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        />
      )}
    </>
  );
}

export default MovieList;
