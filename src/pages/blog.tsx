import React from 'react';
import { graphql, Link } from 'gatsby';
import { ContentfulBlogPostConnection } from '../../graphql-types';
import Layout from '../components/layout';

type Blog = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection;
  };
};

const Blog: React.FC<Blog> = ({ data }) => {
  return (
    <Layout>
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
