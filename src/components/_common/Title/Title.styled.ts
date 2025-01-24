import styled from 'styled-components';

export const TitleText = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.font.title};
`;
