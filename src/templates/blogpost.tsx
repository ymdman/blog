import React from 'react';
import { graphql, Link } from 'gatsby';
import { ContentfulBlogPost, SitePageContext } from '../../graphql-types';
import { BLOCKS, NodeData } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import useContentfulImage from '../utils/useContentfulImage';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

type BlogPost = {
  data: {
    contentfulBlogPost: ContentfulBlogPost;
  };
  pageContext: SitePageContext;
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) => {
      const img = <Img fluid={useContentfulImage(node.data.target.file.url)} />;
      return img;
    },
  },
  renderText: (text: string) => {
    const reducer = (
      children: (string | false | JSX.Element)[],
      textSegment: string,
      index: number
    ) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    };
    return text.split('\n').reduce(reducer, []);
  },
};

const blogPostPage: React.FC<BlogPost> = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={data.contentfulBlogPost.title!}
        description={`${documentToPlainTextString(
          JSON.parse(data.contentfulBlogPost.content?.raw || '')
        ).slice(0, 70)}…`}
      />
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
      <div>
        {pageContext.previous && (
          <div>
            <Link to={`/blog/post/${pageContext.previous.slug}`}>
              {pageContext.previous.title}
            </Link>
          </div>
        )}
        {pageContext.next && (
          <div>
            <Link to={`/blog/post/${pageContext.next.slug}`}>
              {pageContext.next.title}
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
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
