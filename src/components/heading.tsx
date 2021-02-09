import React from 'react';
import { css } from '@emotion/react';
import { fontSize, layout } from '../styles/settings';

type Props = {
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

const Heading: React.FC<Props> = ({ label }) => {
  return <h1 css={heading}>{label}</h1>;
};

export default Heading;
