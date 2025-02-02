import * as S from './styles';

const SkeletonDetailModal = () => {
  return (
    <S.SkeletonModalContainer>
      <S.SkeletonHeader>
        <S.SkeletonText width="40%" height="1.5rem" />
      </S.SkeletonHeader>

      <S.SkeletonContent>
        <S.SkeletonPoster />

        <S.SkeletonRightContent>
          <S.SkeletonShortInfo>
            <S.SkeletonText width="70%" />
          </S.SkeletonShortInfo>

          <S.SkeletonOverview />

          <S.SkeletonMyRatingWrapper>
            <S.SkeletonText height="4rem" />
          </S.SkeletonMyRatingWrapper>
        </S.SkeletonRightContent>
      </S.SkeletonContent>
    </S.SkeletonModalContainer>
  );
};

export default SkeletonDetailModal;
