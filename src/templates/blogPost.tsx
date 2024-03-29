// import React from 'react';
// import { graphql } from 'gatsby';
// import { ContentfulBlogPost, SitePageContext } from '../../graphql-types';
// import Layout from '../components/layout';
// import Heading from '../components/heading';
// import Body from '../components/body';
// import Article from '../components/article';
// import Tags from '../components/tags';
// import Time from '../components/time';
// import SEO from '../components/seo';
// import { css } from '@emotion/react';
// import { layout } from '../styles/settings';

// type MarkdownRemark = {
//   content: {
//     childMarkdownRemark: {
//       html: string;
//     };
//   };
// };

// type Props = {
//   data: {
//     contentfulBlogPost: ContentfulBlogPost & MarkdownRemark;
//   };
//   pageContext: SitePageContext;
// };

// const article = css`
//   margin-top: 80px;

//   @media screen and (max-width: ${layout.threshold}px) {
//     margin-top: 45px;
//   }
// `;

// const blogPostPage: React.FC<Props> = ({ data }) => {
//   const post = data.contentfulBlogPost;
//   const pathName =
//     typeof window !== 'undefined' ? window.location.pathname : '';

//   const html = post.content.childMarkdownRemark.html;
//   const str = html.replace(/<\/?[^>]+>/g, '').trim();
//   const description = `${str.slice(0, 70)}…`;

//   return (
//     <Layout>
//       <SEO title={post.title!} description={description} pagePath={pathName} />
//       <Heading label={post.title} />
//       <Body>
//         <Time publishDate={post.publishDate} />
//         <Tags category={post.category} />
//         <div css={article}>
//           <Article html={post.content.childMarkdownRemark.html} />
//         </div>
//       </Body>
//     </Layout>
//   );
// };

// export const query = graphql`
//   query($id: String!) {
//     contentfulBlogPost(id: { eq: $id }) {
//       title
//       publishDate(formatString: "YYYY年MM月DD日")
//       category {
//         name
//         slug
//         id
//       }
//       content {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `;

// export default blogPostPage;
export {};
