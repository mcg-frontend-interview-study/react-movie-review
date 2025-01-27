import { Movie } from '../../../types/movie.type';
import * as S from '../Movie.styled';
import useImageLoader from '../../../hooks/useImageLoader';
import SkeletonThumbnail from '../../_common/Skeleton/SkeletonThumbnail';

interface MovieItemProps {
  movie: Movie;
  onClick: (movieId: number) => void;
}

function MovieItem({ movie, onClick }: MovieItemProps) {
  const { imageUrl, isImageLoaded, handleImageLoad } = useImageLoader(
    movie.poster_path,
  );

  return (
    <li key={movie.id} onClick={() => onClick(movie.id)}>
      <S.ItemCard>
        {!isImageLoaded && !imageUrl && <SkeletonThumbnail />}
        {imageUrl && (
          <S.ItemThumbnail
            src={imageUrl}
            loading="lazy"
            alt={movie.title}
            onLoad={handleImageLoad}
          />
        )}

        <S.ItemTitle>{movie.title}</S.ItemTitle>
        <S.ItemScoreBox>
          <S.ItemScore>{movie.vote_average} </S.ItemScore>
          <S.StarImage src="./star_filled.png" alt="별점" />
        </S.ItemScoreBox>
      </S.ItemCard>
    </li>
  );
}

export default MovieItem;
