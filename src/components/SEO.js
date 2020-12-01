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
        siteUrl: url
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
  }
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}

      <meta property="og:type" content="website" />

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:creator" content={author} />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO
