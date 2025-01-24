import {useSuspenseInfiniteQuery} from '@tanstack/react-query';
import {getMovieList, getSearchedMovieList} from '../apis/movie';
import {useAtomValue} from 'jotai';
import {searchTextAtom} from '../jotai/atoms';

const useGetList = () => {
  const searchText = useAtomValue(searchTextAtom);

  const result = useSuspenseInfiniteQuery({
    queryKey: searchText ? ['searchedMovieList', searchText] : ['movieList'],
    queryFn: ({pageParam = 1}) =>
      searchText ? getSearchedMovieList({pageParam, title: searchText}) : getMovieList({pageParam}),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
    staleTime: 30 * 60 * 1000, // 30분
  });

  return result;
};

export default useGetList;
