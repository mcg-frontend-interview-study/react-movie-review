import styled from 'styled-components';

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

  width: 100%;
  height: 100%;
  max-width: 82.6rem;
  max-height: 57.7rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.greyScale2};
`;
