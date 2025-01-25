import MovieItem from '../MovieItem';
import * as S from './styles';

const DEFAULT_PAGE_SIZE = 20;

interface SkeletonMovieListProps {
  length?: number;
}

const SkeletonMovieList = ({length = DEFAULT_PAGE_SIZE}: SkeletonMovieListProps) => {
  return (
    <>
      {Array.from({length: length}).map((_, index) => (
        <MovieItem key={`skeleton-${index}`} />
      ))}
    </>
  );
};

export default SkeletonMovieList;
