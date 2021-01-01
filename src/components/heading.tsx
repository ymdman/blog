import React from 'react';
import { css } from '@emotion/react';
import { fontSize } from '../styles/settings';

type Label = {
  label?: string | null;
};

const heading = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.xxxxxLarge};
  font-weight: bold;
  word-break: break-all;

  &::before,
  &::after {
    content: '';
    flex-shrink: 0;
    height: 1px;
    width: 20px;
    background-color: #ccc;
  }

  &::before {
    margin-right: 15px;
  }

  &::after {
    margin-left: 15px;
  }
`;
const Heading: React.FC<Label> = ({ label }) => {
  return <h1 css={heading}>{label}</h1>;
};

export default Heading;
