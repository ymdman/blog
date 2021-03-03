import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { css } from '@emotion/react';

const container = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const title = css`
  font-size: 8rem;
  font-weight: bold;
  line-height: 1;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 Not Found" />
      <div css={container}>
        <h1 css={title}>404</h1>
        <p>Not Found</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
