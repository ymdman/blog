import React from 'react';
import { css } from '@emotion/react';
import { color, fontSize, layout } from '../styles/settings';

type Label = {
  label?: string | null;
};

const heading = css`
  padding-bottom: 7px;
  font-size: ${fontSize.xxxLarge};
  border-bottom: solid 1px ${color.border.primary};

  @media (prefers-color-scheme: dark) {
    border-bottom-color: ${color.border.secondary};
  }

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.xLarge};
  }
`;

const sectionHeading: React.FC<Label> = ({ label }) => {
  return <h2 css={heading}>{label}</h2>;
};

export default sectionHeading;
