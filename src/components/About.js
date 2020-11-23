import { useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

export const query = graphql`
  {
    imageLeft: file(relativePath: { eq: "about-img-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageRight: file(relativePath: { eq: "about-img-2.jpg" }) {
      childImageSharp {
        fluid {
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
  } = useStaticQuery(query)
  const {
    imageRight: {
      childImageSharp: { fluid: imageRight },
    },
  } = useStaticQuery(query)
  console.log(imageLeft)
  console.log(imageRight)

  return (
    <Wrapper className="section">
      <div className="section-center about">
        <h1 className="about__title">about us</h1>
        <div className="underline"></div>
        <div className="about__sections">
          <div className="section">
            <Image fluid={imageLeft} alt="josdek barbershop about us photo" />
            <h2>best barbershop in orlando</h2>
            <p>
              Josdek Barbershop always offers professional quality for all of
              our customers. Are you looking for quality? You found it! Our
              services are dedicated for your personal success. Let our barber
              to be your personal stylist and you will never be disappointed. In
              addition we place your personal style vision above all the other
              things. Most of our visitors are our regular clients now. Our
              professional service and our care about their notion makes them
              leave with a smile on their faces and totally satisfied. Many of
              our clients claims it was a best Orlando barbershop, they had
              visit.
            </p>
          </div>
          <div className="section">
            <Image fluid={imageRight} alt="josdek barbershop about us photo" />
            <h2>most accessible barbershop in orlando</h2>
            <p>
              Our modernly equipped Barbershop is located in one step away from
              the Florida Mall – on 3322 Orange Blossom Trail and Sand Lake Rd.
              We are open 6 days a week from early morning until evening, making
              it possible to get a haircut during the hours most convenient for
              you. We won`t waste even one moment of your time. We do our work,
              you enjoy your time and your style. Here at Josdek Barbershop we
              respect your time and try our best for our services to be most
              accessible, most enjoyable and convenient Orlando barber shop
              ever.
            </p>
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
      font-size: 2rem;
      color: var(--color-primary-blue-dark);
    }

    &__sections {
      display: flex;
      flex-direction: column;

      .section {
        h2 {
          text-transform: uppercase;
          font-weight: 300;
          font-size: 1.8rem;
          text-align: center;
          margin-top: 1rem;
        }

        p {
          font-size: 1.6rem;
          margin-top: 1rem;
        }
      }
    }
  }
`

export default About
