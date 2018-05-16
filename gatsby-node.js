const path = require("path");

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /scrollmagic/,
      loader: "null-loader",
    });
  }
};


exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const workItemTemplate = path.resolve(`src/templates/workItem.js`);
  const workCategoryTemplate = path.resolve(`src/templates/workCategory.js`);
  const indexTemplate = path.resolve("src/templates/index.js");
  const workTemplate = path.resolve("src/templates/work.js");
  const contactTemplate = path.resolve("src/templates/contact.js");
  // create work pages

 

  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
              category
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
     
      if (node.frontmatter.type === "category"){
        createPage({
          path: `/work/${node.frontmatter.path}/`,
          component: workCategoryTemplate,
          context: {
            name: node.frontmatter.path
          }
        });
      }
      if (node.frontmatter.type === "workItem") {
        createPage({
          path: `/work/${node.frontmatter.category}/${node.frontmatter.path}/`,
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
      if (node.frontmatter.type === "contact") {
        createPage({
          path: `/contact`,
          component: contactTemplate,
          context: {
            name: "contact"
          }
        });
      }
    });
  });
};
