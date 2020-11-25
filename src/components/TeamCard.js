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
      <div className="side front">
        <Image
          className="img"
          fluid={fluid}
          alt={`josdek barbershop team member ${name}`}
        />
      </div>
      <div className="side back">
        <div className="info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid var(--color-gray-light-2);
  border-radius: 3px;

  margin: 5rem 0;
  overflow: hidden;
  text-align: center;
  padding-bottom: 5rem;

  .side {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 900px) {
    &:last-child {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    border: none;
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 75rem;
    backface-visibility: hidden;

    .side {
      height: 60rem;
      transition: all 0.8s ease;
      position: absolute;
      top: 4rem;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      border-radius: 3px;
      overflow: hidden;
    }

    .front {
      .img {
        height: 100%;
      }
    }

    .back {
      transform: rotateY(180deg);
      background-color: var(--color-primary-blue-dark);
      color: var(--color-gray-light-1);
      .info {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:last-child {
      margin-top: 5rem;
    }

    &:hover .front {
      transform: rotateY(-180deg);
    }
    &:hover .back {
      transform: rotateY(0);
    }
  }

  h4 {
    font-size: 2rem;
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
