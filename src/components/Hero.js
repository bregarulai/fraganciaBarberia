import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import Background from "./Background"
import Image from "gatsby-image"

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

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper className="section">
      <Background>
        <article className="hero">
          <div className="hero__logo">
            <Image fluid={fluid} alt="josdek barbershop logo" />
          </div>
          <h1 className="hero__heading">
            <span className="hero__heading--primary">josdek barbershop</span>
            <span className="hero__heading--secondary">
              where details make the differences
            </span>
          </h1>
          <div className="hero__info">
            <p>8421 South Orange Blossom Trail Suite 229</p>
            <p>Orlando FL 32809</p>
            <div
              className="phone-info"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <span itemProp="telephone">
                <a href="tel:+14078441446">407 844 1446</a>
              </span>
            </div>
          </div>
        </article>
      </Background>
    </Wrapper>
  )
}

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100%  {
        opacity: 1;
    }
`

const moveRight = keyframes`
    0% {
        transform: translateX(-30rem);
        opacity: 0;
    }
    80% {
        transform: translateX(2rem);
    }
    100%  {
        transform: translateX(0);
        opacity: 1;
    }
`
const moveLeft = keyframes`
    0% {
        transform: translateX(30rem);
        opacity: 0
    }
    80% {
        transform: translateX(-2rem);
    }
    100%  {
        transform: translateX(0);
        opacity: 1;
    }
`

const Wrapper = styled.section`
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 95vw;
    margin: 0 auto;
    max-width: var(--max-width);
    color: var(--color-primary-blue-dark);
    text-align: center;

    &__logo {
      width: 25rem;
      animation: ${fadeIn} 0.5s;

      @media screen and (min-width: 900px) {
        width: 30rem;
      }
    }

    &__heading {
      text-transform: uppercase;

      &--primary {
        display: block;
        font-size: 6rem;
        line-height: 1.1;
        font-weight: 300;
        margin-top: 3.5rem;
        animation: ${moveRight} 0.5s 0.5s backwards;

        @media screen and (min-width: 600px) {
          font-size: 6rem;
        }

        @media screen and (min-width: 900px) {
          font-size: 7rem;
        }
      }

      &--secondary {
        display: block;
        color: var(--color-primary-red);
        font-size: 3rem;
        font-weight: 300;
        line-height: 1.1;
        margin-top: 1rem;
        animation: ${moveLeft} 0.5s 0.5s backwards;

        @media screen and (min-width: 600px) {
          font-size: 3rem;
        }
      }
    }

    &__info {
      font-size: 2.2rem;
      line-height: 1.2;
      margin-top: 1rem;
      animation: ${fadeIn} 0.5s;

      @media screen and (min-width: 600px) {
        font-size: 2rem;
      }

      a {
        color: var(--color-gray-dark-3);
        margin-top: 1rem;
      }
    }
  }
`

export default Hero
