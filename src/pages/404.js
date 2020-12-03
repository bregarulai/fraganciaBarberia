import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Layout, PageBackground, SEO } from "../components"

const erroPage = () => {
  return (
    <Layout>
      <SEO title="Error Page" />
      <PageBackground />
      <Content className="section">
        <div className="section-center error-section">
          <h2>page not found</h2>
          <h3>404</h3>
          <Link to="/" className="btn">
            home
          </Link>
        </div>
      </Content>
    </Layout>
  )
}

const Content = styled.section`
  margin-top: -15rem;

  @media screen and (min-width: 600px) {
    margin-top: -13rem;
  }

  @media screen and (min-width: 900px) {
    margin-top: -11.5rem;
  }

  @media screen and (min-width: 1200px) {
    margin-top: -33.5rem;
  }

  .error-section {
    text-align: center;
    h2 {
      font-size: 4rem;
      text-transform: capitalize;
    }

    h3 {
      font-size: 10rem;
    }

    .btn {
      font-size: 1.8rem;
      color: var(--color-gray-light-1);
      background-color: var(--color-primary-blue-dark);
      padding: 1rem 5rem;
      border-radius: 5px;
      text-transform: uppercase;
      width: 20rem;
      text-align: center;
      justify-self: center;
      transition: all 0.2s;
      margin-top: 2rem;

      &:hover {
        background-color: var(--color-primary-red);
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      }

      &:active {
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      }
    }
  }
`

export default erroPage
