import styled from '@emotion/styled';

export const MovieItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Thumbnail = styled.img`
  border-radius: 8px;

  background-size: contain;
  width: 100%;
  height: 70%;
`;

export const Title = styled.p`
  margin-top: 16px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ScoreContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-contents: center;

  margin-top: 16px;
  font-size: 1.2rem;

  ::after {
    margin-left: 8px;
  }
`;

export const Score = styled.p``;

export const StarImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
