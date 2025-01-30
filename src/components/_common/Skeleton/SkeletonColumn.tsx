import * as S from './Skeleton.styled';

interface SkeletonColumnProps {
  count: number;
}

function SkeletonColumn({ count }: SkeletonColumnProps) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <li key={index}>
          <S.SkeletonCard>
            <S.SkeletonThumbnail $width="full" />
            <S.SkeletonTitle />
            <S.SkeletonScore />
          </S.SkeletonCard>
        </li>
      ))}
    </>
  );
}

export default SkeletonColumn;
