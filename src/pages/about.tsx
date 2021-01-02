import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulAboutConnection } from '../../graphql-types';
import Layout from '../components/layout';
import Heading from '../components/heading';
import SEO from '../components/seo';

type About = {
  data: {
    allContentfulAbout: ContentfulAboutConnection;
  };
};

const About: React.FC<About> = ({ data }) => {
  const node = data.allContentfulAbout.edges[0].node;

  return (
    <Layout>
      <SEO title="About" />
      <Heading label={'About'} />
      <h2>This Site</h2>
      <p>{node.site?.internal.content}</p>
      <h2>Profile</h2>
      <p>{node.profile?.internal.content}</p>
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
