import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled, { keyframes } from "styled-components"

const query = graphql`
  {
    file(relativePath: { eq: "heroBg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = ({ children, image }) => {
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
        background-color:rgba(255,255,255,0.4);
    }
    to {
        background-color:rgba(255,255,255,0.8);
    }
`

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    margin-top: -15rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }
`

export default Background
