import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../api/movie';

const usePopularMovies = () => {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: ['popular'],
    queryFn: ({ pageParam = 1 }) => getPopularMovies({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: data => {
      const nextPage = data.page + 1;
      return nextPage <= data.total_pages ? nextPage : undefined;
    },
  });

  const movieList = data.pages.flatMap(page => page.results) || [];

  return { movieList, ...rest };
};

export default usePopularMovies;
