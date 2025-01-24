import {listStyle} from './style';
import {Item} from './Item';
import {ResponseMovieItem} from '@type/tmdb_api_response';
import {Modal} from '@components/Modal';
import {useModalContext} from '@utils/ModalContext';

type ItemListProps = {
  movieList: ResponseMovieItem[];
};

export const ItemList = ({movieList}: ItemListProps) => {
  const {handleModalOpen} = useModalContext();

  const getMovieId = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const targetId = (event.target as HTMLElement).closest('li')?.id;

    if (targetId) {
      handleModalOpen();
    }
  };

  return (
    <ul css={listStyle} onClick={getMovieId}>
      {movieList.map(movie => (
        <Item key={movie.id} {...movie} />
      ))}
      <Modal />
    </ul>
  );
};
