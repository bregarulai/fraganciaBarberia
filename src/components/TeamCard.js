import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const TeamCard = ({ barber }) => {
  const {
    name,
    description: { description },
    image: { fluid },
  } = barber

  return (
    <Wrapper>
      <Image fluid={fluid} alt={`josdek barbershop team member ${name}`} />
      <h4>{name}</h4>
      <p>{description}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid var(--color-gray-light-2);
  border-radius: 3px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin: 5rem 0;
  overflow: hidden;
  text-align: center;
  padding-bottom: 5rem;

  @media screen and (min-width: 900px) {
    &:last-child {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    &:last-child {
      margin-top: 5rem;
    }
  }
  }

  h4 {
    font-size: 1.8rem;
    text-transform: capitalize;
    margin-top: 2rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.4;
    margin-top: 1rem;
    padding: 0 2rem;
  }
`

export default TeamCard
