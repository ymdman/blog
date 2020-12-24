import React from 'react';
import { css } from '@emotion/react';
import { fontSize, layout } from '../styles/settings';

const footer = css`
  text-align: center;
`;

const copyright = css`
  font-size: ${fontSize.small};

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.xSmall};
  }
`;

const Footer = () => {
  return (
    <footer css={footer}>
      <small css={copyright}>
        © {new Date().getFullYear()} ymdmanMemo All Right Reserved.
      </small>
    </footer>
  );
};

export default Footer;
