import styled from 'styled-components';
import media from '../../../styles/mediaQueries';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);
`;

export const Layout = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;

  width: 100%;
  height: 100%;
`;

export const ContentLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 82.6rem;
  height: 57.7rem;

  border-radius: 0.8rem;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.greyScale3};

  ${media.desktop`
      width: 74rem;
      height: 54.4rem;
    `}

  ${media.tablet`
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(-50%);

      width: 100%;
      height: 50%;
    `}
`;
