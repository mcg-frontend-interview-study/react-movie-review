import {getMovieList} from '@apis/movie';
import {QUERY_KEYS} from '@constants/queryKeys';
import {useSuspenseInfiniteQuery} from '@tanstack/react-query';

export const useGetMovieList = () => {
  const {data, fetchNextPage, isFetchingNextPage} = useSuspenseInfiniteQuery({
    queryKey: [QUERY_KEYS.getMovieList],
    queryFn: ({pageParam}) => getMovieList(pageParam),
    initialPageParam: 1,
    getNextPageParam: data => {
      if (data.total_pages < data.page) return null;
      return data.page + 1;
    },
  });

  return {movieList: data.pages.flatMap(page => page.results), fetchNextPage, isFetchingNextPage};
};
