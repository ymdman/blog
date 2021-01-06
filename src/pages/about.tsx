import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulAboutConnection } from '../../graphql-types';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Section from '../components/section';
import SectionHeading from '../components/sectionHeading';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { layout } from '../styles/settings';

type About = {
  data: {
    allContentfulAbout: ContentfulAboutConnection;
  };
};

const text = css`
  margin-top: 15px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 10px;
  }
`;

const About: React.FC<About> = ({ data }) => {
  const node = data.allContentfulAbout.edges[0].node;

  return (
    <Layout>
      <SEO title="About" />
      <Heading label={'About'} />
      <Body>
        <Section>
          <SectionHeading label={'This Site'} />
          <p css={text}>{node.site?.internal.content}</p>
        </Section>
        <Section>
          <SectionHeading label={'Profile'} />
          <p css={text}>{node.profile?.internal.content}</p>
        </Section>
      </Body>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          profile {
            internal {
              content
            }
          }
          site {
            internal {
              content
            }
          }
        }
      }
    }
  }
`;

export default About;
