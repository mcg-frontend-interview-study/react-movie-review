import {postMovieScore} from '@apis/movie';
import {QUERY_KEYS} from '@constants/queryKeys';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const usePostMovieScore = () => {
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: postMovieScore,
    onSuccess: data => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.getMovieScore, data.movieId]});
    },
  });

  return {
    postMovieScore: mutate,
  };
};
