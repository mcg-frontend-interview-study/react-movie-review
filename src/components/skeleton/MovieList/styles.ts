import styled from '@emotion/styled';

export const MovieListContainer = styled.section`
  display: flex;

  justify-content: center;

  margin: 0 auto;
`;

export const Title = styled.div`
  width: 30%;
  height: 4rem;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
`;

export const MovieList = styled.ul`
  display: grid;
  margin: 48px 0;
  grid-template-columns: repeat(4, 180px);
  grid-column-gap: 160px;
  grid-row-gap: 48px;
`;
