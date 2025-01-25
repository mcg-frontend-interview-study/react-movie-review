import styled from '@emotion/styled';

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 20rem;

  border-radius: 8px;
  background-color: #e0e0e0;
  overflow: hidden;
`;

export const SkeletonThumbnail = styled.div`
  height: 70%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
`;

export const SkeletonText = styled.div`
  height: 1.2rem;
  width: ${(props: {width?: string}) => props.width || '100%'};
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
`;

export const SkeletonScore = styled(SkeletonText)`
  height: 1.2rem;
  width: 50%;
`;

// Keyframes for skeleton loading animation
import {keyframes} from '@emotion/react';

export const skeletonLoading = keyframes`
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
`;
