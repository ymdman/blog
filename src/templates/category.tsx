import React from 'react';
import { graphql, Link } from 'gatsby';
import {
  ContentfulBlogPostConnection,
  SitePageContext,
} from '../../graphql-types';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Section from '../components/section';
import SectionHeading from '../components/sectionHeading';
import Tags from '../components/tags';
import Time from '../components/time';
import Pagination from '../components/pagination';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { color, layout } from '../styles/settings';

type Props = {
  data: {
    allContentfulBlogPost: ContentfulBlogPostConnection;
  };
  pageContext: SitePageContext;
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
  margin-top: 80px;
`;

const Blog: React.FC<Props> = ({ data, pageContext }) => {
  console.log(pageContext);

  const pathName =
    typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <Layout>
      <SEO title="Blog" description="" pagePath={pathName} />
      <Heading label={pageContext.name} />
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
          <Pagination
            currentPage={pageContext.currentPage!}
            length={pageContext.length!}
            limit={pageContext.limit!}
            isFirst={pageContext.isFirst!}
            isLast={pageContext.isLast!}
          />
        </div>
      </Body>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      limit: $limit
      skip: $skip
      sort: { fields: publishDate, order: DESC }
      filter: { category: { elemMatch: { id: { eq: $id } } } }
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
