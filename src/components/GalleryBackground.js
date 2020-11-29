import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled, { keyframes } from "styled-components"

export const query = graphql`
  {
    file(relativePath: { eq: "serviceBg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const GalleryBackground = ({ children, image }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={image || fluid}
        className="bcg"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const fadeIn = keyframes`
    from {
        background-color:rgba(0,0,0,0.4);
    }
    to {
        background-color:rgba(0,0,0,0.8);
    }
`

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 310vh;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
    -webkit-filter: blur(0.5rem);
    -moz-filter: blur(0.5rem);
    -o-filter: blur(0.5rem);
    -ms-filter: blur(0.5rem);
    filter: blur(0.5rem);
  }
  .bcg::before {
    opacity: 1;
  }

  @media screen and (min-width: 400px) {
    .bcg {
      min-height: 310vh;
    }
  }

  @media screen and (min-width: 500px) {
    .bcg {
      min-height: 390vh;
    }
  }

  @media screen and (min-width: 600px) {
    .bcg {
      min-height: 425vh;
    }
  }

  @media screen and (min-width: 700px) {
    .bcg {
      min-height: 490vh;
    }
  }

  @media screen and (min-width: 800px) {
    .bcg {
      min-height: 540vh;
    }
  }
  @media screen and (min-width: 900px) {
    .bcg {
      min-height: 190vh;
    }
  }

  @media screen and (min-width: 1100px) {
    .bcg {
      min-height: 210vh;
    }
  }

  @media screen and (min-width: 1200px) {
    .bcg {
      min-height: 240vh;
    }
  }
`

export default GalleryBackground
