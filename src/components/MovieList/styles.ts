import styled from '@emotion/styled';

export const MovieList = styled.ul`
  display: grid;
  margin: 48px 0;
  grid-template-columns: repeat(4, 180px);
  grid-column-gap: 160px;
  grid-row-gap: 48px;

  @media (min-width: 768px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, 150px);
    grid-column-gap: 100px;
  }

  @media (min-width: 440px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 190px);
    grid-column-gap: 70px;
    grid-row-gap: 40px;
  }

  @media (max-width: 439px) {
    grid-template-columns: repeat(1, 230px);
    margin: 3rem auto;
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  height: 85vh;
  width: 100%;
  margin-top: 2.5rem;
`;
