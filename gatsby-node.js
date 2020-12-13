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
        }
      }
    }
  `);

  if (blogResult.errors) {
    reporter.panicOnBuild('graphQL Error');
    return;
  }

  blogResult.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/post/${node.slug}`,
      component: path.resolve('./src/templates/blogpost.tsx'),
      context: {
        id: node.id,
      },
    });
  });
};
