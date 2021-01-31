import React from 'react';
import { css } from '@emotion/react';
import { fontSize, layout } from '../styles/settings';

const container = css`
  margin-top: 60px;
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
    <footer css={container}>
      <small css={copyright}>
        © {new Date().getFullYear()} ymdman.com All Right Reserved.
      </small>
    </footer>
  );
};

export default Footer;
