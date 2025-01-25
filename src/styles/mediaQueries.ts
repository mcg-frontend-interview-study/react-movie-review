import { css, type CSSObject, type Interpolation } from 'styled-components';

export type Breakpoints = 'mobile' | 'tablet' | 'desktop';

export const breakpoints: Record<Breakpoints, string> = {
  mobile: '@media (max-width: 480px)',
  tablet: '@media (max-width: 768px)',
  desktop: '@media (min-width: 481px)',
};

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}, {}) as Record<Breakpoints, any>;

export default media;
