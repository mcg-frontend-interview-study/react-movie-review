import styled from 'styled-components';

export const ItemList = styled.ul`
  display: grid;
  margin: 48px 0;
  grid-template-columns: repeat(4, 180px);
  grid-column-gap: 160px;
  grid-row-gap: 48px;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemThumbnail = styled.img`
  border-radius: 8px;
  width: 180px;
  height: 270px;
  background-size: contain;
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
