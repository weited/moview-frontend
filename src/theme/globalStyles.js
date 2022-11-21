import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
    }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F8F8F8;
  }

  html,
  body,
  #root,
  .App {
    min-height: 100%;
  }

  a {
    cursor: pointer;
    ${'' /* text-decoration: none; */}
  }

  ol,
  ul,
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
