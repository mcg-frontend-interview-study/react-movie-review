import {css, Theme} from '@emotion/react';

import reset from './reset.ts';

const globalStyles = (theme: Theme) => css`
  ${reset()}

  * {
    box-sizing: border-box !important;
  }

  body {
    font-size: 10px;
    background-color: #524f81;
    color: #fff;
    overflow-y: auto;
    display: flex;
    justify-content: center;
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
