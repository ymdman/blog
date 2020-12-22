import React from 'react';
import { Link } from 'gatsby';
import IconGitHub from './icons/github';
import { css } from '@emotion/react';
import { layout } from '../styles/settings';

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${layout.desktopHeaderHeight};
  padding: 0 50px;
  box-sizing: border-box;
`;

const logo = css`
  font-size: var(--fs-medium);
`;

const anchor = css`
  text-decoration: none;
`;

const list = css`
  display: flex;
  align-items: center;
  list-style: none;

  li + li {
    margin-left: 45px;
  }
`;

const Header = () => (
  <header css={header}>
    <h1 css={logo}>
      <Link to="/" css={anchor}>
        ymdmanMemo
      </Link>
    </h1>
    <nav>
      <ul css={list}>
        <li>About</li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="https://github.com/ymdman" rel="noreferrer" target="_blank">
            <IconGitHub width={22} height={22} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
