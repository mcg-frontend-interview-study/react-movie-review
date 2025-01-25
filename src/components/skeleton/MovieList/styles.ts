import styled from '@emotion/styled';

export const MovieListContainer = styled.section`
  display: flex;

  justify-content: center;

  margin: 0 auto;
`;

export const MovieList = styled.ul`
  display: grid;
  margin: 48px 0;
  grid-template-columns: repeat(4, 180px);
  grid-column-gap: 160px;
  grid-row-gap: 48px;

  @media (min-width: 768px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, 140px);
    grid-column-gap: 100px;
  }

  @media (min-width: 435px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 150px);
    grid-column-gap: 90px;
    grid-row-gap: 45px;
  }

  @media (max-width: 434px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 24px;
  }
`;
