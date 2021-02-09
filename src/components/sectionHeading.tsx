import React from 'react';
import { css } from '@emotion/react';
import { color, fontSize, layout } from '../styles/settings';

type Props = {
  label?: string | null;
};

const heading = css`
  padding-bottom: 10px;
  font-size: ${fontSize.xxxLarge};
  font-weight: bold;
  line-height: 1.4;
  border-bottom: solid 1px ${color.border.primary};

  @media (prefers-color-scheme: dark) {
    border-bottom-color: ${color.border.secondary};
  }

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.xLarge};
  }
`;

const sectionHeading: React.FC<Props> = ({ label }) => {
  return <h2 css={heading}>{label}</h2>;
};

export default sectionHeading;
