import { createGlobalStyle } from 'styled-components'
import colors from './styles/colors'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${colors.background};
    overflow: hidden;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
