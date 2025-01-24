import {useGetMovieList} from '@hooks/query/useGetMovieList';
import {listStyle} from './style';
import {Item} from './Item';

export const ItemList = () => {
  const {movieList} = useGetMovieList();

  return (
    <ul css={listStyle}>
      {movieList.map(movie => (
        <Item key={movie.id} {...movie} />
      ))}
    </ul>
  );
};
