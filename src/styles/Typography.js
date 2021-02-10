import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: Alegreya, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-size: 10px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  h1 {
    font-size: 5rem;
  }

  a {
    color: var(--black);
    text-decoration: none;
  }
`;

export default Typography;
