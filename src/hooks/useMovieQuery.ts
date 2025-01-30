import usePopularMovies from '../queries/usePopularMovies';
import useSearchedMovies from '../queries/useSearchedMovies';

interface UseMovieQueryProps {
  keyword: string;
}

type MovieQueryKey = 'popular' | 'searched';

const useMovieQuery = ({ keyword }: UseMovieQueryProps) => {
  const queries = {
    popular: {
      condition: keyword.trim() === '',
      hook: usePopularMovies,
    },
    searched: {
      condition: keyword.trim() !== '',
      hook: useSearchedMovies,
    },
  } as const;

  const isMovieQueryKey = (key: string): key is MovieQueryKey => key in queries;

  const activeQueryKey: MovieQueryKey =
    Object.keys(queries).find(
      (key): key is MovieQueryKey =>
        isMovieQueryKey(key) && queries[key].condition,
    ) || 'popular';

  return queries[activeQueryKey].hook(keyword);
};

export default useMovieQuery;
