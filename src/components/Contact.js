import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery } from "gatsby"
import GoogleMap from "./GoogleMap"

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
        <div className="info-container">
          <div className="info">
            <div className="address">
              <h4>address</h4>
              <p>8421 South Orange Blossom Trail Suite 229</p>
              <p>Orlando FL 32809</p>
              <p>407 844 1446</p>
            </div>
            <div className="hours">
              <h4>openning hours</h4>
              <div className="group">
                <p>Monday – Saturday</p>
                <p>9am - 7pm</p>
              </div>

              <div className="group">
                <p>Sundays</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <Image fluid={fluid} alt="josdek barbershop contact photo" />
          </div>
        </div>
        {/* <GoogleMap /> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .contact-section {
    padding-bottom: 3rem;

    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--color-primary-blue-dark);

      @media screen and (min-width: 600px) {
        font-size: 3rem;
      }
    }

    .info-container {
      @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        margin-top: 5rem;
      }

      .info {
        font-size: 1.6rem;
        margin: 5rem 0;
        text-align: center;

        @media screen and (min-width: 600px) {
          font-size: 2rem;
        }

        .address {
          line-height: 1.5;
          h4 {
            font-size: 3rem;
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
            font-size: 3rem;
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

        .img-box {
          margin-top: 5rem;
        }
      }
    }
  }
`

export default Contact
