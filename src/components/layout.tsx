import React from 'react';
import Header from './header';
import Footer from './footer';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import globalStyle from '../styles/global';
import { layout } from '../styles/settings';

const container = css`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${layout.desktopHeaderHeight} 50px 10px;
  box-sizing: border-box;

  @media screen and (max-width: ${layout.threshold}px) {
    max-width: none;
    padding: ${layout.mobileHeaderHeight} 10px 10px;
  }
`;

const main = css``;

const Layout: React.FC = ({ children }) => {
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
        <main css={main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
