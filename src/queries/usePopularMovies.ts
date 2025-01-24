import { useSuspenseQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../api/movie';

const usePopularMovies = () => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: ['popular'],
    queryFn: getPopularMovies,
  });

  const movieList = data.results;

  return { movieList, ...rest };
};

export default usePopularMovies;
