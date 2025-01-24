import {useSuspenseInfiniteQuery} from '@tanstack/react-query';
import {getMovieList} from '../apis/movie';

const useGetList = () => {
  const result = useSuspenseInfiniteQuery({
    queryKey: ['movieList'],
    queryFn: ({pageParam}) => getMovieList({pageParam}),

    initialPageParam: 1,
    getNextPageParam: lastPage => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },

    staleTime: 30 * 60 * 1000, // 30분
  });

  return {...result};
};

export default useGetList;
