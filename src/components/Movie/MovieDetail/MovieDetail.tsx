import { TMDB } from '../../../constants/url';
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
  const { updateRating: errorUpdateRating } = useUpdateStars(1);

  const filledStars = Math.floor(rating / 2);
  return (
    <S.Layout>
      <S.TitleBox>
        <S.TitleText>{movieDetail.title}</S.TitleText>
      </S.TitleBox>

      <S.ContentBox>
        <S.ThumbnailImageBox>
          <S.ThumbnailImage
            src={`${TMDB.POSTER_PATH}${movieDetail.poster_path}`}
          />
        </S.ThumbnailImageBox>

        <S.DetailBox>
          <S.DetailContentBox>
            <S.DetailHeaderBox>
              <S.CaptionText>
                {movieDetail.genres.flatMap(genre => genre.name).join(', ')}
              </S.CaptionText>
              <S.StarImage src="./star_filled.png" alt="별점" />
              <S.CaptionText>
                {movieDetail.vote_average.toFixed(1)}
              </S.CaptionText>
            </S.DetailHeaderBox>
            <S.OverviewText>{movieDetail.overview}</S.OverviewText>
          </S.DetailContentBox>

          <S.DetailVoteBox>
            <S.CaptionBoldText>토스트 확인을 위한 별점</S.CaptionBoldText>
            <S.StarImageVoteBox>
              {[...Array(5)].map((_, index) => (
                <button
                  onClick={() => errorUpdateRating({ rating: (index + 1) * 2 })}
                >
                  <S.StarImage
                    key={index}
                    src={
                      index < filledStars
                        ? './star_filled.png'
                        : './star_empty.png'
                    }
                    alt={index < filledStars ? 'filled star' : 'empty star'}
                  />
                </button>
              ))}
            </S.StarImageVoteBox>
            <S.CaptionText>{rating !== 0 && rating}</S.CaptionText>
          </S.DetailVoteBox>

          <S.DetailVoteBox>
            <S.CaptionBoldText>내 별점</S.CaptionBoldText>
            <S.StarImageVoteBox>
              {[...Array(5)].map((_, index) => (
                <button
                  onClick={() => updateRating({ rating: (index + 1) * 2 })}
                >
                  <S.StarImage
                    key={index}
                    src={
                      index < filledStars
                        ? './star_filled.png'
                        : './star_empty.png'
                    }
                    alt={index < filledStars ? 'filled star' : 'empty star'}
                  />
                </button>
              ))}
            </S.StarImageVoteBox>
            <S.CaptionText>{rating !== 0 && rating}</S.CaptionText>
            <S.RatingDescriptionText>
              {RATING_TEXT(rating)}
            </S.RatingDescriptionText>
          </S.DetailVoteBox>
        </S.DetailBox>
      </S.ContentBox>
    </S.Layout>
  );
}

export default MovieDetail;
