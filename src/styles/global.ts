import { css } from '@emotion/react';
import { color, fontSize, layout } from './settings';

const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
    font-size: ${fontSize.medium};
    line-height: 1.8;
    color: ${color.font.primary};

    @media (prefers-color-scheme: dark) {
      color: ${color.font.secondary};
      background-color: ${color.background.secondary};
    }

    @media screen and (max-width: ${layout.threshold}px) {
      font-size: ${fontSize.small};
    }
  }

  a {
    text-decoration: none;
  }

  svg {
    fill: currentColor;
  }
`;

export default globalStyle;
