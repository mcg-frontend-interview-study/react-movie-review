import {ItemList} from '@components/ItemList';
import {InfinityScrollPlugin} from '@components/ItemList/InfinityScrollPlugin';
import {useGetMovieList} from '@hooks/query/useGetMovieList';

export const PopularList = () => {
  const {movieList, fetchNextPage} = useGetMovieList();

  return (
    <InfinityScrollPlugin callback={fetchNextPage}>
      <ItemList movieList={movieList} />
    </InfinityScrollPlugin>
  );
};
