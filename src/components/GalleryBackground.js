import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled, { keyframes } from "styled-components"

const query = graphql`
  {
    file(relativePath: { eq: "serviceBg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
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
      <div className="bg-container">
        <BackgroundImage
          Tag="div"
          fluid={image || fluid}
          className="bcg"
          preserveStackingContext={true}
        >
          {children}
        </BackgroundImage>
      </div>
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
  .bg-container {
    overflow: hidden;
  }
  .bcg {
    /* MUST!!!!!! */
    min-height: 365vh;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
    -webkit-filter: blur(0.8rem);
    -moz-filter: blur(0.8rem);
    -o-filter: blur(0.8rem);
    -ms-filter: blur(0.8rem);
    filter: blur(0.8rem);
  }
  .bcg::before {
    opacity: 1;
  }

  @media screen and (min-width: 400px) {
    .bcg {
      min-height: 435vh;
    }
  }

  @media screen and (min-width: 500px) {
    .bcg {
      min-height: 510vh;
    }
  }

  @media screen and (min-width: 600px) {
    .bcg {
      min-height: 590vh;
    }
  }

  @media screen and (min-width: 700px) {
    .bcg {
      min-height: 680vh;
    }
  }

  @media screen and (min-width: 800px) {
    .bcg {
      min-height: 755vh;
    }
  }
  @media screen and (min-width: 900px) {
    .bcg {
      min-height: 255vh;
    }
  }

  @media screen and (min-width: 1050px) {
    .bcg {
      min-height: 275vh;
    }
  }

  @media screen and (min-width: 1100px) {
    .bcg {
      min-height: 300vh;
    }
  }

  @media screen and (min-width: 1200px) {
    .bcg {
      min-height: 240vh;
    }
  }
`

export default GalleryBackground
