import * as S from './styles';

import {useAtomValue} from 'jotai';
import {searchTextAtom} from '../../jotai/atoms';
import DetailModal from '../DetailModal';

import useMovieDetailModalState from '../../hooks/useMovieDetailModalState';
import MovieList from '../MovieList';

const MovieListContainer = () => {
  const searchText = useAtomValue(searchTextAtom);
  const {selectedMovieId, openModal, closeModal} = useMovieDetailModalState();

  return (
    <S.MovieListContainer>
      <S.ContentContainer>
        <h2>{searchText ? `"${searchText}" 검색 결과` : '지금 인기 있는 영화'}</h2>
        <MovieList openModal={openModal} />
      </S.ContentContainer>

      {selectedMovieId && <DetailModal selectedMovieId={selectedMovieId} closeModal={closeModal} />}
    </S.MovieListContainer>
  );
};

export default MovieListContainer;
