require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Decorline`,
    description: `Найкращі матерідали для Ваших меблів`,
    author: `Andriy Habinski`,
  },
  plugins: [{
    resolve: 'gatsby-plugin-sass',
    options: {
      implementation: require("sass"),
      sassOptions: {
        data: `@import "${__dirname}/src/styles/variables";`,
      }
    }
  },
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
    `gatsby-plugin-image`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,

  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: process.env.API_URL, // || "http://localhost:1337"
      queryLimit: 1000, // Default to 100
      contentTypes: [
        "category",
        "product",
        "order"
      ],
      //If using single types place them in this array.
      singleTypes: [
        "homepage",
        "privacy-policy",
        "terms-of-use"
      ],
      // Possibility to login with a strapi user, when content types are not publically available (optional).
      // loginData: {
      //   identifier: process.env.API_EMAIL,
      //   password: process.env.API_PASSWORD,
      // },
    },
  },

  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /images/
      }
    }
  }
  ],
}
