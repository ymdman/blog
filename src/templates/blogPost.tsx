import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulBlogPost, SitePageContext } from '../../graphql-types';
// import useContentfulImage from '../hooks/useContentfulImage';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Article from '../components/article';
import Tags from '../components/tags';
import Time from '../components/time';
import SEO from '../components/seo';
import 'prismjs/themes/prism-tomorrow.css';

type MarkdownRemark = {
  content: {
    childMarkdownRemark: {
      html: string;
    };
  };
};

type BlogPost = {
  data: {
    contentfulBlogPost: ContentfulBlogPost & MarkdownRemark;
  };
  pageContext: SitePageContext;
};

const blogPostPage: React.FC<BlogPost> = ({ data }) => {
  const post = data.contentfulBlogPost;

  return (
    <Layout>
      <SEO
        title={post.title!}
        description={''}
        pagePath={window.location.pathname}
      />
      <Heading label={post.title} />
      <Body>
        <Time publishDate={post.publishDate} />
        <Tags category={post.category} />
        <Article html={post.content.childMarkdownRemark.html} />
        {/* <div>
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
        </div> */}
      </Body>
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
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default blogPostPage;
