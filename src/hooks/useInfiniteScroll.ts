import { useEffect, useRef } from 'react';
import { Movie } from '../types/movie.type';

interface UseInfiniteScrollProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  movieList: Movie[];
}

const useInfiniteScroll = ({
  fetchNextPage,
  hasNextPage,
  movieList,
}: UseInfiniteScrollProps) => {
  const nextFetchTargetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const fetchCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(fetchCallback, options);

    if (nextFetchTargetRef.current) {
      observer.observe(nextFetchTargetRef.current);
    }

    return () => {
      if (nextFetchTargetRef.current) {
        observer.unobserve(nextFetchTargetRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage, movieList]);

  return { nextFetchTargetRef };
};

export default useInfiniteScroll;
