import { useSuspenseQuery } from '@tanstack/react-query';
import { getRating } from '../api/movie';

const useRating = (movieId: number) => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: ['rating', movieId],
    queryFn: () => getRating({ movieId }),
  });

  return { rating: data, ...rest };
};

export default useRating;
