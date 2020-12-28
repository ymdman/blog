import React from 'react';
import { graphql, Link } from 'gatsby';
import { ContentfulBlogPostConnection } from '../../graphql-types';
import Layout from '../components/layout';
import Tags from '../components/tags';
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

const blog = css`
  > div + div {
    margin-top: 60px;
  }
`;

const title = css`
  font-size: ${fontSize.xxLarge};
`;

const Blog: React.FC<Blog> = ({ data, location }) => {
  console.log(data.allContentfulBlogPost.edges);

  return (
    <Layout>
      <SEO title="Blog" description="" pagePath={location.pathname} />
      <div css={blog}>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.id}>
            <h2 css={title}>
              <Link to={`/blog/post/${node.slug}`}>{node.title}</Link>
            </h2>
            <time>{node.publishDate}</time>
            <Tags category={node.category} />
          </div>
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
