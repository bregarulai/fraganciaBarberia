import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link, useStaticQuery } from "gatsby"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"

export const query = graphql`
  {
    file(relativePath: { eq: "logo-white.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Footer = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper className="section">
      <div className="section-center footer-section">
        <div className="main-info">
          <div className="logo-box">
            <Image fluid={fluid} alt="josdek barbershop logo" />
          </div>
          <div className="address">
            <p>3234 Orange Blossom Trail</p>
            <p>Orlando FL 33233</p>
            <p>405 323 3433</p>
          </div>
        </div>
        <div className="sub-info">
          <h4>company info</h4>
          <Link to="/" className="link">
            about us
          </Link>
          <Link to="/" className="link">
            meet the team
          </Link>
          <Link to="/" className="link">
            our services
          </Link>
          <div className="social">
            <div className="facebook">
              <a href="#">
                <AiOutlineFacebook className="icon" />
              </a>
            </div>
            <div className="instagram">
              <a href="#">
                <AiOutlineInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="service">
          <h4>our services</h4>
          <p>Fade Haircuts</p>
          <p>Comb Over Hair</p>
          <p>Kids Haircuts</p>
          <p>Blowout Haircuts</p>
          <p>Beards Trims/Shaves</p>
          <p>Edge/Shape-Ups</p>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Josdek Barber. Website created by{" "}
            <a href="www.flavioaquino.com">Flavio Aquino</a>.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: var(--color-gray-light-1);
  background-color: var(--color-primary-blue-dark);
  .footer-section {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    .main-info {
      .logo-box {
        width: 20rem;
        margin: 0 auto;
      }

      .address {
        font-size: 1.6rem;
        line-height: 1.5;
        text-align: center;
        margin-top: 2rem;
      }
    }

    .sub-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-self: center;

      h4 {
        font-size: 2rem;
        font-weight: 300;
        border-bottom: 1px solid var(--color-gray-light-1);
        text-transform: uppercase;
        display: inline-block;
        margin-top: 2rem;
      }

      a {
        color: inherit;
        text-transform: capitalize;
        font-size: 1.6rem;
        align-self: center;
        margin-top: 1rem;
        transition: all 0.2s;
        &:hover {
          color: var(--color-primary-red);
          transform: scale(1.1) translateY(-1px);
        }
      }

      .social {
        /* font-size: 1.6rem; */
        display: flex;
        align-items: center;
        align-self: center;
        margin-top: 1rem;

        .icon {
          font-size: 3rem;
          cursor: pointer;
        }

        .facebook {
          margin-right: 2rem;
          transition: all 0.2s;
          &:hover {
            color: var(--color-primary-red);
            transform: scale(1.1) translateY(-1px);
          }
        }

        .instagram {
          transition: all 0.2s;
          &:hover {
            color: var(--color-primary-red);
            transform: scale(1.1) translateY(-1px);
          }
        }
      }
    }

    .service {
      display: flex;
      flex-direction: column;

      h4 {
        font-size: 2rem;
        font-weight: 300;
        border-bottom: 1px solid var(--color-gray-light-1);
        text-transform: uppercase;
        display: inline-block;
        margin-top: 2rem;
        align-self: center;
      }

      p {
        font-size: 1.6rem;
        text-align: center;
        margin-top: 1rem;
      }
    }

    .copyright {
      font-size: 1.6rem;
      border-top: 1px solid var(--color-gray-light-1);
      padding: 5rem 0;
      margin-top: 5rem;
      text-align: center;

      a {
        color: inherit;
        border-bottom: 1px solid var(--color-gray-light-1);
        transition: all 0.2s;

        &:hover {
          color: var(--color-primary-red);
          border-bottom: 1px solid var(--color-primary-red);
        }
      }
    }
  }
`

export default Footer
