import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { GoThreeBars } from "react-icons/go"
import { GatsbyContext } from "../context/context"

const query = graphql`
  {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Navigation = () => {
  const [active, setActive] = useState(false)
  const { showSidebar, isSidebarOpen, links } = useContext(GatsbyContext)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  const toggleActiveClass = () => {
    const currentState = active
    setActive(!currentState)
  }

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
          {!isSidebarOpen && (
            <button className="btn-toggle" onClick={showSidebar}>
              <GoThreeBars />
            </button>
          )}
          <div className="nav-links">
            {links.map((link, index) => {
              const { url, label } = link

              return (
                <li key={index} className="item">
                  <Link
                    onClick={toggleActiveClass}
                    activeClassName="active"
                    className="link"
                    to={url}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navigation

const Wrapper = styled.header`
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
      font-size: 5rem;
      border: transparent;
      color: var(--color-primary-blue-dark);
      background-color: transparent;
      cursor: pointer;

      @media screen and (min-width: 900px) {
        display: none;
      }
    }

    .nav-links {
      display: none;

      @media screen and (min-width: 900px) {
        display: flex;
        align-content: center;

        .link {
          font-size: 1.8rem;
          color: var(--color-primary-blue-dark);
          text-transform: uppercase;
          margin-left: 1rem;
          transition: all 0.2s;

          &:hover {
            border-bottom: 3px solid var(--color-primary-red);
          }
        }

        .active {
          border-bottom: 3px solid var(--color-primary-red);
        }
      }
    }
  }
`
