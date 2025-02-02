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

    @media (min-width: 435px) and (max-width: 767px) {
      font-size: 1.8rem;
    }

    @media (max-width: 434px) {
      font-size: 1.6rem;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const Message = styled.p`
  font-size: 1.2rem;
  height: 85vh;
  width: 100%;
  margin-top: 2.5rem;
`;
