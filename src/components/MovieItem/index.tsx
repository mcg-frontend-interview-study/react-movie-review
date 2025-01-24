import {IMAGE_BASE_URL} from '../../constants/movie';
import filledStar from '../../assets/star_filled.png';
import {Movie} from '../../types/movie';
import * as S from './styles';
import {toOneDecimalPlace} from '../../utils/number';

export type MovieItemProps = Pick<Movie, 'id' | 'title' | 'poster_path' | 'vote_average'>;

const MovieItem = ({id, title, poster_path, vote_average}: MovieItemProps) => (
  <S.MovieItem id={String(id)}>
    <a href="#">
      <S.MovieContent>
        <img src={`${IMAGE_BASE_URL}${poster_path}`} loading="lazy" alt={`${title}-포스터`} />
        <S.Title>{title}</S.Title>
        <S.ScoreContainer>
          <S.Score>{toOneDecimalPlace(vote_average)}</S.Score>
          <S.StarImg src={filledStar} alt="" />
        </S.ScoreContainer>
      </S.MovieContent>
    </a>
  </S.MovieItem>
);

export default MovieItem;
