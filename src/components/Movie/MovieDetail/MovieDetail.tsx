import useMovie from '../../../queries/useMovie';
import useRating from '../../../queries/useRating';
import useUpdateStars from '../../../queries/useUpdateStars';
import * as S from './MovieDetail.styled';

interface MovieDetailProps {
  movieId: number;
}

const RATING_TEXT = (rating: number) => {
  if (rating === 10) {
    return '최고예요';
  } else if (rating >= 8) {
    return '좋아요';
  } else if (rating >= 6) {
    return '나쁘지 않아요';
  } else if (rating >= 4) {
    return '그냥 그래요';
  } else if (rating >= 2) {
    return '별로예요';
  }
  return '아직 점수를 매기지 않았어요.';
};

function MovieDetail({ movieId }: MovieDetailProps) {
  const { movieDetail } = useMovie(movieId);
  const { rating } = useRating(movieId);
  const { updateRating } = useUpdateStars(movieId);

  const filledStars = Math.floor(rating / 2);

  return (
    <S.Layout>
      <S.TitleText>{movieDetail.title}</S.TitleText>
      <S.TitleText>{movieDetail.overview}</S.TitleText>
      <S.TitleText>{movieDetail.vote_average}</S.TitleText>
      <S.TitleText>
        {movieDetail.genres.flatMap(genre => genre.name).join(', ')}
      </S.TitleText>
      {[...Array(5)].map((_, index) => (
        <S.StarImage
          key={index}
          src={
            index < filledStars
              ? './templates/star_filled.png'
              : './templates/star_empty.png'
          }
          alt={index < filledStars ? 'filled star' : 'empty star'}
          onClick={() => updateRating({ rating: (index + 1) * 2 })}
          style={{ cursor: 'pointer' }}
        />
      ))}
      <S.Rating>{rating}</S.Rating>
      <S.Rating>{RATING_TEXT(rating)}</S.Rating>
    </S.Layout>
  );
}

export default MovieDetail;
