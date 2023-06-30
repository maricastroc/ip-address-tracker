import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-800']};
  }

  body {
    background: ${(props) => props.theme['base-white']};
    color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
