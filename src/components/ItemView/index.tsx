import {ItemList} from '@components/ItemList';
import {h2Style, itemViewStyle} from './style';

export const ItemView = () => {
  return (
    <main css={itemViewStyle}>
      <h2 css={h2Style}>지금 인기 있는 영화</h2>
      <ItemList />
    </main>
  );
};
