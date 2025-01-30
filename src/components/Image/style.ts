import {css, keyframes} from '@emotion/react';

export const containerStyle = css({
  position: 'relative',
});

const skeletonAnimation = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

export const skeletonStyle = (width?: string | number, height?: string | number) =>
  css({
    width: width ?? '100%',
    height: height ?? '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0)',
    backgroundSize: '400%',
    animation: `${skeletonAnimation} 5s infinite ease-out`,
    borderRadius: '8px',
  });
