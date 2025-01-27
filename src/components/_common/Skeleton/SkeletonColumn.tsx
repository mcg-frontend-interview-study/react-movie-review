import * as S from './Skeleton.styled';
import SkeletonThumbnail from './SkeletonThumbnail';

interface SkeletonColumnProps {
  count: number;
}

function SkeletonColumn({ count }: SkeletonColumnProps) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <li key={index}>
          <a href="#">
            <S.SkeletonCard>
              <SkeletonThumbnail />
              <S.SkeletonTitle />
              <S.SkeletonScore />
            </S.SkeletonCard>
          </a>
        </li>
      ))}
    </>
  );
}

export default SkeletonColumn;
