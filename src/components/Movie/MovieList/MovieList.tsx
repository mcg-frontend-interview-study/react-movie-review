import { useState } from 'react';
import { useModalContext } from '../../../contexts/ModalContext';
import Modal from '../../_common/Modal/Modal';
import * as S from '../Movie.styled';
import MovieDetail from '../MovieDetail/MovieDetail';
import MovieItem from '../MovieItem/MovieItem';
import FetchTargetBox from '../../_common/FetchTargetBox/FetchTargetBox';
import SkeletonColumn from '../../_common/Skeleton/SkeletonColumn';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import useMovieQuery from '../../../hooks/useMovieQuery';

interface MovieListProps {
  keyword: string;
}

function MovieList({ keyword }: MovieListProps) {
  const [selectedMovie, setSelectedMovie] = useState<number>(0);

  const { isOpenModal, openModal, closeModal } = useModalContext();

  const handleModalOpen = (movieId: number) => {
    setSelectedMovie(movieId);
    openModal('movie');
  };

  const {
    movieList,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useMovieQuery({ keyword });

  const { nextFetchTargetRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    movieList,
  });

  return (
    <S.MovieListLayout>
      <S.ItemList>
        {isLoading && <SkeletonColumn count={20} />}
        {movieList.map(movie => (
          <MovieItem movie={movie} key={movie.id} onClick={handleModalOpen} />
        ))}
      </S.ItemList>
      {!isFetchingNextPage && hasNextPage && (
        <FetchTargetBox ref={nextFetchTargetRef} />
      )}

      <Modal onClose={() => closeModal('movie')} isOpen={isOpenModal}>
        <MovieDetail movieId={selectedMovie} />
      </Modal>
    </S.MovieListLayout>
  );
}

export default MovieList;
