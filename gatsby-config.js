/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Josdek Barbershop`,
    description: `Josdek Barbershop always offers professional quality for all of our customers.  Our modernly equipped Barbershop is located in one step away from the Florida Mall – on 8421 South Orange Blossom Trail Suite 229 and Sand Lake Rd.`,
    author: `John`,
    titleTemplate: `%s | Josdek Barbershop`,
    url: `https://practical-saha-15c775.netlify.app/`,
    image: `barberia.png`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,700`,
          `Open Sans\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: `@ccalamos/gatsby-source-googlemaps-static`,
    //   options: {
    //     key: process.env.GATSBY_GOOGLE_MAPS_STATIC_API_KEY,
    //     center: `28.44287,-81.40194`,
    //     mapID: process.env.GATSBY_GOOGLE_MAPS_ID,
    //   },
    // },
  ],
}
