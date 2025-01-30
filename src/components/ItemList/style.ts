import {css} from '@emotion/react';

export const listStyle = css({
  display: 'grid',
  margin: '48px 0',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridColumnGap: 32,
  gridRowGap: 48,

  '@media (max-width: 833px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  '@media (max-width: 450px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

export const itemCardStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

export const itemThumbnailStyle = css({
  borderRadius: '8px',
  width: '100%',
  backgroundSize: 'contain',
});

export const itemTitleStyle = css({
  marginTop: '16px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

export const itemScoreStyle = css({
  marginTop: '16px',
  fontSize: '1.2rem',
  '::after': {
    marginLeft: '8px',
  },
});

export const fetchNextAreaStyle = css({
  width: 10,
  height: 10,
});
