import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ParticlesBackground from '../components/particlesBackground';
import { css } from '@emotion/react';
import { fontSize } from '../styles/settings';

const title = css`
  font-size: ${fontSize.xxxxxLarge};
  font-weight: bold;
`;

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <p css={title}>Welcome to this site.</p>
      </Layout>
      <ParticlesBackground />
    </>
  );
};

export default IndexPage;
