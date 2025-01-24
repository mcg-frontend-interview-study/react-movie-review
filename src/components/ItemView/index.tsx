import {ItemList} from '@components/ItemList';
import {h2Style, itemViewStyle} from './style';
import {Suspense} from 'react';
import {ItemSkeleton} from '@components/ItemList/ItemSkeleton';

export const ItemView = () => {
  return (
    <main css={itemViewStyle}>
      <h2 css={h2Style}>지금 인기 있는 영화</h2>
      <Suspense fallback={<ItemSkeleton />}>
        <ItemList />
      </Suspense>
    </main>
  );
};
