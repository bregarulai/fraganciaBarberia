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
        <button
          className="btn"
          onClick={() => {
            typeof window.history !== "undefined" && window.history.go(-1)
          }}
        >
          back
        </button>
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
    }

    @media screen and (min-width: 1200px) {
      margin-top: -42rem;
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
    display: block;
    border: none;
    transition: all 0.2s;
    margin: 0 auto;
    margin-top: 5rem;

    &:hover {
      background-color: var(--color-primary-red);
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      outline: none;
    }

    &:active {
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      outline: none;
    }
  }
`

export default GalleryTemplate
