import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        defaultDescription: description
        defaultImage: image
        defaultTitle: title
        titleTemplate
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const {
    site: {
      siteMetadata: {
        author,
        defaultDescription,
        defaultImage,
        defaultTitle,
        titleTemplate,
        siteUrl,
      },
    },
  } = useStaticQuery(query)

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: defaultImage,
    url: `${siteUrl}${pathname}`,
    keywords:
      "Orlando barber, barbershop Orlando, barbershop Orlando fl, barber Orlando, barber Orlando fl, barberia, barberia Orlando, Orlando barberia, barberia Orlando fl, barbero, barbero Orlando, barbero Orlando fl, barbero dominicano, barbero dominicano Orlando, dominican barbershop, dominican barbershop Orlando, dominican barbershop Orlando fl, Orlando barbershop, Josdek, Josdek barbershop, haircut, shave, barber, barbershop, south Orlando, kisseemmee, Dr Phillips, best Orlando barber, best Orlando barbershop",
  }
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
      {seo.url && <meta property="og:url" content={seo.url} />}

      <meta property="og:type" content="website" />

      {seo.title && <meta property="og:title" content={defaultTitle} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:creator" content={author} />

      {seo.title && <meta name="twitter:title" content={defaultTitle} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO
