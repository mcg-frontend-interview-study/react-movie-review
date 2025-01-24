import { useState } from 'react';
import { useModalContext } from '../../../contexts/ModalContext';
import usePopularMovies from '../../../queries/usePopularMovies';
import useSearchedMovies from '../../../queries/useSearchedMovies';
import Button from '../../_common/Button/Button';
import Modal from '../../_common/Modal/Modal';
import * as S from '../Movie.styled';
import MovieDetail from '../MovieDetail/MovieDetail';
import MovieItem from '../MovieItem/MovieItem';

interface MovieListProps {
  keyword: string;
}

function MovieList({ keyword }: MovieListProps) {
  const [selectedMovie, setSelectedMovie] = useState<number>(0);
  const { isOpenModal, openModal, closeModal } = useModalContext();
  console.log(selectedMovie);

  const handleModalOpen = (movieId: number) => {
    setSelectedMovie(movieId);
    openModal('movie');
  };

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
          <MovieItem movie={movie} key={movie.id} onClick={handleModalOpen} />
        ))}
      </S.ItemList>
      {hasNextPage && (
        <Button
          content={isFetchingNextPage ? '로딩 중...' : '더보기'}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        />
      )}

      {isOpenModal && (
        <Modal onClose={() => closeModal('movie')} isOpen={isOpenModal}>
          <MovieDetail movieId={selectedMovie} />
        </Modal>
      )}
    </>
  );
}

export default MovieList;
