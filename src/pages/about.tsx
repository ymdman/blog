import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulAbout } from '../../graphql-types';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Section from '../components/section';
import SectionHeading from '../components/sectionHeading';
import Article from '../components/article';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { layout } from '../styles/settings';

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

const article = css`
  margin-top: 15px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 10px;
  }
`;

const AboutPage: React.FC<About> = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Heading label={'About'} />
      <Body>
        <Section>
          <SectionHeading label={'This Site'} />
          <div css={article}>
            <Article
              html={data.contentfulAbout.site?.childMarkdownRemark?.html}
            />
          </div>
        </Section>
        <Section>
          <SectionHeading label={'Profile'} />
          <div css={article}>
            <Article
              html={data.contentfulAbout.profile?.childMarkdownRemark?.html}
            />
          </div>
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

export default AboutPage;
