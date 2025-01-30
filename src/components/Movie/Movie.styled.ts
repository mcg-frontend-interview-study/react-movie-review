import styled from 'styled-components';
import media from '../../styles/mediaQueries';
import { DISPLAY_SIZE } from '../../constants/displaySize';

export const ContentLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.6rem;

  padding: 4.8rem 8rem;

  width: 100%;
  height: 100%;

  overflow: hidden;

  ${media.mobile`
      padding: 4rem 3.7rem;
      min-width: ${DISPLAY_SIZE.min}px;
    `}
`;

export const MovieListLayout = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${DISPLAY_SIZE.desktop}px;

  margin: 0 auto;
`;

export const ItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 6.4rem;
  grid-row-gap: 6.4rem;

  color: ${({ theme }) => theme.colors.white};

  ${media.desktop`
      grid-template-columns: repeat(3, 1fr);
    `}

  ${media.tablet`
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 3.2rem;
      grid-row-gap: 3.2rem;
    `}
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
`;

export const ItemThumbnail = styled.img`
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 2 / 3;
  background-size: contain;

  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }
`;

export const ItemTitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;

  ${({ theme }) => theme.font.body}
`;

export const ItemScoreBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const ItemScore = styled.p`
  ${({ theme }) => theme.font.body}
  font-weight: 500;
`;

export const StarImage = styled.img`
  width: 2rem;
  height: 2rem;
`;
