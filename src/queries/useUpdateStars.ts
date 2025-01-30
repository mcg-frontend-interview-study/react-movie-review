import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import { updateRating } from '../api/movie';
import { useToast } from '../hooks/useToast';

const useUpdateStars = (movieId: number) => {
  const { showToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: ({ rating }: { rating: number }) =>
      updateRating({ rating, movieId }),
    onSuccess: ({ rating }: { rating: number }) => {
      queryClient.setQueryData(['rating', movieId], () => rating);
      showToast('별점이 업데이트되었습니다!', 'success');
    },
    onError: () => {
      showToast('별점 업데이트에 실패했습니다.', 'error');
    },
  });

  return { updateRating: mutate };
};

export default useUpdateStars;
