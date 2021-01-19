const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogResult = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
          next {
            slug
            title
          }
          previous {
            title
            slug
          }
        }
      }
    }
  `);

  if (blogResult.errors) {
    reporter.panicOnBuild('graphQL Error');
    return;
  }

  blogResult.data.allContentfulBlogPost.edges.forEach(
    ({ node, next, previous }) => {
      createPage({
        path: `/blog/post/${node.slug}`,
        component: path.resolve('./src/templates/blogPost.tsx'),
        context: {
          id: node.id,
          next,
          previous,
        },
      });
    }
  );

  const blogVisibleMaxLength = 10;
  const blogPostLength = blogResult.data.allContentfulBlogPost.edges.length;
  const blogPageLength = Math.ceil(blogPostLength / blogVisibleMaxLength);
  Array.from({ length: blogPageLength }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        skip: blogVisibleMaxLength * i,
        limit: blogVisibleMaxLength,
        length: blogPostLength,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPageLength,
      },
    });
  });
};
