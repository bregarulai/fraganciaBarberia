require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Josdek Barbershop open Monday to Saturday`,
    description: `Josdek Barbershop professional quality for all of our customers. Located in one step away from the Florida Mall`,
    author: `John`,
    titleTemplate: `%s | Josdek Barbershop open Monday to Saturday`,
    siteUrl: `http://www.josdekbarbershop.com`,
    image: `barberia.png`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josdek Barbershop`,
        short_name: `Barbershop`,
        start_url: `/`,
        background_color: `#f7f0eb`,

        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/contact/`, `/`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://www.josdekbarbershop.com`",
        sitemap: "http://www.josdekbarbershop.com`/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
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
        fonts: [`Roboto\:300,400,700`, `Open Sans\:300,400,400i,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `http://www.josdekbarbershop.com`,
      },
    },
  ],
}
