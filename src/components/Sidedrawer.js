import React, { useContext } from "react"
import styled, { css, keyframes } from "styled-components"
import { GatsbyContext } from "../context/context"
import { MdClose } from "react-icons/md"
import { Link } from "gatsby"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"

const Sidedrawer = () => {
  const { hideSidebar, isSidebarOpen, links } = useContext(GatsbyContext)
  return (
    <Wrapper isSidebarOpen={isSidebarOpen}>
      <button onClick={hideSidebar}>
        <MdClose className="icon" />
      </button>
      <div className="background"></div>
      {/* eslint-disable-next-line */}
      <nav className="nav" onClick={hideSidebar}>
        <ul className="list">
          {links.map((link, index) => {
            const { url, label } = link
            return (
              <li key={index} className="item">
                <Link className="link" to={url} onClick={hideSidebar}>
                  {label}
                </Link>
              </li>
            )
          })}
          <div className="social">
            <div className="facebook">
              {/* eslint-disable-next-line */}
              <a href="#">
                <AiOutlineFacebook className="icon" />
              </a>
            </div>
            <div className="instagram">
              {/* eslint-disable-next-line */}
              <a href="#">
                <AiOutlineInstagram className="icon" />
              </a>
            </div>
          </div>
        </ul>
      </nav>
    </Wrapper>
  )
}

const grow = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(180);
    }
`
const fadeDown = keyframes`
    from {
        transform: translateY(-2rem);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`
const FadeRight = keyframes`
    from {
        opacity: 0;
        width: 0;
    }
    to {
        opacity: 1;
        width: 100%;
    }
`

const Wrapper = styled.section`
  position: absolute;
  .background {
    position: fixed;
    top: -5.9rem;
    right: 4rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--color-primary-blue-dark);
    z-index: 1000;
    /* transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1); */
    animation: ${grow} 0.8s cubic-bezier(0.83, 0, 0.17, 1);

    ${props =>
      props.isSidebarOpen &&
      css`
        transform: scale(160);
      `}
  }

  button {
    cursor: pointer;
    background-color: transparent;
    .icon {
      color: var(--color-primary-red);
      font-size: 6rem;
      position: fixed;
      top: 2rem;
      right: 2rem;
      z-index: 2000;
      animation: ${fadeDown} 0.8s cubic-bezier(0.83, 0, 0.17, 1);
    }
  }

  .nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    opacity: 0;
    width: 0;
    color: var(--color-gray-light-1);
    animation: ${FadeRight} 0.8s cubic-bezier(0.83, 0, 0.17, 1) forwards;

    .list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      list-style: none;
      text-align: center;
      width: 100%;
      .item {
        margin: 1rem;
        .link {
          color: var(--color-gray-light-1);
          font-size: 3rem;
          text-transform: uppercase;
          padding: 1rem 2rem;

          &:hover {
            color: var(--color-primary-red);
            transform: scale(1.1) translateY(-1px);
          }
        }
      }

      .social {
        display: inline-flex;
        margin-top: 1rem;

        .icon {
          font-size: 5rem;
          cursor: pointer;
          color: var(--color-gray-light-1);
        }

        .facebook {
          margin-right: 2rem;
          transition: all 0.2s;
          &:hover .icon {
            color: var(--color-primary-red);
            transform: scale(1.1) translateY(-1px);
          }
        }

        .instagram .icon {
          transition: all 0.2s;
          &:hover {
            color: var(--color-primary-red);
            transform: scale(1.1) translateY(-1px);
          }
        }
      }
    }
  }
`

export default Sidedrawer
