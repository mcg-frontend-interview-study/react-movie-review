import { useSuspenseQuery } from '@tanstack/react-query';
import { getMovie } from '../api/movie';

const useMovie = (movieId: number) => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: ['detail', movieId],
    queryFn: () => getMovie({ movieId }),
  });

  return { movieDetail: data, ...rest };
};

export default useMovie;
