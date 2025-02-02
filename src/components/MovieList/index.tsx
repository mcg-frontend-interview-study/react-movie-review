import * as S from './styles';
import useGetList from '../../hooks/useGetList';
import MovieItem from '../MovieItem';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import {useAtomValue} from 'jotai';
import {searchTextAtom} from '../../jotai/atoms';
import DetailModal from '../DetailModal';
import SkeletonMovieList from '../skeleton/MovieList';
import useMovieDetailModalState from '../../hooks/useMovieDetailModalState';

const MovieList = () => {
  const {selectedMovieId, openModal, closeModal} = useMovieDetailModalState();

  const searchText = useAtomValue(searchTextAtom);

  const {data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage} = useGetList();
  const movies = data ? data.pages.flatMap(page => page.results) : [];

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
    <S.MovieListContainer>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <h2>{searchText ? `"${searchText}" 검색 결과` : '지금 인기 있는 영화'}</h2>

        <S.MovieList onClick={handleItemClick}>
          {isLoading ? (
            <SkeletonMovieList />
          ) : (
            movies.map((movie, index) => {
              const isLastMovie = index === movies.length - 1;

              return (
                <>
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
                </>
              );
            })
          )}

          {isFetchingNextPage && <SkeletonMovieList />}
        </S.MovieList>
        {searchText && movies.length === 0 && <S.Message>검색 결과가 없습니다.</S.Message>}
      </div>

      {selectedMovieId && <DetailModal selectedMovieId={selectedMovieId} closeModal={closeModal} />}
    </S.MovieListContainer>
  );
};

export default MovieList;
