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

  const shootTemplate = path.resolve(`src/templates/shoot.js`);
  const categoryTemplate = path.resolve(`src/templates/category.js`);
  const indexTemplate = path.resolve("src/templates/index.js");
  const workTemplate = path.resolve("src/templates/work.js");
  const contactTemplate = path.resolve("src/templates/contact.js");
  // create work pages



  graphql(`
    {
      allContentfulShoot {
        edges {
          node {
            title,        
            path,
            category{
              path
           }
            
          }
        }
      }
      allContentfulWork{
        edges{
          node{
            title            
            path
          }	
        }
      }
      
      allContentfulCategory {
        edges {
          node {
            title,
            path
            
          }
        }
      }
      allContentfulContact {
        edges {
          node {
            title,
            path
            
          }
        }
      }
      allContentfulAbout {
        edges {
          node {
            title,
            path
            
          }
        }
      }

    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      //console.log(result.data.allContentfulShoot.edges);
      result.data.allContentfulShoot.edges.forEach(({ node }) => {
        createPage({
          path: `/work/${node.category.path}/${node.path}/`,
          component: shootTemplate,
          context: {
            name: node.path
          }
        });
      });
      result.data.allContentfulCategory.edges.forEach(({ node }) => {
        createPage({
          path: `/work/${node.path}`,
          component: categoryTemplate,
          context: {
            name: node.path
          }
        });
      });
      result.data.allContentfulContact.edges.forEach(({ node }) => {
        createPage({
          path: `/contact`,
          component: contactTemplate,
          context: {
            name: node.path
          }
        });
      });
      result.data.allContentfulAbout.edges.forEach(({ node }) => {
        createPage({
          path: `/`,
          component: indexTemplate,
          context: {
            name: node.path
          }
        });
      });
      result.data.allContentfulWork.edges.forEach(({ node }) => {
        createPage({
          path: `/work`,
          component: workTemplate,
          context: {
            name: node.path
          }
        });
      });



    });
};

/*
if (node.frontmatter.type === "category"){
  createPage({
    path: `/work/${node.frontmatter.path}/`,
    component: categoryTemplate,
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

*/