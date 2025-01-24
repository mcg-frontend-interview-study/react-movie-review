import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import { updateRating } from '../api/movie';

const useUpdateStars = (movieId: number) => {
  const { mutate } = useMutation({
    mutationFn: ({ rating }: { rating: number }) =>
      updateRating({ rating, movieId }),
    onSuccess: ({ rating }: { rating: number }) => {
      queryClient.setQueryData(['rating', movieId], () => rating);
    },
  });

  return { updateRating: mutate };
};

export default useUpdateStars;
