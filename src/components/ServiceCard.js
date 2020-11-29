import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const ServiceCard = ({ service }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="img-box">
          <Image
            className="img"
            fluid={service.image.fluid}
            alt={`josdek barbershop ${service.title}`}
          />
        </div>
        <div className="description">
          <h4>{service.title}</h4>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  .card {
    .img-box {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      margin: 3rem 0;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      .img {
        height: 100%;
      }
    }

    .description {
      font-size: 1.6rem;
      /* color: var(--color-gray-light-1); */
      text-transform: uppercase;
    }
  }
`

export default ServiceCard
