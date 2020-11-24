import React from "react"
import styled from "styled-components"
import beard from "../images/beard-red.png"
import mustage from "../images/mustage-red.png"
import combScissor from "../images/combScissor-red.png"
import razor from "../images/razor-red.png"
import ServiceBackground from "./ServiceBackground"

const Service = () => {
  return (
    <Wrapper className="section">
      <div className="section-center services">
        <h2>our services</h2>
        <div className="underline"></div>
        <div className="service-sections">
          <div className="text">
            <p>
              Barbershop offers world-class men's haircuts, beard grooming, and
              hot razor shaves. Here are just some of the services we are famous
              for.
            </p>
          </div>
          <div className="services-sub">
            <ServiceBackground>
              <div className="service">
                <div className="img-box">
                  <img src={beard} alt="josdek barbershop beard icon" />
                </div>
                <h3>beard trim</h3>
                <p>
                  Well-trimmed beard is a must-have element of every men’s image
                </p>
              </div>
              <div className="service">
                <div className="img-box">
                  <img
                    src={mustage}
                    alt="josdek barbershop mustage trim icon"
                  />
                </div>
                <h3>mustage trim</h3>
                <p>Mustaches also need to be trimmed regularly </p>
              </div>
              <div className="service">
                <div className="img-box">
                  <img
                    src={combScissor}
                    alt="josdek barbershop traditional haircut icon"
                  />
                </div>
                <h3>traditional haircut</h3>
                <p>One of the most popular services our barbers provide</p>
              </div>
              <div className="service">
                <div className="img-box">
                  <img src={razor} alt="josdek barbershop razor icon" />
                </div>
                <h3>shaves</h3>
                <p>Our shaving services will make you look really handsome</p>
              </div>
            </ServiceBackground>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .services {
    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--color-primary-blue-dark);
    }

    .service-sections {
      display: grid;
      grid-template-columns: 1fr;

      .text {
        font-size: 1.6rem;
        margin: 5rem 0;
      }

      .services-sub {
        color: var(--color-gray-light-1);
        text-align: center;

        .service {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;

          .img-box {
            width: 5rem;
            justify-self: center;
          }

          h3 {
            font-size: 1.8rem;
            text-transform: uppercase;
            font-weight: 300;
            color: var(--color-primary-red);
            margin: 1rem 0;
          }

          p {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
`

export default Service
