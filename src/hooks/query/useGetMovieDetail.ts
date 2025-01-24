import {getMovieDetail} from '@apis/movie';
import {QUERY_KEYS} from '@constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export const useGetMovieDetail = (id: number | null) => {
  const {data} = useQuery({
    queryKey: [QUERY_KEYS.getMovieDetail, id],
    queryFn: () => getMovieDetail(id ?? 0),
    enabled: id !== null,
  });

  return {detail: data};
};
