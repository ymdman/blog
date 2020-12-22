import React from 'react';
import { graphql, Link } from 'gatsby';
import { ContentfulBlogPostConnection } from '../../graphql-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

type Blog = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection;
  };
  location: {
    pathname: string;
  };
};

const Blog: React.FC<Blog> = ({ data, location }) => {
  return (
    <Layout>
      <SEO title="Blog" description="" pagePath={location.pathname} />
      <div>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/blog/post/${node.slug}`}>{node.title}</Link>
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
        }
      }
    }
  }
`;

export default Blog;
