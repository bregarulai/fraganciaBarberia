import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const query = graphql`
  {
    imageLeft: file(relativePath: { eq: "about-img-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageRight: file(relativePath: { eq: "about-img-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    imageLeft: {
      childImageSharp: { fluid: imageLeft },
    },
    imageRight: {
      childImageSharp: { fluid: imageRight },
    },
  } = useStaticQuery(query)
  // const {
  //   imageRight: {
  //     childImageSharp: { fluid: imageRight },
  //   },
  // } = useStaticQuery(query)

  return (
    <Wrapper id="about" className="section">
      <div className="section-center about">
        <h2 className="about__title">about us</h2>
        <div className="underline"></div>
        <div className="about__sections">
          <div className="about-section left">
            <Image fluid={imageLeft} alt="josdek barbershop about us photo" />
            <div className="text">
              <h2>best barbershop in orlando</h2>
              <p>
                Josdek Barbershop always offers professional quality for all of
                our customers. Are you looking for quality? You found it! Our
                services are dedicated for your personal success. Let our barber
                to be your personal stylist and you will never be disappointed.
                In addition we place your personal style vision above all the
                other things. Most of our visitors are our regular clients now.
                Our professional service and our care about their notion makes
                them leave with a smile on their faces and totally satisfied.
                Many of our clients claims it was a best Orlando barbershop,
                they had visit.
              </p>
            </div>
          </div>
          <div className="about-section right">
            <Image fluid={imageRight} alt="josdek barbershop about us photo" />
            <div className="text">
              <h2>most accessible barbershop in orlando</h2>
              <p>
                Our modernly equipped Barbershop is located in one step away
                from the Florida Mall – on 8421 South Orange Blossom Trail Suite
                229 and Sand Lake Rd. We are open 6 days a week from early
                morning until evening, making it possible to get a haircut
                during the hours most convenient for you. We won`t waste even
                one moment of your time. We do our work, you enjoy your time and
                your style. Here at Josdek Barbershop we respect your time and
                try our best for our services to be most accessible, most
                enjoyable and convenient Orlando barber shop ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .about {
    &__title {
      text-align: center;
      text-transform: uppercase;
      font-size: 3rem;
      color: var(--color-primary-blue-dark);

      @media screen and (min-width: 600px) {
        font-size: 3rem;
      }
    }

    &__sections {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
      }

      .about-section {
        margin-top: 5rem;

        @media screen and (min-width: 900px) {
          &:first-child {
            display: flex;
            flex-direction: column-reverse;

            h2 {
              margin-top: 0;
            }

            p {
              margin-bottom: 1rem;
            }
          }
        }

        h2 {
          text-transform: uppercase;
          font-weight: 300;
          font-size: 2.8rem;
          text-align: center;
          margin-top: 3rem;

          @media screen and (min-width: 600px) {
            font-size: 3rem;
          }

          @media screen and (min-width: 1200px) {
            font-weight: 400;
            margin-top: 1rem;
          }
        }

        p {
          font-size: 2.2rem;
          margin-top: 1rem;

          @media screen and (min-width: 600px) {
            font-size: 2rem;
          }
        }
      }
    }
  }
`

export default About
