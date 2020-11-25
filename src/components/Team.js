import { useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import TeamCard from "./TeamCard"

export const query = graphql`
  {
    allContentfulTeam(sort: { order: ASC, fields: createdAt }) {
      nodes {
        contentful_id
        name
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Team = () => {
  const {
    allContentfulTeam: { nodes: team },
  } = useStaticQuery(query)

  return (
    <Wrapper className="section">
      <div className="section-center team-section">
        <h2>meet the team</h2>
        <div className="underline"></div>
        <div className="team-grid">
          {team.map(barber => {
            const { contentful_id } = barber
            return <TeamCard key={contentful_id} barber={barber} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .team-section {
    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--color-primary-blue-dark);
    }

    .team-grid {
      display: grid;
      grid-template-columns: 1fr;

      @media screen and (min-width: 900px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
      }

      @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
`

export default Team
