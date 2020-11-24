import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery } from "gatsby"
import GalleryBackground from "./GalleryBackground"

export const query = graphql`
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

const Gallery = () => {
  const {
    allContentfulGallery: { nodes: images },
  } = useStaticQuery(query)

  return (
    <>
      <Wrapper className="section">
        <GalleryBackground></GalleryBackground>
        <div className="section-center gallery-section">
          <h2>gallery</h2>
          <div className="underline"></div>
          <div className="gallery-grid">
            {images.map(image => {
              const {
                id,
                title,
                image: { fluid },
              } = image
              return (
                <div key={id} className="img-box">
                  <Image fluid={fluid} alt={title} />
                </div>
              )
            })}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  background: transparent;
  .gallery-section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--color-primary-blue-dark);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin-top: 5rem;

      .img-box {
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      }
    }
  }
`

export default Gallery
