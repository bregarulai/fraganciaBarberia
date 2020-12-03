import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { WrappedMap } from "./Map"

const query = graphql`
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
              <div
                className="phone-info"
                itemscope
                itemtype="https://schema.org/LocalBusiness"
              >
                <span itemprop="telephone">
                  <a href="tel:+14078441446">407 844 1446</a>
                </span>
              </div>
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
        <div className="map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
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
      font-size: 3rem;
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
        font-size: 2.2rem;
        margin: 5rem 0;
        text-align: center;

        .address {
          line-height: 1.5;
          h4 {
            font-size: 3rem;
            font-weight: 300;
            text-transform: uppercase;
            margin-bottom: 1rem;
          }

          a {
            color: var(--color-gray-dark-3);
            margin-top: 1rem;
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

    .map {
      width: 100%;
      height: 40rem;
      margin: 0 auto;
      margin: 5rem 0;

      @media screen and (min-width: 900px) {
        height: 60rem;
      }
    }
  }
`

export default Contact
