import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import * as S from '.././../DetailModal/styles';

const skeletonLoading = keyframes`
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
`;

export const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
`;

export const SkeletonText = styled(SkeletonBase)<{width?: string; height?: string}>`
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || '1rem'};
  border-radius: 4px;
`;

export const SkeletonButton = styled(SkeletonText)`
  border-radius: 0.5rem;
`;

export const SkeletonPoster = styled(SkeletonBase)`
  width: 45%;
  height: 22rem;
  border-radius: 8px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SkeletonRate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkeletonIcon = styled(SkeletonBase)`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;

export const SkeletonOverview = styled(SkeletonBase)`
  height: 10rem;
  width: 100%;
  border-radius: 4px;
`;

/** ✅ 기존 스타일을 유지하면서 스켈레톤을 적용 */
export const SkeletonModalContainer = styled(S.ModalContainer)`
  background-color: black;
`;

export const SkeletonHeader = styled(S.Header)`
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
  margin-bottom: 0.8rem;
  border-bottom: 0.1rem solid gray;

  & > h2 {
    width: 40%;
    height: 1.5rem;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    border-radius: 4px;
  }

  & > button {
    width: 3rem;
    height: 1.2rem;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    border-radius: 0.5rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const SkeletonContent = styled(S.Content)`
  justify-content: space-between;
`;
export const SkeletonRightContent = styled(S.RightContent)`
  width: 100%;

  @media (min-width: 440px) and (max-width: 767px) {
    gap: 1.8rem;
  }
`;
export const SkeletonShortInfo = styled(S.ShortInfo)``;
export const SkeletonOverviewWrapper = styled(S.Overview)``;
export const SkeletonMyRatingWrapper = styled(S.MyRatingWrapper)``;
