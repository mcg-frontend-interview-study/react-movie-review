import {css, keyframes} from '@emotion/react';

export const containerStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: 60,
});

const spinnerKeyframe = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const spinnerStyle = css({
  width: 40,
  height: 40,
  border: `4px solid rgba(0, 0, 0, 0.1)`,
  borderTopColor: '#3498db',
  borderRadius: '50%',
  animation: `${spinnerKeyframe} 1s linear infinite`,
});
