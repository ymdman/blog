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
import IconArrowLeft from '../components/icons/arrowLeft';
import IconArrowRight from '../components/icons/arrowRight';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { color, layout } from '../styles/settings';

type Blog = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection;
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

const pagination = css`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

const paginationItem = css`
  display: flex;
  align-items: center;
  color: ${color.font.primary};

  @media (prefers-color-scheme: dark) {
    color: ${color.font.secondary};
  }
`;

const paginationIconLeft = css`
  display: flex;
  margin-right: 5px;
`;
const paginationIconRight = css`
  display: flex;
  margin-left: 5px;
`;

const Blog: React.FC<Blog> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" description="" pagePath={window.location.pathname} />
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
        <div css={pagination}>
          <Link to={'/'} css={paginationItem}>
            <div css={paginationIconLeft}>
              <IconArrowLeft width={20} height={20} />
            </div>
            <span>Prev</span>
          </Link>
          <Link to={'/'} css={paginationItem}>
            <span>Next</span>
            <div css={paginationIconRight}>
              <IconArrowRight width={20} height={20} />
            </div>
          </Link>
        </div>
      </Body>
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      limit: $limit
      skip: $skip
      sort: { fields: publishDate, order: DESC }
    ) {
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
