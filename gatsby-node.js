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
};
