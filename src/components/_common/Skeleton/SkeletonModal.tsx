import * as S from './Skeleton.styled';

function SkeletonModal() {
  return (
    <S.SkeletonModal>
      <S.SkeletonThumbnail $width="half" />
      <S.SkeletonContentBox>
        <S.SkeletonCard>
          <S.SkeletonTitle />
          <S.SkeletonTitle />
          <S.SkeletonScore />
          <S.SkeletonScore />
        </S.SkeletonCard>
      </S.SkeletonContentBox>
    </S.SkeletonModal>
  );
}

export default SkeletonModal;
