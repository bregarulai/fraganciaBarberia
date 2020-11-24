import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery } from "gatsby"

export const query = graphql`
  {
    file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Contact = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper className="section">
      <div className="section-center contact-section">
        <h2>contact us</h2>
        <div className="underline"></div>
        <div className="info">
          <div className="address">
            <h4>address</h4>
            <p>3234 Orange Blossom Trail</p>
            <p>Orlando FL 33233</p>
            <p>405 323 3433</p>
          </div>
          <div className="hours">
            <h4>openning hours</h4>
            <div className="group">
              <p>Monday – Tuesday</p>
              <p>9am - 7pm</p>
            </div>
            <div className="group">
              <p>Thursday – Saturday</p>
              <p>9am - 7pm</p>
            </div>
            <div className="group">
              <p>Wednesday</p>
              <p>Appointment Only</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <Image fluid={fluid} alt="josdek barbershop contact photo" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .contact-section {
    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--color-primary-blue-dark);
    }

    .info {
      font-size: 1.6rem;
      margin: 5rem 0;
      text-align: center;

      .address {
        line-height: 1.5;
        h4 {
          font-size: 2rem;
          font-weight: 300;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        p:last-child {
          margin-top: 1rem;
        }
      }

      .hours {
        margin-top: 3rem;
        h4 {
          font-size: 2rem;
          font-weight: 300;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .group {
          line-height: 1.5;
        }

        .group:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }
  }
`

export default Contact
