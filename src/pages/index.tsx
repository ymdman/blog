import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ParticlesBackground from '../components/particlesBackground';
import { css } from '@emotion/react';
import { fontSize, layout } from '../styles/settings';

const title = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${fontSize.xxxxxLarge};
  font-weight: bold;
  white-space: nowrap;

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.xxxLarge};
  }
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
