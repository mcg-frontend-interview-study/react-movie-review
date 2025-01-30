import { useInfiniteQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../api/movie';

const usePopularMovies = (keyword: string) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['popular'],
    queryFn: ({ pageParam = 1 }) => getPopularMovies({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: data => {
      const nextPage = data.page + 1;
      return nextPage <= data.total_pages ? nextPage : null;
    },
    enabled: keyword.trim() === '',
  });

  const movieList = data?.pages.flatMap(page => page.results) || [];

  return { movieList, ...rest };
};

export default usePopularMovies;
