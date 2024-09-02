const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`../pages/blog/{mdx.frontmatter__slug}.tsx`),
      context: {
        id: node.id,
        previous,
        next,
      },
    });
  });
};
