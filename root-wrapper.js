import React from "react"
import { createGlobalStyle } from "styled-components"
import { GatsbyProvider } from "./src/context/context"

const GlobalStyle = createGlobalStyle`
:root {
    --color-white: #fff;
    --color-black: #000;

    --color-primary-blue-dark: #0F1131;
    --color-primary-red: #C02232;

    --color-gray-light-1: #f7f7f7;
    --color-gray-light-2: #eee;
    --color-gray-dark-1: #777;
    --color-gray-dark-2: #999;
    --color-gray-dark-3: #333;

    --max-width: 1170px;
}

*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 50%;
}

body {
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: var(--color-gray-dark);
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    display: inline-block;
}

img {
    width: 100%;
    display: block;
}

.section {
    padding: 5rem 0;
    position: relative;
}

.section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
}

.underline {
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--color-primary-red);
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 600px) {

    html {
        font-size: 56.25%;
    }
    
}
@media screen and (min-width: 900px) {

    html {
        font-size: 62.5%;
    }
    .section-center {
        width: 95vw;
    }
}

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  )
}
