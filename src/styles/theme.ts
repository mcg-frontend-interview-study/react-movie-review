import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: 'rgba(243, 63, 63, 1)',
    white: 'rgba(255, 255, 255, 1)',
    greyScale1: 'rgba(208, 213, 221, 1)',
  },
  font: {
    title: `
font-family: Roboto;
font-size: 34px;
font-weight: 600;
line-height: 36px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
    `,
    subtitle: `
font-family: Roboto;
font-size: 20px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0.15000000596046448px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
    `,
    body: `    
font-family: Poppins;
font-size: 18px;
font-weight: 600;
line-height: 27px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
    `,
    caption: `
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
    `,
    button: `
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 24px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

    `,
  },
};
