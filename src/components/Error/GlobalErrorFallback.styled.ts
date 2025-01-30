import styled from 'styled-components';

export const Text = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
`;
