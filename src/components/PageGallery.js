import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const query = graphql`
  {
    allContentfulGallery {
      nodes {
        id: contentful_id
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const PageGallery = () => {
  const {
    allContentfulGallery: { nodes: images },
  } = useStaticQuery(query)

  return (
    <Wrapper className="section">
      <div className="section-center gallery-section">
        <h2>gallery</h2>
        <div className="underline"></div>
        <div className="gallery-grid">
          {images.map((image, index) => {
            const {
              id,
              title,
              image: { fluid },
            } = image
            return (
              <div key={id} className={`img-box img-box-${index}`}>
                <Image className="img" fluid={fluid} alt={title} />
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gallery-section {
    margin-top: -20rem;

    @media screen and (min-width: 600px) {
      margin-top: -17rem;
    }

    @media screen and (min-width: 900px) {
      margin-top: -12rem;
    }

    @media screen and (min-width: 1200px) {
      margin-top: -26rem;
    }

    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--color-primary-blue-dark);

      @media screen and (min-width: 600px) {
        font-size: 3rem;
      }
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin-top: 3rem;

      @media screen and (min-width: 600px) {
        margin-top: 5rem;
      }

      @media screen and (min-width: 900px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      .img-box {
        .img {
          height: 100%;
          border-radius: 3px;
          overflow: hidden;
        }
      }
    }
  }
`

export default PageGallery
