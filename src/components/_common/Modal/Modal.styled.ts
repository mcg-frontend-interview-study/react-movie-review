import styled from 'styled-components';

export const Backdrop = styled.div({
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 100,

  width: '100%',
  height: '100vh',
});

export const Layout = styled.div`
  position: 'fixed',
  top: 0,
  zIndex: 100,

  width: '100%',
`;
