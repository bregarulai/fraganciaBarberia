import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import JsonLd from "./JsonLd"

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
      "Orlando barber, barbershop Orlando, barbershop Orlando fl, barber Orlando, barber Orlando fl, barberia, barberia Orlando, Orlando barberia, barbershop florida mall, barbero",
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
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "Barbershop",
          url: "https://www.josdekbarbershop.com/",
          name: "Josdek Barbershop open Monday to Saturday",
          image: ["https://www.josdekbarbershop.com/images/heroBg.jpg"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1407-844-1446",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "8421 South Orange Blossom Trail Suite 229",
            addressLocality: "Orlando",
            addressRegion: "FL",
            postalCode: "32809",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.44287,
            longitude: -81.4019,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "19:00",
            },
          ],
        }}
      </JsonLd>
    </Helmet>
  )
}

export default SEO
