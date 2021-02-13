import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: 'Alegreya Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-size: 10px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
  }

  h1 {
    font-size: 5rem;
    text-align: center;
    letter-spacing: 1px;
  }

  h2 {
  font-size: 2.2rem;
  text-align: center;
}

  a {
    color: var(--black);
    text-decoration: none;
  }

  a[href^="mailto:"] {
    color: var(--blue);
    text-decoration: none;
  }

  a[href^="mailto:"]:hover {
    text-decoration: underline;
    text-decoration-color: var(--blue);
  }
`;

export default Typography;
