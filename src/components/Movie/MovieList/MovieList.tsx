import usePopularMovies from '../../../queries/usePopularMovies';
import useSearchedMovies from '../../../queries/useSearchedMovies';
import Button from '../../_common/Button/Button';
import * as S from '../Movie.styled';
import MovieItem from '../MovieItem/MovieItem';

interface MovieListProps {
  keyword: string;
}

function MovieList({ keyword }: MovieListProps) {
  const {
    movieList,
    fetchNextPage: fetchPopularNextPage,
    isFetchingNextPage: isFetchingPopularNextPage,
    hasNextPage: hasPopularNextPage,
  } = usePopularMovies(keyword);

  const {
    movieList: searchedMovieList,
    fetchNextPage: fetchSearchedNextPage,
    isFetchingNextPage: isFetchingSearchedNextPage,
    hasNextPage: hasSearchedNextPage,
  } = useSearchedMovies(keyword);

  const renderMovieList = movieList.length > 0 ? movieList : searchedMovieList;
  const renderFetchNextPage =
    movieList.length > 0 ? fetchPopularNextPage : fetchSearchedNextPage;
  const isFetchingNextPage =
    movieList.length > 0
      ? isFetchingPopularNextPage
      : isFetchingSearchedNextPage;
  const hasNextPage =
    movieList.length > 0 ? hasPopularNextPage : hasSearchedNextPage;

    return (
    <>
      <S.ItemList>
        {renderMovieList.map(movie => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </S.ItemList>
      {hasNextPage && (
        <Button
          content={isFetchingNextPage ? '로딩 중...' : '더보기'}
          onClick={() => renderFetchNextPage()}
          disabled={isFetchingNextPage}
        />
      )}
    </>
  );
}

export default MovieList;
