import { useInfiniteQuery } from '@tanstack/react-query';
import { getSearchedMovies } from '../api/movie';

const useSearchedMovies = (keyword: string) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['popular'],
    queryFn: ({ pageParam = 1 }) =>
      getSearchedMovies({ page: pageParam, keyword }),
    initialPageParam: 1,
    getNextPageParam: data => {
      const nextPage = data.page + 1;
      return nextPage <= data.total_pages ? nextPage : null;
    },
    enabled: !!keyword,
  });

  const movieList = data?.pages.flatMap(page => page.results) || [];

  return { movieList, ...rest };
};

export default useSearchedMovies;
