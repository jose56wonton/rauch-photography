const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const workTemplate = path.resolve(`src/templates/work.js`);
  const indexTemplate = path.resolve('src/templates/index.js');
  // create work pages
  graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
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
      createPage({
        path: `/${node.frontmatter.path}/`,
        component: workTemplate,
        context: {
          name: node.frontmatter.path
        }, // additional data can be passed via context
      });
    });
  });
  // create index page
  graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "index" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
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
      createPage({
        path: `/`,
        component: indexTemplate,
        context: {
          name: "index"
        }, // additional data can be passed via context
      });
    });
  });
};