import {getMovieScore} from '@apis/movie';
import {QUERY_KEYS} from '@constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export const useGetMovieScore = (id: number | null) => {
  const {data} = useQuery({
    queryKey: [QUERY_KEYS.getMovieScore, id],
    queryFn: () => getMovieScore(id ?? 0),
    enabled: id !== null,
  });

  return {id: data?.id ?? -1, vote: data?.vote ?? 0};
};
