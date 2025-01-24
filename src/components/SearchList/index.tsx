import {ItemList} from '@components/ItemList';
import {InfinityScrollPlugin} from '@components/ItemList/InfinityScrollPlugin';
import {useGetMatchedMovieList} from '@hooks/query/useGetMatchedMovieList';

type SearchListProps = {
  keyword: string;
};

export const SearchList = ({keyword}: SearchListProps) => {
  const {movieList, fetchNextPage} = useGetMatchedMovieList(keyword);

  return (
    <InfinityScrollPlugin callback={fetchNextPage}>
      <ItemList movieList={movieList} />
    </InfinityScrollPlugin>
  );
};
