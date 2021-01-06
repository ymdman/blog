import React from 'react';
import { graphql, Link } from 'gatsby';
import { ContentfulBlogPostConnection } from '../../graphql-types';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Section from '../components/section';
import SectionHeading from '../components/sectionHeading';
import Tags from '../components/tags';
import Time from '../components/time';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { color, layout } from '../styles/settings';

type Blog = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection;
  };
  location: {
    pathname: string;
  };
};

const sectionHeading = css`
  transition: opacity 200ms;
`;

const anchor = css`
  display: block;
  color: ${color.font.primary};

  &:hover .css-${sectionHeading.name} {
    opacity: 0.5;
  }

  @media (prefers-color-scheme: dark) {
    color: ${color.font.secondary};
  }
`;

const time = css`
  margin-top: 15px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 10px;
  }
`;

const tags = css`
  margin-top: 5px;
`;

const Blog: React.FC<Blog> = ({ data, location }) => {
  return (
    <Layout>
      <SEO title="Blog" description="" pagePath={location.pathname} />
      <Heading label={'Blog'} />
      <Body>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <Section key={node.id}>
            <Link to={`/blog/post/${node.slug}`} css={anchor}>
              <div css={sectionHeading}>
                <SectionHeading label={node.title} />
              </div>
              <div css={time}>
                <Time publishDate={node.publishDate} />
              </div>
              <div css={tags}>
                <Tags category={node.category} />
              </div>
            </Link>
          </Section>
        ))}
      </Body>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "YYYY年MM月DD日")
          category {
            name
            slug
            id
          }
        }
      }
    }
  }
`;

export default Blog;
