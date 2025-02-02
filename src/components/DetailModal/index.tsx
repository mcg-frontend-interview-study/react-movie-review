import * as S from './styles';
import Portal from '../common/Portal';
import ModalBackground from '../common/ModalBackground';
import useGetMovieDetail from '../../hooks/useGetMovieDetail';
import {IMAGE_BASE_URL} from '../../constants/movie';
import {toOneDecimalPlace} from '../../utils/number';
import filledStar from '../../assets/star_filled.png';
import MyRating from '../MyRating';

interface DetailModalProps {
  selectedMovieId: number;
  closeModal: () => void;
}

const DetailModal = ({selectedMovieId, closeModal}: DetailModalProps) => {
  const {data} = useGetMovieDetail(selectedMovieId);

  const {poster_path, vote_average, title, overview, genres} = data;

  return (
    <Portal>
      <ModalBackground closeModal={closeModal}>
        <S.ModalContainer>
          <S.Header>
            <h2>{title}</h2>
            <button type="button" onClick={closeModal}>
              닫기
            </button>
          </S.Header>

          <S.Content>
            <S.Poster src={`${IMAGE_BASE_URL}${poster_path}`} alt={`${title} 포스터`} />

            <S.RightContent>
              <S.ShortInfo>
                <S.Genres>{genres.map(genre => genre.name).join(', ')}</S.Genres>
                <S.Rate>
                  <span>{toOneDecimalPlace(vote_average)}</span>
                  <img src={filledStar} alt="" />
                </S.Rate>
              </S.ShortInfo>

              <S.Overview>{overview}</S.Overview>

              <S.MyRatingWrapper>
                <MyRating movieId={selectedMovieId} />
              </S.MyRatingWrapper>
            </S.RightContent>
          </S.Content>
        </S.ModalContainer>
      </ModalBackground>
    </Portal>
  );
};

export default DetailModal;
