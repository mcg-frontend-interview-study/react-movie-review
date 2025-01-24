import {getMatchedMovieList} from '@apis/movie';
import {QUERY_KEYS} from '@constants/queryKeys';
import {useSuspenseInfiniteQuery} from '@tanstack/react-query';

export const useGetMatchedMovieList = (query: string) => {
  const {data, fetchNextPage, isFetchingNextPage} = useSuspenseInfiniteQuery({
    queryKey: [QUERY_KEYS.getMovieList, query],
    queryFn: ({pageParam}) => getMatchedMovieList(pageParam, query),
    initialPageParam: 1,
    getNextPageParam: data => {
      if (data.total_pages < data.page) return null;
      return data.page + 1;
    },
  });

  return {movieList: data.pages.flatMap(page => page.results), fetchNextPage, isFetchingNextPage};
};
