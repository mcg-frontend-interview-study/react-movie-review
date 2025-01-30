import {patchMovieScore} from '@apis/movie';
import {QUERY_KEYS} from '@constants/queryKeys';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const usePatchMovieScore = () => {
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: patchMovieScore,
    onSuccess: data => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.getMovieScore, Number(data.movieId)]});
    },
  });

  return {
    patchMovieScore: mutate,
  };
};
