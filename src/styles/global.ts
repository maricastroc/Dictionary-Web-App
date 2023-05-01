import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['spot-light-color']};
  }

  body {
    background: ${(props) => props.theme['bg-color']};
    color: ${(props) => props.theme['main-font-color']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 0.95rem;
    font-family: ${(props) => props.theme['font-family']};
  }

  a {
    text-decoration: none;
  }
`
