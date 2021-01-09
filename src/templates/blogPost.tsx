import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulBlogPost, SitePageContext } from '../../graphql-types';
// import useContentfulImage from '../hooks/useContentfulImage';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Tags from '../components/tags';
import Time from '../components/time';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { color, fontSize, layout } from '../styles/settings';
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
  location: {
    pathname: string;
  };
};

const article = css`
  margin-top: 80px;

  & > p,
  & > ul,
  & > ol,
  & > div {
    margin-top: 15px;
  }

  & h2 {
    padding-bottom: 7px;
    font-size: ${fontSize.xxxLarge};
    font-weight: bold;
    border-bottom: solid 1px ${color.border.primary};
  }

  & h2 + * {
    margin-top: 15px;
  }

  & * + h2 {
    margin-top: 80px;
  }

  & h3 {
    margin-top: 30px;
    font-size: ${fontSize.xxLarge};
    font-weight: bold;
  }

  & h3 + * {
    margin-top: 5px;
  }

  & > ul {
    margin-left: 20px;
    list-style: disc;
  }

  & > ol {
    margin-left: 20px;
    list-style: decimal;
  }

  & b {
    padding: 0 3px 1px;
    color: #fff;
    background-color: ${color.theme};
    font-weight: bold;
  }

  & a {
    color: #5277fd;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    & h2 {
      border-bottom-color: ${color.border.secondary};
    }
  }

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 45px;

    & > p,
    & > ul,
    & > ol,
    & > div {
      margin-top: 15px;
    }

    & h2 {
      font-size: ${fontSize.xLarge};
    }

    & h2 + * {
      margin-top: 10px;
    }

    & * + h2 {
      margin-top: 45px;
    }

    & h3 {
      margin-top: 25px;
      font-size: ${fontSize.large};
    }

    & h3 + * {
      margin-top: 5px;
    }
  }
`;

const blogPostPage: React.FC<BlogPost> = ({ data }) => {
  const post = data.contentfulBlogPost;

  return (
    <Layout>
      <SEO title={post.title!} description={''} pagePath={location.pathname} />
      <Heading label={post.title} />
      <Body>
        <Time publishDate={post.publishDate} />
        <Tags category={post.category} />
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html,
          }}
          css={article}
        ></div>
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
