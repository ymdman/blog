import React from 'react';
import { graphql, Link } from 'gatsby';
import { ContentfulBlogPostConnection } from '../../graphql-types';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Article from '../components/article';
import Tags from '../components/tags';
import Time from '../components/time';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { color, fontSize, layout } from '../styles/settings';

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

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.xLarge};
  }
`;

const anchor = css`
  color: ${color.font.primary};

  &:hover {
    opacity: 0.6;
  }
`;

const section = css`
  & + & {
    margin-top: 60px;
    padding-top: 60px;
    border-top: solid 1px ${color.border.primary};
  }

  @media screen and (max-width: ${layout.threshold}px) {
    & + & {
      margin-top: 35px;
      padding-top: 35px;
    }
  }
`;

const tags = css`
  margin-top: 10px;
`;

const Blog: React.FC<Blog> = ({ data, location }) => {
  return (
    <Layout>
      <SEO title="Blog" description="" pagePath={location.pathname} />
      <Heading label={'Blog'} />
      <Article>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <section key={node.id} css={section}>
            <h2 css={title}>
              <Link to={`/blog/post/${node.slug}`} css={anchor}>
                {node.title}
              </Link>
            </h2>
            <Time publishDate={node.publishDate} />
            <div css={tags}>
              <Tags category={node.category} />
            </div>
          </section>
        ))}
      </Article>
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
