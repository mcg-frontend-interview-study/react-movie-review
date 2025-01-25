import styled from 'styled-components';
import { DISPLAY_SIZE } from '../../../constants/displaySize';

export const TitleText = styled.h2`
  width: 100%;
  max-width: ${DISPLAY_SIZE.desktop};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.font.title};
`;
