require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Proactive Cybernetics`,
    description: `趣味は電子工作とホームページ作りです。`,
    author: `Oganesson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/220787.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API,
        serviceId: "og-blog",
        apis: [
          {
            endpoint: "articles",
          },
          {
            endpoint: "tags",
          },
          {
            endpoint: "links",
          },
          {
            endpoint: "pages",
          },
        ],
      },
    },
  ],
}
