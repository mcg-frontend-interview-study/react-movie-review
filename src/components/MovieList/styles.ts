import styled from '@emotion/styled';

export const MovieListContainer = styled.section`
  display: flex;

  justify-content: center;

  margin: 0 auto;

  h2 {
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: bold;
    user-select: none;
  }
`;

export const MovieList = styled.ul`
  display: grid;
  margin: 48px 0;
  grid-template-columns: repeat(4, 180px);
  grid-column-gap: 160px;
  grid-row-gap: 48px;

  @media (min-width: 768px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, 120px);
  }

  @media (min-width: 435px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 140px);
    grid-column-gap: 80px;
    grid-row-gap: 32px;
  }

  @media (max-width: 434px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 24px;
  }
`;
