import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled, { keyframes } from "styled-components"

export const query = graphql`
  {
    file(relativePath: { eq: "pageBg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PageBackground = ({ children, image }) => {
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
      {/* <div className="fade"></div> */}
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
    min-height: 30vh;
    margin-top: -15rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
    -webkit-mask-image: linear-gradient(
      to bottom,
      white -200%,
      transparent 100%
    );
    mask-image: linear-gradient(to bottom, white -200%, transparent 100%);

    @media screen and (min-width: 1200px) {
      min-height: 64vh;
    }
  }
  .bcg::before {
    opacity: 1;
  }

  .fade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.8)
    );
  }
`

export default PageBackground
