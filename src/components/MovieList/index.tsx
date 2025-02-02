import {useAtomValue} from 'jotai';
import useGetList from '../../hooks/useGetList';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import * as S from './styles';
import MovieItem from '../MovieItem';
import SkeletonMovieList from '../skeleton/MovieList';
import {searchTextAtom} from '../../jotai/atoms';

interface MovieListProps {
  openModal: (movieId: number) => void;
}

const MovieList = ({openModal}: MovieListProps) => {
  const {movies, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage} = useGetList();
  const searchText = useAtomValue(searchTextAtom);

  const lastElementRef = useInfiniteScroll({
    fetchNextPage,
    isLoading,
    isLastPage: !hasNextPage,
  });

  const handleItemClick = (event: React.MouseEvent<HTMLUListElement>) => {
    event.preventDefault();

    const listItem = (event.target as HTMLElement).closest('li');
    if (!listItem) return;

    const id = Number(listItem.id);
    const selectedItem = movies.find(item => item.id === id);

    if (selectedItem) openModal(id);
  };

  return (
    <S.MovieList onClick={handleItemClick}>
      {isLoading ? (
        <SkeletonMovieList />
      ) : (
        movies.map((movie, index) => {
          const isLastMovie = index === movies.length - 1;

          return (
            <div
              key={movie.id}
              ref={isLastMovie ? lastElementRef : null} // 마지막 요소에 ref 연결
            >
              <MovieItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </div>
          );
        })
      )}
      {isFetchingNextPage && <SkeletonMovieList />}

      {searchText && movies.length === 0 && <S.Message>검색 결과가 없습니다.</S.Message>}
    </S.MovieList>
  );
};

export default MovieList;
