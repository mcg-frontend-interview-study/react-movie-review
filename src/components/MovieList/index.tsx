import * as S from './styles';
import useGetList from '../../hooks/useGetList';
import MovieItem from '../MovieItem';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import {useAtomValue} from 'jotai';
import {searchTextAtom} from '../../jotai/atoms';
import {Suspense, useState} from 'react';
import DetailModal from '../DetailModal';

const MovieList = () => {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const searchText = useAtomValue(searchTextAtom);
  const {data, hasNextPage, fetchNextPage, isLoading} = useGetList();

  const movies = data.pages.flatMap(page => page.results);

  const lastElementRef = useInfiniteScroll({
    fetchNextPage,
    isLoading,
    isLastPage: !hasNextPage,
  });

  const closeModal = () => setSelectedMovieId(null);

  const handleItemClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const listItem = (event.target as HTMLElement).closest('li');
    if (!listItem) return;

    const id = Number(listItem.id);
    const selectedItem = movies.find(item => item.id === id);

    // 모달 열기
    if (selectedItem) setSelectedMovieId(id);
  };

  return (
    <S.MovieListContainer>
      <h2>{searchText ? `"${searchText}" 검색 결과` : '지금 인기 있는 영화'}</h2>
      <S.MovieList onClick={handleItemClick}>
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
      {selectedMovieId && (
        <Suspense fallback={<div>loading...</div>}>
          <DetailModal selectedMovieId={selectedMovieId} closeModal={closeModal} />
        </Suspense>
      )}
    </S.MovieListContainer>
  );
};

export default MovieList;
