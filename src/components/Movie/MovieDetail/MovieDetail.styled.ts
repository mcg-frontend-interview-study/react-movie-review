import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
  max-width: 82.6rem;
  max-height: 57.7rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.greyScale2};
`;

export const TitleText = styled.p`
  ${({ theme }) => theme.font.body};
`;

export const Rating = styled.p`
  ${({ theme }) => theme.font.body};
`;

export const StarImage = styled.img``;
