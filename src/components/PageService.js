import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import ServiceCard from "./ServiceCard"

const query = graphql`
  {
    allContentfulService {
      nodes {
        contentful_id
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const PageService = () => {
  const {
    allContentfulService: { nodes: services },
  } = useStaticQuery(query)

  return (
    <Wrapper className="section">
      <div className="section-center service-section">
        <h2>our services</h2>
        <div className="underline"></div>
        <div className="service-grid">
          {services.map(service => {
            return <ServiceCard key={service.contentful_id} service={service} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .service-section {
    margin-top: -20rem;

    @media screen and (min-width: 600px) {
      margin-top: -17rem;
    }

    @media screen and (min-width: 900px) {
      margin-top: -12rem;
    }

    @media screen and (min-width: 1200px) {
      margin-top: -26rem;
    }
    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 3rem;
      color: var(--color-primary-blue-dark);
    }

    .service-grid {
      display: grid;
      margin-top: 5rem;
      gap: 5rem;
      grid-template-columns: 1fr;

      @media screen and (min-width: 900px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
`

export default PageService
