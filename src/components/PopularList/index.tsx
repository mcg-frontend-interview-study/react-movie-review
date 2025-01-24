import {ItemList} from '@components/ItemList';
import {InfinityScrollPlugin} from '@components/ItemList/InfinityScrollPlugin';
import {useGetPopularMovieList} from '@hooks/query/useGetPopularMovieList';

export const PopularList = () => {
  const {movieList, fetchNextPage} = useGetPopularMovieList();

  return (
    <InfinityScrollPlugin callback={fetchNextPage}>
      <ItemList movieList={movieList} />
    </InfinityScrollPlugin>
  );
};
