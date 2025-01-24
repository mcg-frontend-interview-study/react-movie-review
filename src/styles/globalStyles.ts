import {css, Theme} from '@emotion/react';

import reset from './reset.ts';

const globalStyles = (theme: Theme) => css`
  ${reset()}

  * {
    box-sizing: border-box !important;
  }

  body {
    font-size: 10px;
    background-color: #ffa8b5;
    color: #fff;
    overflow-y: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default globalStyles;
