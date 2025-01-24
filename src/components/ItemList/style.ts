import {css} from '@emotion/react';

export const listStyle = css({
  display: 'grid',
  margin: '48px 0',
  gridTemplateColumns: 'repeat(4, 180px)',
  gridColumnGap: '160px',
  gridRowGap: '48px',
});

export const itemCardStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

export const itemThumbnailStyle = css({
  borderRadius: '8px',
  width: '180px',
  height: '270px',
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
