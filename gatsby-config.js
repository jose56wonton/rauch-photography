
module.exports = {
  //pathPrefix: '/rauch-photography',
  siteMetadata: {
    title: "Zach Rauch"
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },{
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: "o0d1qjpq4810",
    //     accessToken: "670785e88e381313ea0699295010c23abcec33db8401542d08fe22f2afeda5eb",
    //     host: `preview.contentful.com`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    }
  ]
};
