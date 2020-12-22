import { css } from '@emotion/react';
import { fontSize, lineHeight, color } from './settings';

const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
    font-size: ${fontSize.medium};
    line-height: ${lineHeight.medium};
    color: ${color.fontPrimary};
  }
`;

export default globalStyle;
