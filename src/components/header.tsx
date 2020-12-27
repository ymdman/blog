import React from 'react';
import { Link } from 'gatsby';
import IconGitHub from './icons/github';
import { css } from '@emotion/react';
import { color, fontSize, layout } from '../styles/settings';

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

  @media screen and (max-width: ${layout.threshold}px) {
    height: ${layout.mobileHeaderHeight};
    padding: 0 10px;
  }
`;

const logo = css`
  font-size: ${fontSize.xLarge};
  font-weight: bold;

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.medium};
  }
`;

const anchor = css`
  color: ${color.font.primary};
  text-decoration: none;
`;

const list = css`
  display: flex;
  align-items: center;
  list-style: none;

  li + li {
    margin-left: 45px;
  }

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.small};

    li + li {
      margin-left: 20px;
    }
  }
`;

const icon = css`
  display: flex;
`;

const LogoPrimary = () => {
  return (
    <h1 css={logo}>
      <Title />
    </h1>
  );
};

const LogoSecondary = () => {
  return (
    <p css={logo}>
      <Title />
    </p>
  );
};

const Title = () => {
  return (
    <Link to="/" css={anchor}>
      ymdmanMemo
    </Link>
  );
};

const Header = () => {
  const isDesktop = window.innerWidth >= layout.threshold;
  const isTopPage = window.location.pathname === '/';

  return (
    <header css={header}>
      {isTopPage ? <LogoPrimary /> : <LogoSecondary />}
      <nav>
        <ul css={list}>
          <li>About</li>
          <li>
            <Link to="/blog" css={anchor}>
              Blog
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/ymdman"
              rel="noreferrer"
              target="_blank"
              css={[anchor, icon]}
            >
              <IconGitHub
                width={isDesktop ? 22 : 18}
                height={isDesktop ? 22 : 18}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
