import {ItemList} from '@components/ItemList';
import {InfinityScrollPlugin} from '@components/ItemList/InfinityScrollPlugin';
import {Loading} from '@components/Loading';
import {useGetPopularMovieList} from '@hooks/query/useGetPopularMovieList';

export const PopularList = () => {
  const {movieList, fetchNextPage, isFetchingNextPage} = useGetPopularMovieList();

  return (
    <InfinityScrollPlugin callback={fetchNextPage}>
      <ItemList movieList={movieList} />
      {isFetchingNextPage && <Loading />}
    </InfinityScrollPlugin>
  );
};
