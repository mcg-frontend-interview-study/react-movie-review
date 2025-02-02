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
