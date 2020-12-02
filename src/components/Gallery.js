import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import GalleryBackground from "./GalleryBackground"

const query = graphql`
  {
    allContentfulGallery(
      limit: 8
      sort: { fields: image___createdAt, order: ASC }
    ) {
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
            <Link to="/gallery" className="btn">
              view all
            </Link>
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
      font-size: 3rem;
      color: var(--color-primary-blue-dark);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1.5rem;
      margin-top: 5rem;
      transition: all 0.5s;

      &:hover .img-box:not(:hover) {
        transform: scale(0.9);
        -webkit-filter: blur(4px);
        -moz-filter: blur(4px);
        -o-filter: blur(4px);
        -ms-filter: blur(4px);
        filter: blur(4px);
      }

      .img-box {
        border-radius: 3px;
        overflow: hidden;

        .img {
          height: 100%;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
        }

        &:hover {
          transform: scale(1.1) translateY(-0.5rem);
        }
      }

      .btn {
        font-size: 1.8rem;
        color: var(--color-gray-light-1);
        background-color: var(--color-primary-blue-dark);
        padding: 1rem 5rem;
        border-radius: 5px;
        text-transform: uppercase;
        width: 20rem;
        text-align: center;
        justify-self: center;
        transition: all 0.2s;
        margin-top: 2rem;

        @media screen and (min-width: 900px) {
          grid-column: 1 / -1;
        }

        @media screen and (min-width: 1200px) {
          grid-area: i;
        }

        &:hover {
          background-color: var(--color-primary-red);
          transform: translateY(-3px);
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
        }

        &:active {
          transform: translateY(-1px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
        }
      }

      @media screen and (min-width: 900px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas:
          "a a b b"
          "a a c d"
          "e e f f"
          "e e g h"
          "i i i i";
        .img-box-0 {
          grid-area: b;
        }
        .img-box-1 {
          grid-area: a;
        }
        .img-box-2 {
          grid-area: c;
        }
        .img-box-3 {
          grid-area: d;
        }
        .img-box-4 {
          grid-area: e;
        }
        .img-box-5 {
          grid-area: f;
        }
      }
    }
  }
`

export default Gallery
