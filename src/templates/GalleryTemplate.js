import { graphql } from "gatsby"
import React from "react"
import { Layout, PageBackground, SEO } from "../components"
import Image from "gatsby-image"
import styled from "styled-components"

const GalleryTemplate = ({
  data: {
    gallery: {
      image: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Gallery Image" />
      <PageBackground />
      <Wrapper className="section">
        <div className="section-center img-box">
          <Image fluid={fluid} />
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSingleImage($slug: String) {
    gallery: contentfulGallery(slug: { eq: $slug }) {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Wrapper = styled.section`
  .img-box {
    margin-top: -20rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 600px) {
      margin-top: -17rem;
    }

    @media screen and (min-width: 900px) {
      margin-top: -12rem;
      margin-bottom: 5rem;
    }

    @media screen and (min-width: 1200px) {
      margin-top: -42rem;
      margin-bottom: 10rem;
    }
  }
`

export default GalleryTemplate
