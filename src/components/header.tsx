import React from 'react';
import { Link } from 'gatsby';
import useDeviceChecked from '../hooks/useDeviceChecked';
import IconGitHub from './icons/github';
import { css } from '@emotion/react';
import { fontSize, layout, zIndex } from '../styles/settings';

const container = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.header};
  width: 100%;
  height: ${layout.desktopHeaderHeight}px;
`;

const inner = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${layout.desktopContentWidth}px;
  height: inherit;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: ${layout.desktopContentWidth +
    layout.desktopContentSideSize * 2}px) {
    max-width: none;
    padding: 0 ${layout.desktopContentSideSize}px;
  }

  @media screen and (max-width: ${layout.threshold}px) {
    padding: 0 ${layout.mobileContentSideSize}px;
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
  color: inherit;
  text-decoration: none;
`;

const list = css`
  display: flex;
  align-items: center;
  list-style: none;

  & > li + li {
    margin-left: 50px;
  }

  & > lI {
    transition: opacity 200ms;
  }

  & > li:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.small};

    & > li + li {
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
      ymdman.com
    </Link>
  );
};

const Header = () => {
  const isDesktop = useDeviceChecked() === 'desktop';
  const isTopPage = window.location.pathname === '/';

  return (
    <header css={container}>
      <div css={inner}>
        {isTopPage ? <LogoPrimary /> : <LogoSecondary />}
        <nav>
          <ul css={list}>
            <li>
              <Link to="/about" css={anchor}>
                About
              </Link>
            </li>
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
      </div>
    </header>
  );
};

export default Header;
