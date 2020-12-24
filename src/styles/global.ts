import { css } from '@emotion/react';
import { fontSize, color } from './settings';

const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
    font-size: ${fontSize.medium};
    line-height: 1.4;
    color: ${color.font.primary};
  }

  a {
    text-decoration: none;
  }

  svg {
    fill: currentColor;
  }
`;

export default globalStyle;
