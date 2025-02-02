import {useState} from 'react';

const useMovieDetailModalState = () => {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const closeModal = () => setSelectedMovieId(null);
  const openModal = (movieId: number) => setSelectedMovieId(movieId);

  return {
    selectedMovieId,
    closeModal,
    openModal,
  };
};

export default useMovieDetailModalState;
