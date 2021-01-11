import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulAbout } from '../../graphql-types';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Section from '../components/section';
import SectionHeading from '../components/sectionHeading';
import SEO from '../components/seo';
// import { css } from '@emotion/react';
// import { layout } from '../styles/settings';

type ChildMarkdownRemark = {
  childMarkdownRemark: {
    html: string;
  };
};

type MarkdownRemark = {
  site: ChildMarkdownRemark;
  profile: ChildMarkdownRemark;
};

type About = {
  data: {
    contentfulAbout: ContentfulAbout & MarkdownRemark;
  };
};

const About: React.FC<About> = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Heading label={'About'} />
      <Body>
        <Section>
          <SectionHeading label={'This Site'} />
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulAbout.site?.childMarkdownRemark?.html,
            }}
          ></div>
        </Section>
        <Section>
          <SectionHeading label={'Profile'} />
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulAbout.profile?.childMarkdownRemark?.html,
            }}
          ></div>
        </Section>
      </Body>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulAbout {
      profile {
        childMarkdownRemark {
          html
        }
      }
      site {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default About;
