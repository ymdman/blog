import React from 'react';
import { css } from '@emotion/react';
import { layout } from '../styles/settings';

const container = css`
  & + & {
    margin-top: 80px;
  }

  @media screen and (max-width: ${layout.threshold}px) {
    & + & {
      margin-top: 45px;
    }
  }
`;

const Section: React.FC = ({ children }) => {
  return <section css={container}>{children}</section>;
};

export default Section;
