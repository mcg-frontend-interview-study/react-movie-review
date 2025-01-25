import * as S from './styles';

const SkeletonMovieItem = () => (
  <S.SkeletonContainer>
    <S.SkeletonThumbnail />
    <S.SkeletonText width="80%" />
    <S.SkeletonScore />
  </S.SkeletonContainer>
);

export default SkeletonMovieItem;
