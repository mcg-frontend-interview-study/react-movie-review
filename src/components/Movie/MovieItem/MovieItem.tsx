import { Movie } from '../../../types/movie.type';

import * as S from '../Movie.styled';

interface MovieItemProps {
  movie: Movie;
  onClick: (movieId: number) => void;
}

function MovieItem({ movie, onClick }: MovieItemProps) {
  return (
    <li key={movie.id} onClick={() => onClick(movie.id)}>
      <S.ItemCard>
        <S.ItemThumbnail
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          loading="lazy"
          alt={movie.title}
        />
        <S.ItemTitle>{movie.title}</S.ItemTitle>
        <S.ItemScore>
          <img src="./star_filled.png" alt="별점" /> {movie.vote_average}
        </S.ItemScore>
      </S.ItemCard>
    </li>
  );
}

export default MovieItem;
