import styled from '@emotion/styled';

export const MovieListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;

  h2 {
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
`;
