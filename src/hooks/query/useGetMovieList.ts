import {getMovieList} from '@apis/movie';
import {QUERY_KEYS} from '@constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export const useGetMovieList = () => {
  const {data} = useQuery({
    queryKey: [QUERY_KEYS.getMovieList],
    queryFn: () => getMovieList(1),
  });

  return {movieList: data?.results ?? []};
};
