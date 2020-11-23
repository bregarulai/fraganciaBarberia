import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
    --color-white: #fff;
    --color-black: #000;

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
    font-size: 56.25%;
}

body {
    box-sizing: border-box;
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

@media screen and (min-width: 992px) {
    .section-center {
        width: 95vw;
    }
}

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
