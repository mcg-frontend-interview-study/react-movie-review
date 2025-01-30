import {css, Theme} from '@emotion/react';

export const detailContainerStyle = (backdropPath: string) =>
  css({
    position: 'relative',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: 'none',
    borderRadius: '8px',
    backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL_PREFIX + backdropPath})`,
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: '8px',
    },
  });

export const detailHeaderStyle = css({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '60px',
  marginBottom: 0,
  backgroundColor: 'transparent',
});

export const h2Style = (theme: Theme) =>
  css({
    ...theme.typography.subtitle,
  });

export const pStyle = (theme: Theme) =>
  css({
    ...theme.typography.body,
  });

export const detailBodyStyle = css({
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
  width: '100%',
  padding: '36px 32px 48px',
  columnGap: '32px',
});

export const posterStyle = css({
  width: '40%',
  height: '400px',
  '@media (max-width: 833px)': {
    display: 'none',
  },
});

export const detailContentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
});

export const movieSummaryStyle = css({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '16px',
});

export const voteAverageStyle = (theme: Theme) => [
  css({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  }),
  pStyle(theme),
];

export const outlineStyle = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  columnGap: '16px',
});

export const overviewStyle = (theme: Theme) => [
  css({
    '@media (max-width: 833px)': {
      whiteSpace: 'normal',
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },
  }),
  pStyle(theme),
];

export const voteMyRateStyle = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '16px',
  marginTop: '46px',
  columnGap: '12px',
  background: '#383839',
  borderRadius: '16px',
  '@media (max-width: 833px)': {
    justifyContent: 'center',
  },
});
