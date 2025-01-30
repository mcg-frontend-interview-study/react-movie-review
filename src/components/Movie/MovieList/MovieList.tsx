import { useEffect, useRef, useState } from 'react';
import { useModalContext } from '../../../contexts/ModalContext';
import usePopularMovies from '../../../queries/usePopularMovies';
import useSearchedMovies from '../../../queries/useSearchedMovies';
import Modal from '../../_common/Modal/Modal';
import * as S from '../Movie.styled';
import MovieDetail from '../MovieDetail/MovieDetail';
import MovieItem from '../MovieItem/MovieItem';
import FetchTargetBox from '../../_common/FetchTargetBox/FetchTargetBox';
import SkeletonColumn from '../../_common/Skeleton/SkeletonColumn';

interface MovieListProps {
  keyword: string;
}

type MovieQueryKey = 'popular' | 'searched';

function MovieList({ keyword }: MovieListProps) {
  const [selectedMovie, setSelectedMovie] = useState<number>(0);
  const nextFetchTargetRef = useRef<HTMLDivElement | null>(null);

  const { isOpenModal, openModal, closeModal } = useModalContext();

  const handleModalOpen = (movieId: number) => {
    setSelectedMovie(movieId);
    openModal('movie');
  };

  const queries = {
    popular: {
      condition: keyword.trim() === '',
      hook: usePopularMovies,
    },
    searched: {
      condition: keyword.trim() !== '',
      hook: useSearchedMovies,
    },
  } as const;

  const isMovieQueryKey = (key: string): key is MovieQueryKey => key in queries;

  const activeQueryKey: MovieQueryKey =
    Object.keys(queries).find(
      (key): key is MovieQueryKey =>
        isMovieQueryKey(key) && queries[key].condition,
    ) || 'popular';

  const {
    movieList,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = queries[activeQueryKey].hook(keyword);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const fetchCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(fetchCallback, options);

    if (nextFetchTargetRef.current) {
      observer.observe(nextFetchTargetRef.current);
    }

    return () => {
      if (nextFetchTargetRef.current) {
        observer.unobserve(nextFetchTargetRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage, movieList]);

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
