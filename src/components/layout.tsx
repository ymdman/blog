import React from 'react';
import Header from './header';
import Footer from './footer';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import globalStyle from '../styles/global';
import { layout } from '../styles/settings';

const container = css`
  display: flex;
  flex-direction: column;
  max-width: ${layout.desktopContentWidth}px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: ${layout.desktopHeaderHeight}px;
  padding-bottom: 10px;
  box-sizing: border-box;

  @media screen and (max-width: ${layout.desktopContentWidth +
    layout.desktopContentSideSize * 2}px) {
    max-width: none;
    padding-right: ${layout.desktopContentSideSize}px;
    padding-left: ${layout.desktopContentSideSize}px;
  }

  @media screen and (max-width: ${layout.threshold}px) {
    padding: ${layout.mobileHeaderHeight}px ${layout.mobileContentSideSize}px
      10px;
  }
`;

const mainBasic = css`
  flex: 1;
  margin-top: 80px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 60px;
  }
`;

const mainCentering = css`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Layout: React.FC = ({ children }) => {
  const isTopPage = window.location.pathname === '/';

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          ${globalStyle}
        `}
      />
      <div css={container}>
        <Header />
        <main css={isTopPage ? mainCentering : mainBasic}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
