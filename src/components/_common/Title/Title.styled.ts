import styled from 'styled-components';
import { DISPLAY_SIZE } from '../../../constants/displaySize';
import media from '../../../styles/mediaQueries';

export const TitleText = styled.h2`
  width: 100%;
  max-width: ${DISPLAY_SIZE.desktop}px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.font.title};

  ${({ theme }) => media.tablet`
    ${theme.font.smallTitle};
    `}
`;
