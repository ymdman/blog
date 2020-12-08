import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulBlogPost } from '../../graphql-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, NodeData } from '@contentful/rich-text-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

type BlogPost = {
  contentfulBlogPost: ContentfulBlogPost;
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) => {
      const img = <img src={node.data.target.file.url} />;
      return img;
    },
  },
};

const blogPostPage: React.FC<{ data: BlogPost }> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{data.contentfulBlogPost.title}</h1>
    <time>{data.contentfulBlogPost.publishDate}</time>
    <div>
      {renderRichText(
        {
          raw: data.contentfulBlogPost.content?.raw || '',
          references: data.contentfulBlogPost.content?.references as [],
        },
        options
      )}
    </div>
    <ul>
      {data.contentfulBlogPost.category?.map(item => (
        <li key={item?.id}>{item?.name}</li>
      ))}
    </ul>
  </Layout>
);

export const query = graphql`
  query {
    contentfulBlogPost {
      title
      publishDate(formatString: "YYYY年MM月DD日")
      category {
        name
        slug
        id
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default blogPostPage;
