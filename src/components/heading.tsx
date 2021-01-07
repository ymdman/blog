import React from 'react';
import { css } from '@emotion/react';
import { fontSize, layout } from '../styles/settings';

type Label = {
  label?: string | null;
};

const heading = css`
  display: flex;
  justify-content: center;
  font-size: ${fontSize.xxxxxLarge};
  font-weight: bold;
  word-break: break-all;
  line-height: 1.2;

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.xxxLarge};
  }
`;

const Heading: React.FC<Label> = ({ label }) => {
  return <h1 css={heading}>{label}</h1>;
};

export default Heading;
