import {useQuery} from '@tanstack/react-query';
import {getMovieDetail} from '../apis/movie';

const useGetMovieDetail = (movieId: number) => {
  const result = useQuery({
    queryKey: ['movieDetail', movieId],
    queryFn: () => getMovieDetail(movieId),
    staleTime: 24 * 60 * 60 * 1000, // 24시간
  });

  return result;
};

export default useGetMovieDetail;
