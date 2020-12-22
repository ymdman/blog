import React from 'react';
import Header from './header';
import Footer from './footer';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import globalStyle from '../styles/global';
import { layout } from '../styles/settings';

const container = css`
  width: 1000px;
  margin: 0 auto;
`;

const main = css`
  padding-top: ${layout.desktopHeaderHeight};
`;

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
