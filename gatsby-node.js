const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const workItemTemplate = path.resolve(`src/templates/workItem.js`);
  const indexTemplate = path.resolve("src/templates/index.js");
  const workTemplate = path.resolve("src/templates/work.js");
  // create work pages
  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // Individual work pages
      console.log(node)
      if (node.frontmatter.type === "workItem") {
        createPage({
          path: `/${node.frontmatter.path}/`,
          component: workItemTemplate,
          context: {
            name: node.frontmatter.path
          }
        });
      }
      // Index page
      if (node.frontmatter.type === "index") {
        createPage({
          path: `/`,
          component: indexTemplate,
          context: {
            name: "index"
          }
        });
      }
      // Work page
      if (node.frontmatter.type === "work") {
        createPage({
          path: `/work`,
          component: workTemplate,
          context: {
            name: "work"
          }
        });
      }
    });
  });
};
