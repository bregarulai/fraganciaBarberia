import { Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { GoThreeBars } from "react-icons/go"

export const query = graphql`
  {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Navigation = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <Image
              fluid={fluid}
              objectFit="cover"
              className="img"
              alt="josdek barbershop logo"
            />
          </Link>
          <button className="btn-toggle">
            <GoThreeBars />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navigation

const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 1;
  height: 10rem;
  display: flex;
  align-items: center;

  .nav-center {
    width: 95vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img {
      width: 5rem;
    }

    .gatsby-image-wrapper {
      width: 8rem;
    }

    .btn-toggle {
      width: 4rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      border: transparent;
      color: var(--color-primary-blue-dark);
      background-color: transparent;
      cursor: pointer;
    }
  }
`
