import React from 'react';
import { graphql, Link } from 'gatsby';
import { ContentfulBlogPostConnection } from '../../graphql-types';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Tags from '../components/tags';
import Time from '../components/time';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { fontSize } from '../styles/settings';

type Blog = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection;
  };
  location: {
    pathname: string;
  };
};

const title = css`
  font-size: ${fontSize.xxxLarge};
`;

const blog = css`
  margin-top: 60px;
`;

const section = css`
  & + & {
    margin-top: 60px;
  }
`;

const Blog: React.FC<Blog> = ({ data, location }) => {
  return (
    <Layout>
      <SEO title="Blog" description="" pagePath={location.pathname} />
      <Heading label={'Blog'} />
      <div css={blog}>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <section key={node.id} css={section}>
            <h2 css={title}>
              <Link to={`/blog/post/${node.slug}`}>{node.title}</Link>
            </h2>
            <div>
              <Time publishDate={node.publishDate} />
              <Tags category={node.category} />
            </div>
          </section>
        ))}
      </div>
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
