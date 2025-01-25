import { css, type CSSObject, type Interpolation } from 'styled-components';
import { DISPLAY_SIZE } from '../constants/displaySize';

export type Breakpoints = 'mobile' | 'tablet' | 'desktop';

export const breakpoints: Record<Breakpoints, string> = {
  mobile: `@media (max-width: ${DISPLAY_SIZE.mobile}px)`,
  tablet: `@media (max-width: ${DISPLAY_SIZE.tablet}px)`,
  desktop: `@media (max-width: ${DISPLAY_SIZE.desktop}px)`,
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
