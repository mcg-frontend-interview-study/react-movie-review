import styled from 'styled-components';
import { ButtonWidth } from './Button';

export const ButtonStyle = styled.button<{ $width: ButtonWidth }>`
  width: ${props => (props.$width === 'full' ? '100%' : '50%')};
  padding: 1rem 0;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.font.button}
`;
