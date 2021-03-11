import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* 
      Box sizing reset
      ------------------------------ */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* 
      CSS custom properties
      ------------------------------ */
    :root {
        // spacers
        --s-xs: 0.4rem;
        --s-sm: 0.8rem;
        --s-md: 1.6rem;
        --s-lg: 2.4rem;
        --s-xl: 3.2rem;
        --s-2x: 4.8rem;

        // border radii
        --border-radius-default: 4px;
    }  

  /* 
      App base styles
      ------------------------------ */
  html {
    background-color: #fff;
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 1em;
  }

  .App {
    max-width: 768px;
    margin: var(--s-2x) auto;
  }
`

export default GlobalStyle
