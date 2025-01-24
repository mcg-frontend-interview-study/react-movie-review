import {useGetMovieList} from '@hooks/query/useGetMovieList';
import {listStyle} from './style';
import {Item} from './Item';
import {InfinityScrollPlugin} from './InfinityScrollPlugin';

export const ItemList = () => {
  const {movieList, fetchNextPage} = useGetMovieList();

  return (
    <InfinityScrollPlugin callback={fetchNextPage}>
      <ul css={listStyle}>
        {movieList.map(movie => (
          <Item key={movie.id} {...movie} />
        ))}
      </ul>
    </InfinityScrollPlugin>
  );
};
