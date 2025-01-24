import * as S from './styles';
import useGetList from '../../hooks/useGetList';
import MovieItem from '../MovieItem';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import {useAtomValue} from 'jotai';
import {searchTextAtom} from '../../jotai/atoms';

const MovieList = () => {
  const searchText = useAtomValue(searchTextAtom);
  const {data, hasNextPage, fetchNextPage, isLoading} = useGetList();

  const movies = data.pages.flatMap(page => page.results);

  const lastElementRef = useInfiniteScroll({
    fetchNextPage,
    isLoading,
    isLastPage: !hasNextPage,
  });

  return (
    <S.MovieListContainer>
      <h2>{searchText ? `"${searchText}" 검색 결과` : '지금 인기 있는 영화'}</h2>
      <S.MovieList>
        {movies.map((movie, index) => {
          const isLastMovie = index === movies.length - 1;

          return (
            <div
              key={movie.id}
              ref={isLastMovie ? lastElementRef : null} // 마지막 요소에 ref 연결
            >
              <MovieItem
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </div>
          );
        })}
      </S.MovieList>
      {!hasNextPage && <p>마지막 페이지입니다!</p>}
    </S.MovieListContainer>
  );
};

export default MovieList;
