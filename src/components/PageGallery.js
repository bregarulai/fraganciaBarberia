import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const query = graphql`
  {
    allContentfulGallery {
      nodes {
        id: contentful_id
        title
        slug
        image {
          fluid(maxWidth: 600) {
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
              slug,
              image: { fluid },
            } = image
            return (
              <Link key={id} to={`/gallery/${slug}`} className="img-link">
                <div className={`img-box img-box-${index}`}>
                  <Image className="img" fluid={fluid} alt={title} />
                </div>
              </Link>
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
      font-size: 3rem;
      color: var(--color-primary-blue-dark);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin-top: 5rem;

      &:hover .img-box:not(:hover) {
        transform: scale(0.9);
        -webkit-filter: blur(4px);
        -moz-filter: blur(4px);
        -o-filter: blur(4px);
        -ms-filter: blur(4px);
        filter: blur(4px);
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

        &:hover {
          transform: scale(1.1) translateY(-0.5rem);
        }
      }

      .img-link {
        display: grid;
      }
    }
  }
`

export default PageGallery
