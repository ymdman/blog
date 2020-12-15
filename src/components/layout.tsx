import React from 'react';
import Header from './header';
import Footer from './footer';
import { css } from '@emotion/react';
import 'modern-css-reset';
import '../css/base.css';

const container = css`
  width: 800px;
  margin: 0 auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <div css={container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
