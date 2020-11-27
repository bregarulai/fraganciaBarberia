import React from "react"
import styled from "styled-components"
import beard from "../images/beard-red.png"
import mustage from "../images/mustage-red.png"
import combScissor from "../images/combScissor-red.png"
import razor from "../images/razor-red.png"
import ServiceBackground from "./ServiceBackground"
import { Link } from "gatsby"

const Service = () => {
  return (
    <Wrapper className="section">
      <div className="section-center services">
        <h2>our services</h2>
        <div className="underline"></div>
        <div className="service-sections">
          <div className="text">
            <p>
              Josdek Barbershop offers world-class men's haircuts, beard
              grooming, and hot razor shaves. Here are just some of the services
              we are famous for. Get comfortable in a classic barber chair and
              relax while your barber achieves your desired look. All cuts
              include a straight razor nape shave. Let our barbers apply their
              artistry to help you create the perfectly shaped beard or mustache
              style you envision.
            </p>
          </div>
          <ServiceBackground>
            <div className="services-sub">
              <div className="service">
                <Link to="/" className="link">
                  <div className="img-box">
                    <img src={beard} alt="josdek barbershop beard icon" />
                  </div>
                  <h3>beard trim</h3>
                </Link>
                <p>
                  Well-trimmed beard is a must-have element of every men’s image
                </p>
              </div>
              <div className="service">
                <Link to="/" className="link">
                  <div className="img-box">
                    <img
                      src={mustage}
                      alt="josdek barbershop mustage trim icon"
                    />
                  </div>
                  <h3>mustage trim</h3>
                </Link>
                <p>Mustaches also need to be trimmed regularly </p>
              </div>
              <div className="service">
                <Link to="/" className="link">
                  <div className="img-box">
                    <img
                      src={combScissor}
                      alt="josdek barbershop traditional haircut icon"
                    />
                  </div>
                  <h3>traditional haircut</h3>
                </Link>
                <p>One of the most popular services our barbers provide</p>
              </div>

              <div className="service">
                <Link to="/" className="link">
                  <div className="img-box">
                    <img src={razor} alt="josdek barbershop razor icon" />
                  </div>
                  <h3>shaves</h3>
                </Link>
                <p>Our shaving services will make you look really handsome</p>
              </div>
            </div>
          </ServiceBackground>
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

      @media screen and (min-width: 600px) {
        font-size: 3rem;
      }
    }

    .service-sections {
      display: grid;
      grid-template-columns: 1fr;

      @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        margin-top: 5rem;
      }

      .text {
        font-size: 1.6rem;
        margin: 5rem 0;

        @media screen and (min-width: 600px) {
          font-size: 2rem;
        }

        @media screen and (min-width: 900px) {
          width: 80%;
          margin: 0 auto;
        }
      }

      .services-sub {
        color: var(--color-gray-light-1);
        text-align: center;

        @media screen and (min-width: 900px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }

        .service {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          margin: 5rem 0;

          @media screen and (min-width: 900px) {
            margin: 0;
          }

          .link {
            transition: all 0.2s;
            &:hover {
              transform: scale(1.1) translateY(-0.4rem);
            }
          }

          .img-box {
            width: 5rem;
            margin: 0 auto;
            img {
              height: 100%;
            }
          }

          h3 {
            font-size: 1.8rem;
            text-transform: uppercase;
            font-weight: 300;
            color: var(--color-primary-red);
            margin: 1rem 0;

            @media screen and (min-width: 600px) {
              font-size: 2rem;
            }
          }

          p {
            font-size: 1.6rem;

            @media screen and (min-width: 600px) {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`

export default Service
