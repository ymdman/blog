import React from 'react';
import { Link } from 'gatsby';
import IconGitHub from './icons/github';
import { css } from '@emotion/react';

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const anchor = css`
  text-decoration: none;
`;

const Header = () => (
  <header css={header}>
    <h1>
      <Link to="/" css={anchor}>
        YamaMemo
      </Link>
    </h1>
    <a href="https://github.com/ymdman" rel="noreferrer" target="_blank">
      <IconGitHub />
    </a>
  </header>
);

export default Header;
