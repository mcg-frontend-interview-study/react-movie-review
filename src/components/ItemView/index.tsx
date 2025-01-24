import {h2Style, itemViewStyle} from './style';
import {Suspense} from 'react';
import {ItemSkeleton} from '@components/ItemList/ItemSkeleton';
import {useSearchContext} from '@utils/SearchContext';
import {PopularList} from '@components/PopularList';

export const ItemView = () => {
  const {keyword} = useSearchContext();

  const headerText = keyword.trim() === '' ? '지금 인기 있는 영화' : `"${keyword}" 검색 결과`;

  return (
    <main css={itemViewStyle}>
      <h2 css={h2Style}>{headerText}</h2>
      <Suspense fallback={<ItemSkeleton />}>
        <PopularList />
      </Suspense>
    </main>
  );
};
