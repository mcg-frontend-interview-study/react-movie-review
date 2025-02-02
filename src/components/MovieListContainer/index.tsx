import * as S from './styles';

import {useAtomValue} from 'jotai';
import {searchTextAtom} from '../../jotai/atoms';
import DetailModal from '../DetailModal';

import useMovieDetailModalState from '../../hooks/useMovieDetailModalState';
import MovieList from '../MovieList';
import {Suspense} from 'react';
import SkeletonDetailModal from '../skeleton/DetailModal';

const MovieListContainer = () => {
  const searchText = useAtomValue(searchTextAtom);
  const {selectedMovieId, openModal, closeModal} = useMovieDetailModalState();

  return (
    <S.MovieListContainer>
      <S.ContentContainer>
        <h2>{searchText ? `"${searchText}" 검색 결과` : '지금 인기 있는 영화'}</h2>
        <MovieList openModal={openModal} />
      </S.ContentContainer>

      <Suspense fallback={<SkeletonDetailModal />}>
        {selectedMovieId && <DetailModal selectedMovieId={selectedMovieId} closeModal={closeModal} />}
      </Suspense>
    </S.MovieListContainer>
  );
};

export default MovieListContainer;
