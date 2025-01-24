import useMovie from '../../../queries/useMovie';
import * as S from './MovieDetail.styled';

interface MovieDetailProps {
  movieId: number;
}

function MovieDetail({ movieId }: MovieDetailProps) {
  const { movieDetail } = useMovie(movieId);
  console.log(movieId, movieDetail);

  return <S.Layout>{movieDetail.title}</S.Layout>;
}

export default MovieDetail;
