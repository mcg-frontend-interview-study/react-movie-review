import styled from 'styled-components';
import media from '../../styles/mediaQueries';

export const ContentLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.6rem;

  padding: 4.8rem 8rem;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const ItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(18.2rem, 1fr));
  grid-column-gap: 6.4rem;
  grid-row-gap: 6.4rem;

  color: ${({ theme }) => theme.colors.white};

  ${media.tablet`
      grid-template-columns: repeat(3, 182px);
    `}
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemThumbnail = styled.img`
  border-radius: 8px;
  width: 100%;
  background-size: contain;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }
`;

export const ItemTitle = styled.p`
  margin-top: 16px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ItemScore = styled.p`
  margin-top: 16px;
  font-size: 1.2rem;
`;
