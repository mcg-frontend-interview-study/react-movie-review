import {listStyle} from './style';
import {Item} from './Item';
import {ResponseMovieItem} from '@type/tmdb_api_response';

type ItemListProps = {
  movieList: ResponseMovieItem[];
};

export const ItemList = ({movieList}: ItemListProps) => {
  return (
    <ul css={listStyle}>
      {movieList.map(movie => (
        <Item key={movie.id} {...movie} />
      ))}
    </ul>
  );
};
