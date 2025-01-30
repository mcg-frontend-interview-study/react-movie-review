import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SkeletonThumbnail = styled.div<{ $width: 'full' | 'half' }>`
  width: ${({ $width }) => ($width === 'full' ? '100%' : '29.2rem')};
  aspect-ratio: 2 / 3;
  border-radius: 8px;
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: ${skeletonAnimation} 5s infinite ease-out;
`;

export const SkeletonTitle = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 8px;
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: ${skeletonAnimation} 5s infinite ease-out;
`;

export const SkeletonScore = styled.div`
  width: 50%;
  height: 20px;
  border-radius: 8px;
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: ${skeletonAnimation} 5s infinite ease-out;
`;

export const SkeletonModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 3.2rem;
`;

export const SkeletonContentBox = styled.div`
  width: 55%;
`;
