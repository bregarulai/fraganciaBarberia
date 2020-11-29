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

const ServiceBackground = ({ children, image }) => {
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
    min-height: 100%;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }
`

export default ServiceBackground
