import React from 'react';
import { css } from '@emotion/react';
import { layout } from '../styles/settings';

const container = css`
  margin-top: 80px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 60px;
  }
`;

const Article: React.FC = ({ children }) => {
  return <div css={container}>{children}</div>;
};

export default Article;
