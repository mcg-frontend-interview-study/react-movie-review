import {css} from '@emotion/react';

export const backdropStyle = css({
  position: 'fixed',
  inset: 0,
  zIndex: 5,
  background: 'rgba(0, 0, 0, 0.6)',
});

export const modalStyle = css({
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  width: 740,
  minHeight: 300,
  padding: 0,
  zIndex: 6,
  background: '#212122',
  borderRadius: 8,

  '@media (min-width: 833px)': {
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'translate3d(0, 0, 0)',
  },
});

export const closeButtonStyle = css({
  position: 'absolute',
  top: 12,
  right: 32,
  zIndex: 3,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});
