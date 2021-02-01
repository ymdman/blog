import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulAbout, ImageSharpFluid } from '../../graphql-types';
import Img, { FluidObject } from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Section from '../components/section';
import SectionHeading from '../components/sectionHeading';
import Article from '../components/article';
import IconGitHub from '../components/icons/github';
import IconTwitter from '../components/icons/twitter';
import { css } from '@emotion/react';
import { color, layout } from '../styles/settings';

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
    file: {
      childImageSharp: {
        fluid: ImageSharpFluid & FluidObject;
      };
    };
  };
};

const article = css`
  margin-top: 15px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 10px;
  }
`;

const profile = css`
  display: flex;
  align-items: center;
  margin-top: 15px;

  @media screen and (max-width: ${layout.threshold}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const avatar = css`
  flex-shrink: 0;
  width: 120px;
  overflow: hidden;
  border: solid 1px ${color.border.primary};
  border-radius: 50%;

  @media (prefers-color-scheme: dark) {
    border-color: ${color.border.secondary};
  }
`;

const description = css`
  margin-left: 30px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

const sns = css`
  margin-top: 20px;
`;

const anchor = css`
  color: inherit;

  &:hover {
    opacity: 0.5;
  }

  & + & {
    margin-left: 10px;
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
          <div css={profile}>
            <div css={avatar}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
            <div css={description}>
              <Article
                html={data.contentfulAbout.profile?.childMarkdownRemark?.html}
              />
              <div css={sns}>
                <a
                  href="https://github.com/ymdman"
                  rel="noreferrer"
                  target="_blank"
                  css={anchor}
                >
                  <IconGitHub width={22} height={22} />
                </a>
                <a
                  href="https://twitter.com/yama80059601"
                  rel="noreferrer"
                  target="_blank"
                  css={anchor}
                >
                  <IconTwitter width={22} height={22} />
                </a>
              </div>
            </div>
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
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default AboutPage;
