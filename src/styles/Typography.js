import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-size: 10px;
    @media screen and (max-width: 768px) {
    font-size: 8px;
    }
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    text-align: center;
  }

  h1 {
    font-size: 5rem;
    letter-spacing: 1px;
    font-weight: 600;
  }

  h2 {
    font-weight: 600;
    font-size: 4rem;
  }

  h3 {
  font-size: 2.2rem;
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
