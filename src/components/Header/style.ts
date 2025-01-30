import {css} from '@emotion/react';

export const headerStyle = css({
  width: '100%',
  height: 72,
  backgroundColor: '#222',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  borderBottom: '1px solid white',
  marginBottom: 48,
});

export const h1Style = css({
  cursor: 'pointer',
  userSelect: 'none',
  fontSize: '2rem',
  fontWeight: 'bold',
  letterSpacing: '-0.1rem',
  color: '#f33f3f',
});
