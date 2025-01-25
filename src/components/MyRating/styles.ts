import styled from '@emotion/styled';

export const MyRating = styled.article`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  height: 5rem;
  background-color: #292929;
  border-radius: 0.6rem;
`;

export const Title = styled.span`
  font-weight: bold;
`;

export const StarButtonContainer = styled.div`
  gap: 0.4rem;
`;

export const RateDescription = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RateNumber = styled.span`
  width: 1rem;
`;

export const RateText = styled.span`
  width: 5rem;
`;
