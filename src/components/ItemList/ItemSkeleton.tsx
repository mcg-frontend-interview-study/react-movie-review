import {skeletonStyle} from './style';

export const ItemSkeleton = () => {
  return Array.from({length: 20}).map((_, index) => <div key={index} css={skeletonStyle} />);
};
